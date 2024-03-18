const Input = ({ name, placeholder }:
  {
    name: string,
    placeholder: string
  }
) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      type="text"
      className="border-2 rounded-lg px-4 py-2"
    />
  );
};

export default Input;
