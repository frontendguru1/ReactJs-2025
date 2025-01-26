const Input = ({ label, type }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} name="" id={label} />
    </div>
  );
};

export default Input;
