import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const Followers = ({ username, userPhoto }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  return (
    <Wrapper>
      <UserIcon src={userPhoto} alt={username} />
      <p>{username}</p>
      <FollowIcon
        isFollowing={isFollowing}
        onClick={() => setIsFollowing(true)}
      />
      <CheckIcon
        isFollowing={isFollowing}
        onClick={() => setIsFollowing(false)}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px;
  margin-top: 20px;

  p {
    margin: 0px 10px;
    letter-spacing: 1.5px;
    font-size: 14px;
  }
`;
const UserIcon = styled(Avatar)``;
const FollowIcon = styled(CircleOutlinedIcon)`
  cursor: pointer;
  color: #1877f2;
  display: ${(props) => (props.isFollowing ? "none" : "block")} !important;
`;
const CheckIcon = styled(CheckCircleOutlineOutlinedIcon)`
  cursor: pointer;
  color: #1877f2;
  display: ${(props) => (props.isFollowing ? "block" : "none")} !important;
`;
export default Followers;
