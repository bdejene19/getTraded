import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
// import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Nav from "./components/Nav";

function App() {
  return (
    <GlobalStyles>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
           <Route exact path="/login" component={Login} />
          {/*<Route exact path="/signup" component={Signup} /> */}
          {/* <Route component={NoMatch} /> */}

        </Routes>
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
