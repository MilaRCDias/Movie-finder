import React from 'react';
import {Formik} from 'formik';
import { connect} from 'react-redux';
import PropTypes from "prop-types";
import {authUser} from '../../store/actions/authActions'
import './Login.css'
import Navbar from '../../components/Navbar'
import { Redirect } from 'react-router-dom';


const Login = ({ authUser, authError }) => {
  const handleLogin = (values) => {
    console.log("login", values);
    authUser(values);
   
  };

 if (authError === 'enter')return <Redirect to="/"/>

   return (
     <div className="login">
       <Navbar />

       <div className="login-wrap">
         <div className="form-login">
           <Formik
             initialValues={{ email: "", password: "" }}
             validate={(values) => {
               const errors = {};
               if (!values.email) {
                 errors.email = "Required";
               } else if (
                 !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
               ) {
                 errors.email = "Invalid email address";
               }
               return errors;
             }}
             onSubmit={handleLogin}
           >
             {({
               values,
               errors,
               touched,
               handleChange,
               handleBlur,
               handleSubmit,
               isSubmitting,
             }) => (
               <form onSubmit={handleSubmit} className="formik">
                 <h4 className="login-title">Welcome.</h4>
                 {authError ? <p className="error">{authError}</p> : null}
                 <input
                   type="email"
                   name="email"
                   placeholder="email@mail.com"
                   className="input-field"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.email}
                 />
                 {errors.email && touched.email && errors.email}
                 <input
                   placeholder="password"
                   type="password"
                   name="password"
                   className="input-field"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.password}
                 />
                 {errors.password && touched.password && errors.password}
                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className="input-btn"
                 >
                   login
                 </button>
               </form>
             )}
           </Formik>
         </div>
       </div>
     </div>
   );
};

Login.propTypes = {
  authUser: PropTypes.func.isRequired,
  authError: PropTypes.string
};
const mapStateToProps = (state)=>{
  return {
    authError : state.auth.authError
  }
}

 const mapDispatchToProps =(dispatch)=> {
  return {
    authUser: (user) => dispatch(authUser(user)),
  };
} 

 export default connect(mapStateToProps, mapDispatchToProps)(Login);
