export const Input = ({
  label = "label",
  value,
  id,
  onChange,
  type = "text"
}) => {
  return (
    <div className="wrap-input">
      <input
        id={id}
        className={value !== "" ? "has-val input" : "input"}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <span className="focus-input" data-placeholder={label}></span>
    </div>
  );
};
