import "./App.css";
import styled from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";

// import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Nav from "./components/Nav";

// import Login from "./pages/Login";
import Results from "./pages/Results";
import { Profile } from "./pages/Profile";
import TestLogin from "./pages/TestLogin";


function App() {
  return (
    <GlobalStyles>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>

          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/login" element={<Login />}></Route> */}
          <Route path="/login" element={<TestLogin />} />
          <Route path="/:tradesType" element={<Results />}></Route>
          <Route path="/profiles" element={<Profile />}></Route>

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
