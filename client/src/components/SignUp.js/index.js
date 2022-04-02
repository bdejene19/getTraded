import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import AddBusiness from "./AddBusiness";
// import Auth from "../utils/auth";
// import { ADD_USER } from "../utils/mutations";

import { LoginFormWrapper } from "../LoginForm/index";
import ExitToApp from "@mui/icons-material/ExitToApp";
export default function SignUp() {
  const [businessAdded, setBusinessAdded] = useState(false);
  const [formState, setFormState] = useState({ email: "", password: "" });
  // const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // const mutationResponse = await addUser({
    //   variables: {
    //     email: formState.email,
    //     password: formState.password,
    //     firstName: formState.firstName,
    //     lastName: formState.lastName,
    //   },
    // });
    // const token = mutationResponse.data.addUser.token;
    // Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log("hello");
  }, [businessAdded]);
  return (
    <LoginFormWrapper id="signup-wrapper">
      <h3>Sign up to getTraded</h3>
      {/* <GoogleSignIn></GoogleSignIn> */}

      <div id="signup-container">
        <div className="flex-row space-between my-2">
          <input
            placeholder="Full Name"
            name="fullName"
            type="text"
            id="fullName"
          />
        </div>
        <div className="flex-row space-between my-2">
          <input placeholder="Email" name="email" type="email" id="email" />
        </div>

        <div className="  flex-row space-between my-2">
          <input
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
      </div>

      <div id="includeBusiness-wrapper">
        <label for="addBusiness">Would you like to add a business?</label>
        <input
          name="addBusiness"
          type="checkbox"
          id="addBusiness"
          onClick={(e) => setBusinessAdded(!businessAdded)}
        />
      </div>
      {businessAdded ? <AddBusiness></AddBusiness> : null}

      {/* {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null} */}
      <div className="flex-row flex-end">
        <button type="submit">
          <ExitToApp /> Sign Un
        </button>
      </div>
      <p>
        Already have an account?
        <Link to="/login" className="signUp-btn">
          Sign Ip
        </Link>
      </p>
    </LoginFormWrapper>
  );
}
