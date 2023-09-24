import React from "react";
import styled from "styled-components";

const SelfCoaching: React.FC = () => {
  return (
    <SelfCoachingWrapper>
      <LeftContent>
        <PurpleTitle>start!</PurpleTitle>
        <Title>셀프코칭 시작하기</Title>
        <Content>
          나 자신이 정확히
          <br /> 누군지 파악해볼까요?
        </Content>
        <SelfCoachingImage
          src={"/images/milestone.png"}
          alt="milestone"
          width={541}
          height={464}
        />
      </LeftContent>
      <RightContent>
        <SelfCoachingImage
          src={"/images/selfCoachingPhone.png"}
          alt="phone"
          width={489}
          height={869}
        />
      </RightContent>
    </SelfCoachingWrapper>
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
  margin-top: 27px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: #1a1f27;
  margin-top: 13px;
`;

const RightContent = styled.div``;

const LeftContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const SelfCoachingImage = styled.img`
  object-fit: contain;
  margin-top: 44px;
`;

const SelfCoachingWrapper = styled.div`
  width: 100%;
  height: 967px;
  display: inline-flex;
  justify-content: space-around;
  align-items: flex-end;
  background-color: #f9f9f9;
`;

export default SelfCoaching;
