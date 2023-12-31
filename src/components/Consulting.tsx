import React from "react";
import styled from "styled-components";

const Consulting: React.FC = () => {
  return (
    <ConsultingWrapper>
      <GrayCircleContainer>
        <GrayCircle />
      </GrayCircleContainer>
      <SideImageContainer>
        <SideImage src={"/images/coffee.png"} alt="coffee" />
      </SideImageContainer>
      <PhoneImage src={"/images/consultingPhone.png"} alt="consultingPhone" />
      <ConsultingDescriptionContainer>
        <ConsultingDescription>
          <PurpleTitle>04</PurpleTitle>
          <Title>상담</Title>
          <Content>
            테트라 셀프코칭 전문가와 일정을 잡고
            <br />나 자신에 한층 더 가까워지기 위한
            <br />
            상담을 받아보아요!
          </Content>
        </ConsultingDescription>
      </ConsultingDescriptionContainer>
    </ConsultingWrapper>
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
  right: 50%;
  background-color: #ffffff;
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
    margin-top: 10px;
    line-height: 39px;
  }
`;

const ConsultingDescription = styled.div`
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
  width: 582px;
  height: 572px;

  @media (max-width: 768px) {
    width: 203px;
    height: 203px;
    position: relative;
    top: -40px;
    z-index: 1;
  }
`;

const ConsultingWrapper = styled.div`
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

const ConsultingDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export default Consulting;
