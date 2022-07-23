import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Followers from "./Followers";
import { database } from "../firebase";
import { useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";

const Frame = () => {
  const [followers, setFollowers] = useState([]);
  const username = useSelector(selectUserName);

  useEffect(() => {
    database.collection("users").onSnapshot((response) => {
      setFollowers(
        response.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  return (
    <Container>
      <h1>Users</h1>
      <Wrapper>
        {followers.length > 0 &&
          followers.map((user) => {
            return (
              <>
                {user.data.userName !== username && (
                  <Followers
                    key={user.id}
                    username={user.data.userName}
                    userPhoto={user.data.userPhoto}
                  />
                )}
              </>
            );
          })}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  background-color: white;
  border-radius: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  & {
    --ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media screen and (max-width: 950px) {
    display: none;
  }
  h1 {
    margin: 10px;
    font-size: 20px;
    color: gray;
  }
`;
const Wrapper = styled.div``;

export default Frame;
