import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Nav/Navbar";
import { Container } from "./Home";
import WorkerCard from "../components/WorkerCard";

export default function Results() {
  let { tradesType } = useParams();

  return (
    <Container style={{ border: "solid green 3px" }}>
      <Navbar></Navbar>
      <h3 style={{ padding: "1em" }}>
        Searching for: <span style={{ fontWeight: 300 }}>{tradesType}</span>
      </h3>

      <ResultsCardsWrapper>
        <WorkerCard
          fullName="Bemnet Dejene"
          workCategory="Electrician"
        ></WorkerCard>
        <WorkerCard
          fullName="Bemnet Dejene"
          workCategory="Electrician"
        ></WorkerCard>
        <WorkerCard
          fullName="Bemnet Dejene"
          workCategory="Electrician"
        ></WorkerCard>
        <WorkerCard
          fullName="Bemnet Dejene"
          workCategory="Electrician"
        ></WorkerCard>
      </ResultsCardsWrapper>
    </Container>
  );
}

const ResultsCardsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2em;
  column-gap: 10em;
  padding: 2.5em;
  justify-content: center;
`;
