import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <GlobalStyles>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </GlobalStyles>
  );
}

const GlobalStyles = styled.div`
  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 48px;
  }

  h3 {
    font-size: 36px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 20px;
  }
`;
export default App;
