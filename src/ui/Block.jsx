import Input from "./Input";

const Block = ({ textBlog, textPromo, desc, inp }) => {
  return (
    <div className="w-full h-[347px] bg-[#FFCC29] my-14 flex items-center justify-center">
      <div className="flex flex-col items-center text-center max-w-[890px]">
        <p className="text-6xl font-bold text-[#39373A] mb-4">{textBlog}</p>
        <p className="text-[43px] text-[#39373A] font-bold mb-2">{textPromo}</p>
        <p className="text-xl font-normal text-[#39373A]">{desc}</p>
        {/* <Input /> */}
      </div>
    </div>
  );
};

export default Block;
