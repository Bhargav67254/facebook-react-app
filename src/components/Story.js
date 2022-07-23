import React from "react";
import styled from "styled-components";
import StoryCard from "./StoryCard";
const Story = () => {
  return (
    <Container>
      <Wrapper>
        <StoryCard
          background={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1_-pyAgKxpwGx0iq0H5RVAHaEK%26pid%3DApi&f=1"
          }
          userPhoto={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gwW7_O9J_PapmhspjJO1sgHaEK%26pid%3DApi&f=1"
          }
          userName={"john wick"}
        />

        <StoryCard
          background={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.CXaHsQw6Rs9ShApo_k92BgHaEK%26pid%3DApi&f=1"
          }
          userPhoto={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.2MicTxHjGpQP43D9N8r1lgHaDt%26pid%3DApi&f=1"
          }
          userName={"jason bourne"}
        />

        <StoryCard
          background={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gvQ3BYXklksVDeiCGwXZtwHaK9%26pid%3DApi&f=1"
          }
          userPhoto={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.DYzNIzYCZ5sWsc8d9V5lpAHaEe%26pid%3DApi&f=1"
          }
          userName={"james bond"}
        />
        <StoryCard
          background={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.MzuaoS1hx8yr5Um5jtSWNAHaEH%26pid%3DApi&f=1"
          }
          userPhoto={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3KgyOous-sPTRUbRlwVc_QHaEo%26pid%3DApi&f=1"
          }
          userName={"jack sparrow"}
        />
        <StoryCard
          background={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.k_4QYKSgkWD2hm_PfQjMvQHaEc%26pid%3DApi&f=1"
          }
          userPhoto={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Ac08EbUG-ASy6onPNR3uPwHaHa%26pid%3DApi&f=1"
          }
          userName={"avengers"}
        />
      </Wrapper>
    </Container>
  );
};

export default Story;
const Container = styled.div`
  margin: 10px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  & {
    --ms-overflow-style: none;
    scrollbar-width: none;
  }
  display: flex;
  align-items: center;
  padding: 10px 0px 10px 0px;
`;
