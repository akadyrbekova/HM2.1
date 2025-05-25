const Input = ({ text }) => {
  return (
    <>
      <input
        type="tel"
        className="rounded-[28px] w-[354px] h-[47px] pl-4 bg-white outline-none"
        placeholder={text}
      />
    </>
  );
};

export default Input;
