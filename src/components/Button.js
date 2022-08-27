export const Button = ({ text, id, ...props }) => {
  return (
    <div>
      <button id={id} {...props}>
        {text}
      </button>
    </div>
  );
};
