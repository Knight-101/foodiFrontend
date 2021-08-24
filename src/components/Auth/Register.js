import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { BASE_URL } from "../../variables";

function Register() {
  const history = useHistory();
  const [userData, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(BASE_URL + "/auth/register", userData)
      .then(() => {
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="auth-parent">
      <div className="authDiv">
        <main className="form-signin">
          <form style={{ lineHeight: "5rem" }}>
            <h1
              className="h3 mb-3 fw-normal"
              style={{
                textAlign: "center",
                fontSize: "2rem",
                color: "#363739",
              }}
            >
              <b>Sign Up</b>
            </h1>
            <label htmlFor="firstName" className="visually-hidden">
              firstName
            </label>
            <input
              onChange={handleChange}
              style={{ margin: "1.4rem 0 1rem 0", padding: "0.6rem" }}
              type="name"
              id="firstName"
              className="form-control"
              placeholder="First Name"
              required=""
            />
            <label htmlFor="lastName" className="visually-hidden">
              lastName
            </label>
            <input
              onChange={handleChange}
              style={{ margin: "1.4rem 0 1rem 0", padding: "0.6rem" }}
              type="name"
              id="lastName"
              className="form-control"
              placeholder="Last Name"
              required=""
            />
            <label htmlFor="inputEmail" className="visually-hidden">
              Email address
            </label>
            <input
              onChange={handleChange}
              style={{ margin: "1.4rem 0 1.8rem 0", padding: "0.6rem" }}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email Address"
              required=""
              autoFocus=""
            />
            <label htmlFor="inputPassword" className="visually-hidden">
              Password
            </label>
            <input
              onChange={handleChange}
              style={{ margin: "1.4rem 0 1rem 0", padding: "0.6rem" }}
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              required=""
            />
            <button
              onClick={submitHandler}
              className="w-100 btn btn-sm authBtn"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Register;
