import React from "react";
import styled from "styled-components";

const Community: React.FC = () => {
  return (
    <CommunityWrapper>
      <CommunityImage
        src={"/images/heart.png"}
        alt="heart"
        width={553}
        height={553}
      />
      <CommunityImage
        src={"/images/quizPhone.png"}
        alt="quizPhone"
        width={489}
        height={869}
      />
      <CommunityDescription>
        <PurpleTitle>02</PurpleTitle>
        <Title>테트라 커뮤니티</Title>
        <Content>
          테트라 커뮤니티를
          <br />
          이용하여 소통까지 해보아요!
        </Content>
      </CommunityDescription>
    </CommunityWrapper>
  );
};

const PurpleTitle = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: #813ff2;
`;

const Content = styled.div`
  font-weight: 400;
  font-size: 36px;
  color: #1a1f27;
  margin-top: 6px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: #1a1f27;
  margin-top: 8px;
`;

const CommunityDescription = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 435px;
`;

const CommunityImage = styled.img`
  object-fit: contain;
  z-index: 1;
`;

const CommunityWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 967px;
  background-color: #f9f9f9;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export default Community;