import HeaderWrapper from "./HeaderWrapper";

const Header = ({ isOpen, toggle }) => {
  return (
    <header className="header">
      <HeaderWrapper isOpen={isOpen} toggle={toggle} />
    </header>
  );
};
export default Header;
