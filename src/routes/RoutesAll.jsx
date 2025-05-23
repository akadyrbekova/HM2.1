import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Catalog from "../pages/Catalog";
import Installment from "../pages/Installment";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";

const RoutesAll = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/installment" element={<Installment />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};

export default RoutesAll;
