import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ HomeLinkToRender }) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-[#000435] w-full sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <motion.div
          initial={{ x: "-30vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 4 }}
          className="flex items-center space-x-3"
        >
          <img src={logo} alt="Logo" className="h-16 w-16 object-cover" />
          <h1 className="text-white font-bold text-lg">G.M ORINA & CO. ADVOCATES</h1>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          initial={{ y: "-30vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 4 }}
          className="hidden md:flex space-x-6"
        >
          {HomeLinkToRender && <HomeLinkToRender />}
          <ScrollLink
            to="about"
            smooth={true}
            offset={-50}
            duration={600}
            className="text-white hover:text-gray-300 cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="practice-areas"
            smooth={true}
            offset={-50}
            duration={600}
            className="text-white hover:text-gray-300 cursor-pointer"
          >
            Practice Areas
          </ScrollLink>
          <Link to="/our-people/" className="text-white hover:text-gray-300">
            Our People
          </Link>
          <Link to="/articles/" className="text-white hover:text-gray-300">
            Articles
          </Link>
          <Link to="/careers/" className="text-white hover:text-gray-300">
            Careers
          </Link>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-50}
            duration={600}
            className="text-white hover:text-gray-300 cursor-pointer"
          >
            Contact Us
          </ScrollLink>
          <Link to="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setShowMenu(!showMenu)} className="text-white text-2xl">
            {showMenu ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-white absolute top-16 left-0 w-full flex flex-col items-center space-y-4 p-4 shadow-lg border border-gray-200 rounded-lg">
          <Link to="/" className="text-[#000435] font-semibold py-2" onClick={() => setShowMenu(false)}>
            Home
          </Link>
          <ScrollLink
            to="about"
            smooth={true}
            offset={-50}
            duration={600}
            className="text-[#000435] font-semibold py-2 cursor-pointer"
            onClick={() => setShowMenu(false)}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="practice-areas"
            smooth={true}
            offset={-50}
            duration={600}
            className="text-[#000435] font-semibold py-2 cursor-pointer"
            onClick={() => setShowMenu(false)}
          >
            Practice Areas
          </ScrollLink>
          <Link to="/our-people/" className="text-[#000435] font-semibold py-2" onClick={() => setShowMenu(false)}>
            Our People
          </Link>
          <Link to="/articles/" className="text-[#000435] font-semibold py-2" onClick={() => setShowMenu(false)}>
            Articles
          </Link>
          <Link to="/careers/" className="text-[#000435] font-semibold py-2" onClick={() => setShowMenu(false)}>
            Careers
          </Link>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-50}
            duration={600}
            className="text-[#000435] font-semibold py-2 cursor-pointer"
            onClick={() => setShowMenu(false)}
          >
            Contact Us
          </ScrollLink>
          <Link to="/login" className="text-[#000435] font-semibold py-2" onClick={() => setShowMenu(false)}>
            Login
          </Link>
          <Link to="/contact">
            <button className="bg-[#000435] text-white px-4 py-2 rounded-lg mt-2">
              Get in Touch
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
