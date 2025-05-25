import Button from "../ui/Button";
import Language from "../ui/Language";
import Logo from "../ui/Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex justify-between w-[2184px] m-auto mt-8">
      <Logo />
      <Navbar />
      <Button title="+373 68 159 759" />
      <Language />
    </div>
  );
};

export default Header;
