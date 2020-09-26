import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   if (password !== password2) {
  //     setAlert("Passwords do not match!", "danger");
  //   } else {
  //     register({ name, email, password });
  //   }
  // };
  return (
    <Fragment>
      <section className="container sign-up-form">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fa fa-user" aria-hidden="true"></i>
          <span> Create your account</span>
        </p>
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="email-address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm password"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
            />
          </div>
          <input type="submit" value="Register" className="btn btn-light" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign in!</Link>
        </p>
      </section>
    </Fragment>
  );
};
export default Register;
