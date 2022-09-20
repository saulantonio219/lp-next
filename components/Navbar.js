import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full p-2 flex fixed top-0 justify-around  sm:justify-start gap-2 bg-transparent">
      <button className="p-2 font-light rounded-lg text-white hover:bg-yellow-600 hover:transition hover:ease-in hover:delay-100">
        🇪🇸 Español
      </button>
      <button className="p-2 font-light rounded-lg text-white hover:bg-yellow-600 hover:transition hover:ease-in hover:delay-100">
        🇺🇸 Ingles
      </button>
    </nav>
  );
};

export default Navbar;
