import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
const Landing = () => {
  return (
    <Fragment>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">
              Developer <span>connector social newtork</span>
            </h1>
            <p className="lead">
              Create developer profile/portfolios,share posts and get help from
              other developers
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>

              <Link to="/login" className="btn btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Landing;
