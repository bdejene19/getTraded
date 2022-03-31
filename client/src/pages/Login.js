import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import styled from "styled-components";
import { Container } from "./Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container style={{ rowGap: 0, padding: 0 }}>
      <LoginContainer>
        <LoginForm onSubmit={handleFormSubmit}>
          <h3>Sign In to getTraded</h3>
          <div>google signin</div>
          <div id="login-divider">
            <hr></hr>
            <p>or sign in with email</p>
          </div>
          <div className="flex-row space-between my-2">
            <input
              placeholder="Email"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
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
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
          <div className="flex-row flex-end">
            <button type="submit">
              <ExitToAppIcon /> Sign In
            </button>
          </div>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="signUp-btn">
              Sign-up
            </Link>
          </p>
        </LoginForm>

        <div className="login-art">
          <img
            src="https://cdn2.iconfinder.com/data/icons/handyman-repairman-technician/286/worker-action-12-512.png"
            alt="login clip art"
          ></img>
        </div>
      </LoginContainer>
    </Container>
  );
}

const LoginContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  margin: 5em 0;
  border: solid black 1.5px;
  box-shadow: 0 3px 3px 3px slategrey;
  width: 80vw;
  height: 65vh;
  overflow: hidden;
  border-radius: 10px;
  h3 {
    flex: 1 1 100%;
    height: fit-content;
    padding: 0.25em;
  }
  form,
  .login-art {
    /* padding: 1em; */
  }
  .login-art {
    flex: 1 1 60%;
    display: flex;
    background-color: #1976d2;
    justify-content: center;
    align-items: center;
  }

  .signUp-btn {
    text-decoration: none;
    color: #1976d2;
  }
`;

const LoginForm = styled.form`
  height: 90%;
  flex: 1 1 30%;
  text-align: center;
  div {
    display: flex;
    flex-direction: column;
    padding: 1em;
    row-gap: 1em;

    input,
    button {
      padding: 0.5em;
      justify-self: center;
      width: 70%;
      align-self: center;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1976d2;
      color: white;
      border: solid slategrey 1.5px;
      border-radius: 5px;
      font-weight: 700;
      cursor: pointer;
    }
    input {
      border: solid 3px slategrey;
      border-radius: 5px;
    }
    input::placeholder {
      font-weight: 700;
    }
  }
  #login-divider {
    color: silver;
    p {
      margin-top: -1.75em;
      color: slategrey;
    }
  }
`;
export default Login;
