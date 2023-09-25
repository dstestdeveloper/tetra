import React from "react";
import styled from "styled-components";

const SelfCoaching: React.FC = () => {
  return (
    <SelfCoachingWrapper>
      <LeftContent>
        <PurpleTitle>START!</PurpleTitle>
        <Title>셀프코칭 시작하기</Title>
        <Content>
          나 자신이 정확히
          <br /> 누군지 파악해볼까요?
        </Content>
        <MileStoneImage
          src={"/images/milestone.png"}
          alt="milestone"
          width={541}
          height={464}
        />
      </LeftContent>
      <RightContent>
        <SelfCoachingImage src={"/images/selfCoachingPhone.png"} alt="phone" />
      </RightContent>
    </SelfCoachingWrapper>
  );
};

const PurpleTitle = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #813ff2;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 140px;
  }
`;

const Content = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  font-size: 36px;
  color: #1a1f27;
  margin-top: 27px;
  text-align: center;
  line-height: 54px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

const Title = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  font-size: 50px;
  color: #1a1f27;
  margin-top: 13px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const RightContent = styled.div``;

const LeftContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const MileStoneImage = styled.img`
  object-fit: contain;
  margin-top: 44px;
  width: 541px;
  height: 464px;
  @media (max-width: 768px) {
    width: 285px;
    height: 209px;
  }
`;

const SelfCoachingImage = styled.img`
  object-fit: contain;
  margin-top: 44px;
  width: 489px;
  height: 869px;
  @media (max-width: 768px) {
    width: 280px;
    height: 500px;
    margin-top: 0px;
  }
`;

const SelfCoachingWrapper = styled.div`
  width: 100%;
  height: 967px;
  display: inline-flex;
  justify-content: space-around;
  align-items: flex-end;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    height: 812px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default SelfCoaching;
