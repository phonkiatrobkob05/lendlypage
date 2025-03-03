import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-200 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2"> 
        <img src="/lendlylogo.svg" alt="Lendly Logo" className="h-10" />
        <h1 className="text-3xl font-bold">Lendly</h1>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#000" />
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex md:gap-6 font-bold  text-xl">
          <li className="p-3"><a href="#">Home</a></li>
          <li className="p-3"><a href="#About">About</a></li>
          <li className="p-3"><a href="#Features">Our member</a></li>
          <li className="p-3"><a href="#Contact">Contact</a></li>
        </ul>
      </div>

      {/* Navigation Links (Mobile) */}
      <div
        className={`absolute font-bold left-0 top-16 w-full border rounded-xl bg-gray-200 text-black flex flex-col items-center 
          transition-transform duration-300 origin-top transform ${
            isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          } md:hidden`}
      >
        <ul className="space-y-4 py-4 w-full text-center  p-2   ">
          <li><a href="#" className="block p-3 hover:bg-blue-500">Home</a></li>
          <li><a href="#About" className="block p-3 hover:bg-blue-500">About</a></li>
          <li><a href="#Features" className="block p-3 hover:bg-blue-500">Our member</a></li>
          <li><a href="#Contact" className="block p-3 hover:bg-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
