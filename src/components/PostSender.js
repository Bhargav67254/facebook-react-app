import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MoodIcon from "@mui/icons-material/Mood";
import SendIcon from "@mui/icons-material/Send";
import { selectUserName, selectUserPhoto } from "../features/user/userSlice";
import { useSelector } from "react-redux";
import { database } from "../firebase";
import firebase from "firebase";

const PostSender = () => {
  const [text, setText] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [vidoeURL, setVideoURL] = useState("");
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  function sendPost(e) {
    e.preventDefault();
    if (text === "" && imageURL === "" && vidoeURL === "") {
      alert("Please Write Your Post First or Enter Image/Video URL");
    } else {
      database.collection("posts").add({
        postText: text,
        username: username,
        userPhoto: userPhoto,
        postImage: imageURL,
        postVideo: vidoeURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setText("");
    setImageURL("");
    setVideoURL("");
  }

  return (
    <Container>
      <User>
        <UserIcon src={userPhoto} alt={username} />
        <p>{username}</p>
      </User>
      <Form>
        <input
          type="text"
          value={text}
          placeholder="What's In Your Mind"
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="text"
          value={imageURL}
          placeholder="Enter Image URL"
          onChange={(e) => setImageURL(e.target.value)}
        />
        <input
          type="text"
          value={vidoeURL}
          placeholder="Enter Video URL"
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button type="submit" onClick={sendPost}>
          Send Post
        </button>
        <PostSendIcon onClick={sendPost} />
      </Form>
      <hr />
      <BottomBar>
        <Wrap>
          <Videoicon />
          <p>Live Video</p>
        </Wrap>
        <Wrap>
          <Photoicon />
          <p>Photo/Video</p>
        </Wrap>
        <Wrap>
          <Moodicon />
          <p>Feeling/Activity</p>
        </Wrap>
      </BottomBar>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 10px 5px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  p {
    color: gray;
    font-weight: 500;
    letter-spacing: 1.2px;
    margin-left: 10px;
  }
`;

const UserIcon = styled(Avatar)``;

const Form = styled.form`
  display: flex;
  margin: 5px 0px;
  align-items: center;
  width: 100%;
  input {
    padding: 8px;
    width: inherit;
    margin: 5px 5px;
    border-radius: 50px;
    border: none;
    outline: none;
    background-color: lightgray;
    color: black;
    font-weight: 400;
    letter-spacing: 1.5px;
  }
  button {
    display: none;
  }
  @media screen and (max-width: 550px) {
    flex-direction: column;
    width: 100%;
  }
`;
const BottomBar = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 850px) {
    margin: 10px 0px;
  }
  p {
    margin-left: 5px;
    color: gray;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1.5px;
  }
`;
const Videoicon = styled(VideocamIcon)`
  color: red;
  font-size: medium !important;
`;
const Photoicon = styled(PhotoLibraryIcon)`
  color: green;
  font-size: medium !important;
`;

const Moodicon = styled(MoodIcon)`
  color: darkorange;
  font-size: medium !important;
`;
const PostSendIcon = styled(SendIcon)`
  color: #1877f2;
  cursor: pointer;
`;

export default PostSender;
