import React from "react";
import styled from "styled-components";
import { Hero } from "../components/HomeHero/index";
// import Nav from "../components/Nav";
import { Navbar } from "../components/Nav/Navbar";

export const Home = () => {
  return (
    <Container>
      <Hero></Hero>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
