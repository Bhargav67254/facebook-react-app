import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ShareIcon from "@mui/icons-material/Share";
import Player from "react-player";
const Post = ({
  userPhoto,
  username,
  timestamp,
  imageURL,
  videoURL,
  postText,
}) => {
  return (
    <Container>
      <UserInfo>
        <User>
          <UserIcon src={userPhoto} alt={username} />
          <p>{username}</p>
        </User>
        {timestamp && <p>{new Date(timestamp?.toDate()).toUTCString()}</p>}
      </UserInfo>
      <PostInfo>
        {postText && <p>{postText}</p>}
        {imageURL && <img src={imageURL} alt="" />}
        {videoURL && <ReactPlayer url={videoURL} loop={true}></ReactPlayer>}
      </PostInfo>
      <Buttons>
        <LikeButton />
        <CommentIcon />
        <ShareButton />
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  margin-top: 10px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin-right: 10px;
    letter-spacing: 1.5px;
    color: gray;
    font-size: 13px;
    text-align: center;
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
    letter-spacing: 1.5px;
    color: gray;
    font-size: 13px;
  }
`;
const UserIcon = styled(Avatar)``;
const PostInfo = styled.div`
  margin: 10px 0px;
  font-size: 14px;
  letter-spacing: 1.5px;
  img {
    width: 100%;
    margin: 10px 0px;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: gray;
  cursor: pointer !important;
`;
const LikeButton = styled(ThumbUpIcon)`
  cursor: pointer !important;
`;
const ShareButton = styled(ShareIcon)`
  cursor: pointer !important;
`;
const CommentIcon = styled(ModeCommentIcon)`
  cursor: pointer !important;
`;
const ReactPlayer = styled(Player)`
  width: 100% !important ;
`;
export default Post;
