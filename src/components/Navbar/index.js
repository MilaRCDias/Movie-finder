import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import "./Navbar.css";
import { signOut } from "../../store/actions/authActions";

const Navbar = ({ authId, signOut }) => {
  //TODO register

  return (
    <div className="navbar-wrap">
      {authId ? (
        <a onClick={signOut} className="signout">
          <h5>Log Out</h5>
        </a>
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
  return {
    authId: state.firebase.auth.uid,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
