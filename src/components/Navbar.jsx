import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between w-[2184px] m-auto">
      <nav className="flex justify-between items-center w-[700px] m-auto">
        <Link
          className=" hover:underline transition-all duration-300 hover:text-yellow-500 hover:scale-105  text-m font-normal"
          to="/"
        >
          Главная
        </Link>
        <Link
          className=" hover:underline transition-all duration-300 hover:text-yellow-500 hover:scale-105 text-m font-normal"
          to="/about"
        >
          О нас
        </Link>
        <Link
          className=" hover:underline transition-all duration-300 hover:text-yellow-500 hover:scale-105 text-m font-normal"
          to="/catalog"
        >
          Каталог
        </Link>
        <Link
          className=" hover:underline transition-all duration-300 hover:text-yellow-500 hover:scale-105 text-m font-normal"
          to="/blog"
        >
          Блог
        </Link>
        <Link
          className=" hover:underline transition-all duration-300 hover:text-yellow-500 hover:scale-105  text-m font-normal"
          to="/installment"
        >
          Расрочка
        </Link>
        <Link
          className=" hover:underline transition-all duration-300 hover:text-yellow-500 hover:scale-105 text-m font-normal"
          to="/contact"
        >
          Контакты
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
