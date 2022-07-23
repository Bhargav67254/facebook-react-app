import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import PostSender from "./PostSender";
import { database } from "../firebase";
import Story from "./Story";
const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    database
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);
  return (
    <Container>
      <Story />
      <PostLists>
        <PostSender />
        {posts.length > 0 &&
          posts.map((post) => {
            return (
              <Post
                key={post.id}
                username={post.data.username}
                userPhoto={post.data.userPhoto}
                postText={post.data.postText}
                imageURL={post.data.postImage}
                videoURL={post.data.postVideo}
                timestamp={post.data.timestamp}
              />
            );
          })}
      </PostLists>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: -10px;
  margin-left: 10px;
  margin-right: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: 100px;
  &::-webkit-scrollbar {
    display: none;
  }
  & {
    --ms-overflow-style: none;
    scrollbar-width: none;
  }
  @media screen and (max-width: 950px) {
    width: 100%;
    margin-left: 0px;
  }
`;
const PostLists = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 750px) {
    width: 95%;
  }
`;
export default Feed;
