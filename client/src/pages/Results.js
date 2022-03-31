import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Container } from "./Home";
import WorkerCard from "../components/WorkerCard";
import { useQuery } from "@apollo/client";
// import { QUERY_USER_BY_CATEGORY } from "../utils/queries";
export default function Results() {
  let { tradesType } = useParams();

  // const { loading, data } = useQuery(QUERY_USER_BY_CATEGORY, {
  //   variables: { tradesType },
  // });
  // const [results, setResults] = useState(data);

  return (
    <Container style={{ border: "solid green 3px" }}>
      <h3 style={{ padding: "1em" }}>
        Searching for: <span style={{ fontWeight: 300 }}>{tradesType}</span>
      </h3>

      <ResultsCardsWrapper>
        {/* {loading ? (
          <h1>...loading</h1>
        ) : (
          data.map((profile) => (
            <WorkerCard
              fullName={profile.fullName}
              workCategory={profile.catgeory}
            ></WorkerCard>
          ))
        )} */}
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