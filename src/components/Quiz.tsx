import React from "react";
import styled from "styled-components";

const Quiz: React.FC = () => {
  return (
    <QuizWrapper>
      <QuizDescriptionContainer>
        <QuizDescription>
          <PurpleTitle>01</PurpleTitle>
          <Title>Quiz</Title>
          <Content>
            테트라 이론에 대하여
            <br />
            공부하고 퀴즈를 풀어요!
          </Content>
        </QuizDescription>
      </QuizDescriptionContainer>
      <PhoneImage
        src={"/images/quizPhone.png"}
        alt="quizPhone"
        width={489}
        height={869}
      />
      <SideImageContainer>
        <SideImage src={"/images/graduationCap.png"} alt="graduationCap" />
      </SideImageContainer>
      <GrayCircleContainer>
        <GrayCircle />
      </GrayCircleContainer>
    </QuizWrapper>
  );
};

const GrayCircleContainer = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  bottom: 0;
  right: 0;
`;

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
    /* display: none; */
    bottom: -45%;
    right: -57%;
  }
`;

const PurpleTitle = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #813ff2;
  line-height: 36px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 140px;
    line-height: 19px;
  }
`;

const Content = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  font-size: 30px;
  color: #1a1f27;
  margin-top: 6px;
  line-height: 54px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 26px;
    margin-top: 10px;
  }
`;

const Title = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  font-size: 50px;
  color: #1a1f27;
  margin-top: 8px;
  line-height: 61px;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 39px;
    margin-top: 10px;
  }
`;

const QuizDescription = styled.div`
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
    height: 500px;

    order: 2; // 순서를 2로 설정
    z-index: 1;
    position: relative;
    top: -50px;
  }
`;

const SideImage = styled.img`
  object-fit: contain;
  z-index: 1;
  width: 595px;
  height: 595px;

  @media (max-width: 768px) {
    width: 218px;
    height: 218px;
    position: relative;
    top: -50px;
    z-index: 1;
  }
`;

const QuizWrapper = styled.div`
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
    z-index: 2;
  }
`;

const SideImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const QuizDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export default Quiz;
