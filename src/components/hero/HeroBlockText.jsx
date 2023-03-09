const HeroBlockText = () => {
  return (
    <div className="hero__block-text">
      <h1 className="hero__title">
        Back-End Laravel
        <br /> Developer
      </h1>
      <p className="hero__description">
        Hi there! I'am KAMBA Tukebele. A passionate Back-end Laravel Developer
        based in Prague, Czech Republic.
      </p>
      <p className="hero__description">
        I also have a good understanding of the front-end with Javascript |
        React
      </p>
      <div className="hero__icon-block">
        <div className="hero__github">
          <a href="https://github.com/Kambatukebele">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="hero__linkedin">
          <a href="https://www.linkedin.com/in/kamba-tukebele-516470b5/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default HeroBlockText;
