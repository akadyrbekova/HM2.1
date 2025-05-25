import Logo from "../../ui/Logo";
import Social from "./Social";
import Navbar from "../Navbar";
import BottomFooter from "./BottomFooter";
import Adress from "./Adress";

const Footer = () => {
  return (
    <div className="flex flex-col h-[393px]  w-[2184px] p-7">
      <div className="flex w-[2184px] justify-around m-auto mb-12">
        <div className="w-[514px]">
          <Logo />
          <p className="text-base font-normal">
            При создании кухни наши дизайнеры учитывают пожелания клиента,
            дополняя их своими идеями что бы сделать кухню еще лучше! Понравился
            дизайн? Напиши нам или закажи консультацию дизайнера amatto.
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg  font-bold">links</p>
          {/* <Navbar className="flex flex-col" /> */}
        </div>
        <Adress />
        <Social />
      </div>

      <BottomFooter />
    </div>
  );
};

export default Footer;
