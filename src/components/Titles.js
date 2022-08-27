export const Titles = ({ title, subtitle }) => {
  return (
    <div>
      <div className="component-title">
        <div>{title}</div>
      </div>
      <div className="component-subtitle">
        <div>{subtitle}</div>
      </div>
    </div>
  );
};
