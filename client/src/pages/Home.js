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

  & #previousWork-section {
    .dots-container {
      display: flex;
      column-gap: 1em;
      align-self: center;

      font-size: 2rem;
      li {
        cursor: pointer;
      }
      .inactive {
        list-style: circle;
      }

      .active: {
        list-style: inherit;
      }
    }
  }
`;
