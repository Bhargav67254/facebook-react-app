import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { auth } from "../firebase";
import {
  setUserLogOutState,
  selectUserName,
  selectUserPhoto,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  function SignOut() {
    auth.signOut().then(() => {
      dispatch(setUserLogOutState());
    });
  }

  return (
    <Container>
      <LeftHeader>
        <img src="facebook.png" alt="" onClick={() => setSideBar(!sideBar)} />
        <SearchBar>
          <SearchIcon />
          <input type="text" />
        </SearchBar>
      </LeftHeader>
      <RightHeader sideBar={sideBar}>
        <Wrap>
          <HomeIcon />
        </Wrap>
        <Wrap>
          <FlagIcon />
        </Wrap>
        <Wrap>
          <SubscriptionsIcon />
        </Wrap>
        <Wrap>
          <StorefrontIcon />
        </Wrap>
        <Wrap>
          <SupervisedUserCircleIcon />
        </Wrap>
        <Wrap>
          <AddIcon />
        </Wrap>
        <Wrap>
          <ForumIcon />
        </Wrap>
        <Wrap>
          <NotificationsActiveIcon />
        </Wrap>
        <Wrap onClick={SignOut}>
          <LogoutIcon />
        </Wrap>
        <Wrap>
          <ExpandMoreIcon />
        </Wrap>
      </RightHeader>
      <User>
        <UserIcon src={userPhoto} alt={username} />
        <p>{username}</p>
      </User>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

const LeftHeader = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    object-fit: contain;
  }
`;
const SearchBar = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  background-color: whitesmoke;
  margin-left: 10px;
  border-radius: 50px;
  color: gray;
  input {
    background: transparent;
    border: none;
    font-size: 15px;
    outline: none;
    margin: 0px 5px;
    letter-spacing: 1.3px;
    color: gray;
  }
  @media Screen and (max-width: 600px) {
    display: none;
  }
`;
const RightHeader = styled.div`
  padding: 5px 0px;
  display: flex;
  flex: 0.8;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    z-index: 1;
    position: fixed;
    height: 90vh;
    top: 10%;
    margin: 0px;
    transition: all 900ms ease-in-out;
    justify-content: flex-start;
    transform: ${(props) =>
      props.sideBar ? "translateX(8px) " : "translateX(-100px)"};
  }
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  color: #1877f2;
  margin: 0px 20px 0px 20px;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    margin: 12px 0px;
  }
  &::before {
    content: "";
    width: 45px;
    height: 2px;
    visibility: hidden;
    transform: scaleX(0);
    background-color: #1877f2;
    position: absolute;
    bottom: -4px;
    left: -11px;
    transition: all ease-in-out 400ms;
  }
  :hover {
    opacity: 1;
    color: #1877f2 !important;
    transition: all ease-in-out 400ms;

    &:before {
      visibility: visible;
      transform: scaleX(100%);
    }
  }
`;
const User = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 13px;
    text-align: center;
  }
`;
const UserIcon = styled(Avatar)`
  width: 40px !important;
  height: 40px !important;
`;
export default Header;
