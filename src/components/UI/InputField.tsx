const InputField = ({
  value,
  handleChange,
}: {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <input
        type="text"
        className="rounded-2xl p-2 drop-shadow-md hover:cursor-text border border-slate-300 w-full"
        placeholder="Type your message..."
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default InputField;
