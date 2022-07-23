import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { auth, provider, database } from "../firebase";
import {
  selectUserName,
  setUserLoginDetails,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const username = useSelector(selectUserName);
  const dispatch = useDispatch();
  function GoogleLogin() {
    if (!username) {
      auth.signInWithPopup(provider).then((response) => {
        dispatch(
          setUserLoginDetails({
            name: response.user.displayName,
            email: response.user.email,
            photo: response.user.photoURL,
          })
        );
        database.collection("users").add({
          userName: response.user.displayName,
          userPhoto: response.user.photoURL,
        });
      });
    }
  }
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLoginDetails({
            email: user.email,
            name: user.displayName,
            photo: user.photoURL,
          })
        );
      }
    });
  }, [username]);

  return (
    <Container>
      <Wrapper>
        <img src="facebook.png" alt="" />
        <SignInButton onClick={GoogleLogin}>Sign In with Google</SignInButton>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 200px;
    margin-top: 20px;
  }
`;
const SignInButton = styled(Button)`
  border-radius: 50px !important;
  padding: 15px 50px !important;
  background-color: #1877f2 !important;
  color: white !important;
  letter-spacing: 1.5px !important;
  :hover {
    background-color: #0857bd !important;
  }
`;
export default LoginPage;
