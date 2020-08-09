import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import "./Navbar.css";

const Navbar = ({ authId }) => {

//TODO register and signout


  return (
    <div className="navbar-wrap">
      {authId ? (
        <Link to="/login">
          <h5>SignOut</h5>
        </Link>
      ) : (
        <>
          <Link to="/login">
            <h5>Login</h5>
          </Link>
          <h5>Register</h5>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    authId: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(Navbar);
