import React from "react";
import styled from "styled-components";
import Feed from "./components/Feed";
import Frame from "./components/Frame";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";
import { selectUserName } from "./features/user/userSlice";
import LoginPage from "./components/LoginPage";

function App() {
  const user = useSelector(selectUserName);

  return (
    <Container>
      {!user ? (
        <LoginPage />
      ) : (
        <>
          <Header />
          <Wrapper>
            <Sidebar />
            <Feed />
            <Frame />
          </Wrapper>
        </>
      )}
    </Container>
  );
}
const Container = styled.div`
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  margin: 15px auto;
  padding: 0px 10px;
  overflow-x: hidden;
  max-width: 1400px;
`;

export default App;
