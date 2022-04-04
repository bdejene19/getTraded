import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "./Home";
import { useQuery } from "@apollo/client";
import { useParams, Navigate } from "react-router-dom";
import Auth from "../utils/auth";
import { QUERY_ME, QUERY_USER_BY_ID } from "../utils/queries";
import { ProfileData } from "../components/ProfileData";

export default function UserProfile() {
  const { userId } = useParams();
  const { loading, error, data } = useQuery(QUERY_USER_BY_ID, {
    variables: {
      userId: userId,
    },
  });
  const userInfo = data?.userById || [];
  console.log(userInfo);
  return (
    <Container>
      {Auth.loggedIn() && Auth.getProfile().data.email ? (
        loading ? (
          <h2>....loading</h2>
        ) : (
          <ProfileData
            name={userInfo.fullName}
            email={userInfo.email}
            businessLength={userInfo.business.length}
            // businessCategory={userInfo.business[0]}
            // businessLink={userInfo.business[0]._id}
            businessLink={userInfo.business[0]._id}
          />
        )
      ) : (
        window.location.replace("/login")
      )}
    </Container>
  );
}
