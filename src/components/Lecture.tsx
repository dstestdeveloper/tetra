import React from "react";
import styled from "styled-components";

const Lecture: React.FC = () => {
  return (
    <LectureWrapper>
      <LectureDescription>
        <PurpleTitle>03</PurpleTitle>
        <Title>테트라 강의</Title>
        <Content>
          테트라에 대해
          <br />
          전문적으로 공부해 보아요!
        </Content>
      </LectureDescription>
      <LectureImage
        src={"/images/lecturePhone.png"}
        alt="lecturePhone"
        width={489}
        height={869}
      />
      <LectureImage
        src={"/images/blackboard.png"}
        alt="blackboard"
        width={541}
        height={541}
      />
    </LectureWrapper>
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

const LectureDescription = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 435px;
`;

const LectureImage = styled.img`
  object-fit: contain;
  z-index: 1;
`;

const LectureWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 967px;
  background-color: #ffffff;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export default Lecture;
