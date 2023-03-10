import techStackIcons from "../../assets/iconsSvg.js";
const StackListsIcons = () => {
  return (
    <div className="stack__lists">
      {techStackIcons.map((icon) => {
        const { id, nameStack, theImg } = icon;
        return (
          <div key={id} className="stack__list">
            <img className="stack__theImage" src={theImg} alt={nameStack} />
          </div>
        );
      })}
    </div>
  );
};
export default StackListsIcons;
