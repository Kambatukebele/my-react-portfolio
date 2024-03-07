import techStackIcons from "../../assets/iconsSvg.js";
const Stack = () => {
  return (
    <>
        <section className="hidden w-full lg:flex lg:justify-end lg:h-[120px] bg-gray-50">
        <div className="w-[90%] mx-auto sm:w-[600px] md:w-[700px] lg:w-[900px] lg:flex lg:justify-between lg:items-center xl:w-[1220px]">
                {techStackIcons.map((icon) => {
                    const { id, nameStack, theImg } = icon;
                    return (
                    <div className="w-14 h-14 grayscale" key={id}>
                      <img className="w-full h-full object-cover object-center" src={theImg} alt={nameStack} />
                    </div>
                    );
                })}
            
          {/* <div className="w-14 h-14 grayscale">
            <img className="w-full h-full object-cover object-center" src="src/assets/images/mysql.svg" alt="mysql-logo" />
          </div>
          <div className="w-14 h-14 grayscale">
            <img className="grayscale w-full h-full object-cover object-center" src="src/assets/images/git-svgrepo-com (1).svg" alt="git-logo" />
          </div>
          <div className="w-14 h-14 grayscale">
            <img className="w-full h-full object-cover object-center" src="src/assets/images/reactjs.svg" alt="reactjs-logo" />
          </div> 
          <div className="w-14 h-14 grayscale">
            <img className="w-full h-full object-cover object-center" src="src/assets/images/tailwind.svg" alt="tailwindcss-logo" />
          </div>
          <div className="w-14 h-14 grayscale">
            <img className="w-full h-full object-cover object-center" src="src/assets/images/css.svg" alt="css-logo" />
          </div>
          <div className="w-14 h-14 grayscale">
            <img className="w-full h-full object-cover object-center" src="src/assets/images/html.svg" alt="html-logo" />
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Stack