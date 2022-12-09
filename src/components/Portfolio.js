import React, { useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";
import Projects from './pages/Projects'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("/");

  const renderPage = () => {
    if (currentPage === "/") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects"){
      return < Projects />;

    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
