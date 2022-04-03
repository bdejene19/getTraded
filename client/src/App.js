import './App.css';
import styled from 'styled-components';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';


import Results from "./pages/Results";
import { Navbar } from "./components/Nav/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BusinessProfile } from "./pages/BusinessProfile";
import UserProfile from "./pages/UserProfile";

const apolloClient = new ApolloClient({
    uri: '/graphql',
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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/:tradesType" element={<Results />}></Route>
            <Route
              path="/businesses/:businessId"
              element={<BusinessProfile />}
            ></Route>

            <Route path="/profiles/:userId" element={<UserProfile />}></Route>
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
