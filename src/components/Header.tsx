import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactDialog from "./ContactDialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            {/* <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </span> */}
            <img
              src="logo.png"
              alt="logo"
              className="w-full object-cover h-35 w-16 h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Portfolio
            </Link>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <ContactDialog>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200">
                Let's Talk
              </Button>
            </ContactDialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-white/10">
            <nav className="py-4 space-y-4">
              <Link
                to="/"
                className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <a
                href="#skills"
                className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#experience"
                className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#contact"
                className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4">
                <ContactDialog>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200">
                    Let's Talk
                  </Button>
                </ContactDialog>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
