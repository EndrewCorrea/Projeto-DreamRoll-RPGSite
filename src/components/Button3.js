export const Button3 = ({ text, img }) => {
  return (
    <div className="menu-items">
      <img src={img} />
      <a>{text}</a>
    </div>
  );
};
