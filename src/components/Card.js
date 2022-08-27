export const Card = ({ title, text }) => {
  return (
    <div className="cards-home">
      <div className="card-title">
        <div className="title">{title}</div>
        <div className="card-bg">
          <div className="card-content">{text}</div>
        </div>
      </div>
    </div>
  );
};
