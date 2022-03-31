import "./App.css";
import styled from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import Results from "./pages/Results";
import { Profile } from "./pages/Profile";
import TestLogin from "./pages/TestLogin";
import { Navbar } from "./components/Nav/Navbar";

const apolloClient = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles>
        <Navbar />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/login" element={<Login />}></Route> */}
            <Route path="/login" element={<TestLogin />} />
            <Route path="/:tradesType" element={<Results />}></Route>
            <Route path="/profiles/:businessId" element={<Profile />}></Route>
          </Routes>
        </BrowserRouter>
      </GlobalStyles>
    </ApolloProvider>
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
