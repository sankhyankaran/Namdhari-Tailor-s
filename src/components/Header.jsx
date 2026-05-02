import { ListFilter, X } from "lucide-react";
import Logo from "./Logo";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Logo />

        {/* Navigation (Desktop) */}
        <nav className="hidden lg:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/men"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Men
          </NavLink>
          <NavLink
            to="/women"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Women
          </NavLink>
          <NavLink
            to="/kids"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Kids
          </NavLink>
          <NavLink
            to="/custom"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Custom Stitching
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <button className="border border-black px-4 py-2 rounded-full text-xs hover:bg-black hover:text-white">
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <ListFilter />
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-white z-50 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Header */}
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col space-y-4 p-4 text-gray-700">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/men"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Men
            </NavLink>
            <NavLink
              to="/women"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Women
            </NavLink>
            <NavLink
              to="/kids"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Kids
            </NavLink>
            <NavLink
              to="/custom"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Custom Stitching
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* CTA */}
          <div className="p-4">
            <button className="w-full bg-black rounded-full text-white py-2">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
