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
      <PhoneImage
        src={"/images/lecturePhone.png"}
        alt="lecturePhone"
        width={489}
        height={869}
      />
      <SideImageContainer>
        <SideImage
          src={"/images/blackboard.png"}
          alt="blackboard"
          width={541}
          height={541}
        />
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
  line-height: 54px;
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

const PhoneImage = styled.img`
  object-fit: contain;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
`;

const SideImage = styled.img`
  object-fit: contain;
  z-index: 1;
`;

const LectureWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 967px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
