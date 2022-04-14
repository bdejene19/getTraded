import React, { useState, Suspense } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Container } from "./Home";
import WorkerCard from "../components/WorkerCard";
import { useQuery } from "@apollo/client";
import { QUERY_BUSINESS_BY_CATEGORY } from "../utils/queries";
import { Spinner } from "../components/LoadingSpinner";
export default function Results() {
  let { tradesType } = useParams();
  console.log(tradesType);

  const { loading, error, data } = useQuery(QUERY_BUSINESS_BY_CATEGORY, {
    variables: {
      category: tradesType,
    },
  });
  console.log("q: ", data?.businessesCategory);
  const gqlResults = data?.businessesCategory || [];
  console.log("da: ", data);
  console.log(error);
  const [results, setResults] = useState(data);

  return (
    <Suspense fallback={<Spinner />}>
      <Container>
        <h3 style={{ padding: "1em" }}>
          Searching for: <span style={{ fontWeight: 300 }}>{tradesType}</span>
        </h3>

        <ResultsCardsWrapper>
          {loading ? (
            <Spinner />
          ) : gqlResults.length === 0 ? (
            <h3>No results</h3>
          ) : (
            gqlResults?.map((business) => (
              <WorkerCard
                businessName={business.name}
                workCategory={business.category}
                businessId={business._id}
              ></WorkerCard>
            ))
          )}
        </ResultsCardsWrapper>
      </Container>
    </Suspense>
  );
}

const ResultsCardsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2em;
  column-gap: 2em;
  padding: 2.5em;
  justify-content: center;
  .workercard-wrapper {
    flex: 1 1 15em;
  }
`;
