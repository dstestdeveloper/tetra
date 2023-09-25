import React from "react";
import styled from "styled-components";

const Lecture: React.FC = () => {
  return (
    <LectureWrapper>
      <LectureDescriptionContainer>
        <LectureDescription>
          <PurpleTitle>03</PurpleTitle>
          <Title>테트라 강의</Title>
          <Content>
            테트라에 대해
            <br />
            전문적으로 공부해 보아요!
          </Content>
        </LectureDescription>
      </LectureDescriptionContainer>
      <PhoneImage src={"/images/lecturePhone.png"} alt="lecturePhone" />
      <SideImageContainer>
        <SideImage src={"/images/blackboard.png"} alt="blackboard" />
      </SideImageContainer>
      <GrayCircle />
    </LectureWrapper>
  );
};

const GrayCircle = styled.div`
  position: absolute;
  bottom: -30%;
  right: 10%;
  background-color: #f9f9f9;
  border-radius: 50%;
  width: 845px;
  height: 845px;
  z-index: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

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
  margin-top: 6px;
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
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const LectureDescription = styled.div`
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
  width: 541px;
  height: 541px;

  @media (max-width: 768px) {
    width: 189px;
    height: 189px;
  }
`;

const LectureWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 967px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 768px) {
    height: 812px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SideImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const LectureDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export default Lecture;
