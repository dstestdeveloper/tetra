import React from "react";
import styled from "styled-components";

const Quiz: React.FC = () => {
  return (
    <QuizWrapper>
      <QuizDescription>
        <PurpleTitle>01</PurpleTitle>
        <Title>Quiz</Title>
        <Content>
          테트라 이론에 대하여
          <br />
          공부하고 퀴즈를 풀어요!
        </Content>
      </QuizDescription>
      <QuizImage
        src={"/images/quizPhone.png"}
        alt="quizPhone"
        width={489}
        height={869}
      />
      <QuizImage
        src={"/images/graduationCap.png"}
        alt="graduationCap"
        width={595}
        height={595}
      />
      <GrayCircle />
    </QuizWrapper>
  );
};

const GrayCircle = styled.div`
  position: absolute;
  bottom: -298.75px;
  right: 114px;
  background-color: #f9f9f9;
  border-radius: 50%;
  width: 845px;
  height: 845px;
  z-index: 0;
`;

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

const QuizDescription = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 435px;
`;

const QuizImage = styled.img`
  object-fit: contain;
  z-index: 1;
`;

const QuizWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 967px;
  background-color: #ffffff;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export default Quiz;
