const About = () => {
  return (
    <>
      <section className="bg-gray-50 py-10 h-fit" id="aboutme">
        <div className="w-[90%] mx-auto sm:w-[600px] lg:w-[900px]">
          <div className="">
            <h2 className="text-4xl text-blue-500 uppercase font-extrabold my-3 text-center">About Me</h2>
            <h3 className="text-base font-normal text-gray-500 mb-3 text-center">
            A dedicated Front-end Developer based in Belgrade, Serbia 📍
            </h3>
          </div>
          <div className="lg:flex lg:justify-between lg:items-center">
            {/* Image */}
            <div className="min-w-[286px] mx-auto rounded-lg mt-10 mb-10 sm:w-[450px]">
              <img className="w-full h-full rounded-lg" src="src/assets/images/bg.jpeg" alt="" />
            </div>
            {/* Text */}
            <div className="min-w-[286px] text-gray-500 text-base font-normal mt-5 mx-auto text-center lg:w-[350px] lg:text-left">
            As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
