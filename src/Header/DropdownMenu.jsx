import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { HashLink as Link } from 'react-router-hash-link';
import './DropdownMenu.scss';

const DropdownMenu = ({ title, items ,link }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    // Handle clicks outside dropdown
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    return (
      <div ref={dropdownRef} className="relative">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-2 text-white hover:text-gray-300 transition-all"
        >
          {title}
          {isOpen ? (
            <ChevronUp className="w-5 h-5 transition-transform duration-300  hover:cursor-pointer" />
          ) : (
            <ChevronDown className="w-5 h-5 transition-transform duration-300  hover:cursor-pointer" />
          )}
        </button>
  
        {/* Dropdown Menu */}
        <div
          className={`dropdown-menu ${isOpen ? "open" : ""} absolute left-0 top-full mt-2 w-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300`}
        >
          {items.map((item, index) => (
            
            <Link to={link} smooth key={index} className="block px-4 py-2 text-base text-white hover:bg-gray-700">
              {item}
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default DropdownMenu;