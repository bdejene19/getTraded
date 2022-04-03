import React from "react";
import styled from "styled-components";
import { Container } from "./Home";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Auth from "../utils/auth";
import { QUERY_ME } from "../utils/queries";
import { ProfileData } from "../components/ProfileData";

export default function UserProfile() {
  const { userId } = useParams();

  const { loading, error, data } = useQuery(QUERY_ME, {
    variables: { _id: userId },
  });
  console.log(data);
  return (
    <Container>
      {Auth.loggedIn() && Auth.getProfile().data.email ? (
        <ProfileData
          name="Bemnet"
          businessCategory="Painting"
          email="b@gmail"
        />
      ) : (
        window.location.replace("/login")
      )}
    </Container>
  );
}
