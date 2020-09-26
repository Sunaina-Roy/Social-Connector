import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevCon
        </Link>
      </h1>
      {/* {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )} */}
    </nav>
  );
};
export default Navbar;
