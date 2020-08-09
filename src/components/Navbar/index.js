import React from "react";
import "./Navbar.css";
import Login from "../../containers/Login";
import { connect } from "react-redux";

const Navbar = () => {
  return (
    <div className="navbar-wrap">
      <Login> Login</Login>
    </div>
  );
};

const mapStateToProps = (state) => {
  //console.log(state);
  return {};
};

export default connect(mapStateToProps)(Navbar);
