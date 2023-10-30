import HeaderLogo from "./HeaderLogo";
import navLinks from "../NavLinks.js";
const HeaderWrapper = ({ isOpen, toggle }) => {
  return (
    <>
      {/* <HeaderLogo />
      <navLinks /> */}
    </>
  )
}
//     <div className="header__wrapper">
//       <HeaderLogo />
//       <div className="header__navDiv">
//         <nav className="header__nav">
//           <ul className="header__ul">
//             {navLinks.map((showNavList) => {
//               const { id, menu, link } = showNavList;
//               return (
//                 <li key={id} className="header__li">
//                   <a href={link} className="header__link">
//                     {menu}
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </div>

//       {!isOpen ? (
//         <div className="menu-hamburger" onClick={toggle}>
//           <span className="material-symbols-outlined">menu</span>
//         </div>
//       ) : (
//         <>
//           <div className="btn-close">
//             <span className="material-symbols-outlined" onClick={toggle}>
//               close
//             </span>
//           </div>
//           <div className="nav-close">
//             {navLinks.map((HiddenMenu) => {
//               const { id, link, menu } = HiddenMenu;
//               return (
//                 <li key={id} className="nav-close__link">
//                   <a href={link}>{menu}</a>
//                 </li>
//               );
//             })}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
export default HeaderWrapper;
