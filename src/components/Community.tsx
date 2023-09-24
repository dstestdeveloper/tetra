import React from "react";
import styled from "styled-components";

const Community: React.FC = () => {
  return (
    <CommunityWrapper>
      <GrayCircle />
      <SideImageContainer>
        <SideImage src={"/images/heart.png"} alt="heart" />
      </SideImageContainer>
      <PhoneImage src={"/images/quizPhone.png"} alt="quizPhone" />
      <CommunityDescriptionContainer>
        <CommunityDescription>
          <PurpleTitle>02</PurpleTitle>
          <Title>테트라 커뮤니티</Title>
          <Content>
            테트라 커뮤니티를
            <br />
            이용하여 소통까지 해보아요!
          </Content>
        </CommunityDescription>
      </CommunityDescriptionContainer>
    </CommunityWrapper>
  );
};

const GrayCircle = styled.div`
  position: absolute;
  bottom: -30%;
  right: 50%;
  background-color: #ffffff;
  border-radius: 50%;
  width: 845px;
  height: 845px;
  z-index: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const PurpleTitle = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: #813ff2;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 140px;
  }
`;

const Content = styled.div`
  font-weight: 400;
  font-size: 36px;
  color: #1a1f27;
  margin-top: 6px;
  line-height: 54px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: #1a1f27;
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const CommunityDescription = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 435px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin-bottom: 0px;
  }
`;

const PhoneImage = styled.img`
  object-fit: contain;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  width: 489px;
  height: 869px;

  @media (max-width: 768px) {
    width: 280px;
    height: 373px;
  }
`;

const SideImage = styled.img`
  object-fit: contain;
  z-index: 1;
  width: 553px;
  height: 553px;

  @media (max-width: 768px) {
    width: 203;
    height: 203px;
  }
`;

const CommunityWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 967px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 768px) {
    height: 812px;
    display: inline-flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const SideImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const CommunityDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export default Community;
