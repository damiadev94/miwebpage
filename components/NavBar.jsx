import React from "react";
import Box from "./Box";

function NavBar({ children }) {
  return (
    <div className="flex justify-between mb-8 py-8">{children}</div>
  );
}

export default NavBar;
