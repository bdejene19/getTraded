import React, { useState } from "react";
import styled from "styled-components";

import SignUpForm from "../components/SignUp.js";

export function Signup(props) {
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

  return (
    <SignupPageWrapper>
      <SignUpForm></SignUpForm>
    </SignupPageWrapper>
  );
}

export default Signup;
const SignupPageWrapper = styled.main`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 95vh; */
  padding: 3.5em;
  background: ;
  #signup-wrapper {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    justify-content: center;
    border: solid white 3px;
    box-shadow: 0 3px 2px 3px #1976d2;
    padding: 1em 0;
    background-color: white;
    div {
      padding: 0.5em 0;
    }
  }

  #includeBusiness-wrapper {
    align-self: center;
    width: 60%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    label,
    input {
      flex: 1 1 4em;
    }
    label {
      width: max-content;
    }
  }
`;
