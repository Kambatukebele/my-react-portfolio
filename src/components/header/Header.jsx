const Header = () => {
  return (
    <header className="relative w-full h-fit py-5 lg:h-[100vh] bg-gray-50 lg:flex lg:justify-between lg:items-center">
        <div className="w-[90%] mx-auto sm:w-[600px] md:w-[700px] lg:w-[900px] lg:flex lg:justify-between lg:items-center xl:w-[1220px]">
          <div className="lg:w-[450px] lg:h-[450px] xl:w-[600px]">
            {/* Title */}
            <h1 className="text-5xl font-extrabold text-center min-w-[286px] mx-auto mt-5 py-5 lg:mt-0 lg:text-left lg:text-6xl">
              Back-End <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Laravel</span> Developer
            </h1>
            {/* Description */}
            <p className="text-lg text-gray-500 min-w-[286px] mx-auto text-center mt-3 lg:mt-0 lg:text-left lg:w-96 lg:mx-0">
              Hi, I'm Kamba Tukebele. A passionate Back-end Laravel Developer based in Prague, Czechia. 📍
            </p>
            {/* Icons */}
            <div className="flex justify-center items-center my-3 lg:justify-start">
              <a href="https://www.linkedin.com/in/kamba-tukebele-516470b5/" className="block"><i class="fa-brands fa-linkedin mx-1 text-blue-700 text-3xl cursor-pointer"></i></a>
              <a href="https://github.com/Kambatukebele" className="block"><i class="fa-brands fa-github mx-1 text-blue-700 text-3xl cursor-pointer"></i></a>
            </div>
            {/* Button */}
            <div className="min-w-[286px] my-5 borders flex-col h-[110px] flex justify-between items-center sm:flex-row sm:justify-center lg:justify-start">
              <button className="block bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l text-white text-base w-48 py-3 rounded-md font-normal transition delay-150 duration-300 ease-in-out sm:mr-2 lg:py-3">
                <a className="uppercase" href="#">Download My CV</a>
              </button>
              <button className="block border text-blue-700 border-blue-700 hover:bg-gradient-to-r from-sky-500 to-indigo-500  hover:text-white text-base w-48 py-3 rounded-md font-normal sm:mx-2 lg:py-3"><a className="uppercase" href="https://www.youtube.com/@webizycode">View my Youtube</a></button>
            </div>
          </div>
          <div className="w-[280px] h-[280px] mx-auto rounded-lg sm:w-[550px] sm:h-[350px] md:w-[650px] md:h-[450px] lg:w-[450px] lg:mx-0 xl:w-[600px]">
            <img className="w-full h-full object-cover object-center rounded-lg" src="src/assets/images/kamba.jpg" alt="kamba-image" />
          </div>
        </div>
         {/* circle shadow */}
        <div className="border w-[200px] h-[200px] rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 absolute top-0 left-0 blur-3xl opacity-20 shadow-2xl lg:-top-20 lg:-left-64   lg:w-[400px] lg:h-[400px]">
        </div>
        {/* Bounce annimation  */}
        <div className="hidden border w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 lg:block lg:absolute lg:top-10 lg:left-96 lg:animate-bounce">          
        </div>
        
        {/* Pulse annimation */}
        <div className="hidden border w-32 h-32 rounded-full bg-gradient-to-r from-cyan-300 to-blue-300 lg:block lg:absolute lg:bottom-10 lg:right-3 2xl:right-56 lg:animate-pulse">          
        </div>
       
    </header>
  );
};
export default Header;
