import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import FlagIcon from "@mui/icons-material/Flag";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { selectUserName, selectUserPhoto } from "../features/user/userSlice";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  return (
    <Container>
      <User>
        <UserIcon src={userPhoto} alt={username} />
        <p>{username}</p>
      </User>
      <Wrap>
        <FlagIcon />
        <p>pages</p>
      </Wrap>
      <Wrap>
        <PeopleIcon />
        <p>friends</p>
      </Wrap>
      <Wrap>
        <MessageIcon />
        <p>messenger</p>
      </Wrap>
      <Wrap>
        <StorefrontIcon />
        <p>Marketplace</p>
      </Wrap>
      <Wrap>
        <VideoLibraryIcon />
        <p>vidoes</p>
      </Wrap>
      <Wrap>
        <ExpandMoreIcon />
        <p>more</p>
      </Wrap>
    </Container>
  );
};
const Container = styled.div`
  padding: 10px;
  background-color: white;
  width: 40%;
  border-radius: 10px;
  @media screen and (max-width: 950px) {
    display: none;
  }
`;
const User = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  p {
    font-size: 13px;
    letter-spacing: 1.5px;
    font-weight: 500;
    margin-left: 5px;
    color: rgba(0, 0, 0, 0.7);
  }
`;
const UserIcon = styled(Avatar)`
  width: 35px !important ;
  height: 35px !important ;
  cursor: pointer;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  margin-top: 10px;
  color: rgb(24, 119, 242);

  :hover {
    background-color: lightgray;
    color: #084fac;
    border-radius: 50px;
    cursor: pointer;
  }
  p {
    font-size: 15px;
    letter-spacing: 1.5px;
    font-weight: 500;
    text-transform: capitalize;
    margin-left: 5px;
    color: rgba(0, 0, 0, 0.7);
  }
`;

export default Sidebar;
