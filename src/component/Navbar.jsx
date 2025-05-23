import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="nav flex justify-evenly items-center mt-8">
      <img src="../src/assets/img/logo.png" alt="" />
      <Link
        className="px-4 py-2  hover:underline transition-all duration-300 hover:bg-sky-700 hover:scale-105"
        to="/"
      >
        Главная
      </Link>
      <Link
        className="px-4 py-2  hover:underline transition-all duration-300 hover:bg-sky-700 hover:scale-105"
        to="/about"
      >
        О нас
      </Link>
      <Link
        className="px-4 py-2  hover:underline transition-all duration-300 hover:bg-sky-700 hover:scale-105"
        to="/catalog"
      >
        Каталог
      </Link>
      <Link
        className="px-4 py-2  hover:underline transition-all duration-300 hover:bg-sky-700 hover:scale-105"
        to="/blog"
      >
        Блог
      </Link>
      <Link
        className="px-4 py-2  hover:underline transition-all duration-300 hover:bg-sky-700 hover:scale-105"
        to="/installment"
      >
        Расрочка
      </Link>
      <Link
        className="px-4 py-2  hover:underline transition-all duration-300 hover:bg-sky-700 hover:scale-105"
        to="/contact"
      >
        Контакты
      </Link>
    </nav>
  );
};

export default Navbar;
