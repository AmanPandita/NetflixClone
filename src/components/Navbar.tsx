import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Netflix Ka Logo
      </Link>
      <Link to="/login" className="btn btn-primary">
        Login / Sign-up
      </Link>
    </nav>
  );
};

export default Navbar;
