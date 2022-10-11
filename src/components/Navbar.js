import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="app-bar navbar-light bg-primary">
        <div className="container">
          <Link to="/" className="">
            <h3>React Redux CRUD application</h3>
          </Link>
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/add" className="">
            Add new
          </Link>
        </div>
      </nav>
    </>
  );
}
