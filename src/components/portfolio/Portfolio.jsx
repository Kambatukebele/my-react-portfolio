import portfolios from "./portfolioData";
const Portfolio = () => {
  return (
    <>
        <section className="w-full h-fit py-10 relative" id="projects">
            <div className="w-[90%] mx-auto sm:w-[600px] md:w-[700px] lg:w-[990px]">
                <div className="">
                    <h2 className="text-4xl text-blue-500 font-extrabold my-3 text-center uppercase">Portfolio</h2>
                    <h3 className="text-base font-normal text-gray-500 mb-3 text-center">
                    Each project is a unique piece of development
                    </h3>
                </div>
                <div className="w-[286px] mx-auto flex flex-col justify-center items-center sm:flex-row">
                    <button className="block bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l text-white text-base w-48 py-3 rounded-md font-normal transition delay-150 duration-300 ease-in-out sm:mr-2 lg:py-4 mb-2 sm:mb-0">
                        Back-End
                    </button>
                    <button className="block bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l text-white text-base w-48 py-3 rounded-md font-normal transition delay-150 duration-300 ease-in-out sm:mr-2 lg:py-4">
                        Front-End
                    </button>
                </div>
                {/* Cards */}
                <div className="my-10">
                    {/* Card */}
                    {
                        portfolios.map((portfolio) => (
                            <div key={portfolio.id} className="min-w-[286px] h-[725px] mx-auto shadow-xl rounded-xl border p-5 lg:flex lg:h-[410px] lg:bg-gray-50 mb-14">
                            {/* Image */}
                            <div className="h-[370px] w-full rounded-lg border mb-5 shadow-xl">
                                <img className="rounded-lg w-full h-full object-top object-cover" src={portfolio.img} alt="" />
                            </div>
                            {/* Web description */}
                            <div className="h-[370px] w-full">
                                <h3 className="uppercase text-lg font-semibold text-center mt-5 mb-2">
                                {portfolio.title}
                                </h3>
                                <p className="text-base text-gray-500 font-semibold text-center min-w-[230px] mx-auto sm:w-[300px]">
                                {portfolio.description}
                                </p>
                                <div className="flex justify-center items-center mt-5  min-w-[230px] mx-auto sm:w-[300px]">
                                <span className="shadow-lg border bg-white w-24 mr-1 text-center rounded-md py-1">{portfolio.stack[0]}</span>
                                <span className="shadow-lg border bg-white w-24 text-center rounded-md py-1">{portfolio.stack[1]}</span>
                                </div>
                                <div className="flex justify-between items-center mt-5  min-w-[230px] mx-auto sm:w-[300px]">
                                <a href={portfolio.links[0].github} className="w-24 text-center py-1 text-gray-500 font-semibold cursor-pointer text-base">Code <span><i class="fa-brands fa-github text-base"></i></span></a>
                                <a href={portfolio.links[0].live_website} className="w-24 text-center py-1 text-gray-500 font-semibold cursor-pointer text-base">Live</a>
                                </div>
                            </div>
                        </div>  
                        ))
                    }
                   
                </div>
            </div>
      </section>
    </>
  )
}

export default Portfolio