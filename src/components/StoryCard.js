import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";

const StoryCard = ({ background, userPhoto, userName }) => {
  return (
    <Container style={{ backgroundImage: `url(${background})` }}>
      <User>
        <UserIcon src={userPhoto} alt={userName} />
        <p>{userName}</p>
      </User>
    </Container>
  );
};

export default StoryCard;

const Container = styled.div`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  min-width: 100px;
  min-height: 150px;
  border-radius: 5px;
  padding: 5px;
  margin: 0px 10px;
  background-color: black;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: all 500ms;
  }
`;
const UserIcon = styled(Avatar)`
  border: 2px solid #1877f2;
`;
const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  z-index: 10;
  p {
    color: white;
    position: absolute;
    bottom: 10px;
    font-weight: bold;
    font-size: 13px;
    letter-spacing: 1.5px;
  }
`;
