import { Link } from "react-router";

const Header = () => {
  return (
    <nav className="flex justify-center items-center gap-6 bg-gray-800 text-white p-4 shadow-lg">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/installment">Installment</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Header;
