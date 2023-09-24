import React from "react";
import styled from "styled-components";

const Consulting: React.FC = () => {
  return (
    <ConsultingWrapper>
      <SideImageContainer>
        <SideImage
          src={"/images/coffee.png"}
          alt="coffee"
          width={582}
          height={572}
        />
      </SideImageContainer>
      <PhoneImage
        src={"/images/consultingPhone.png"}
        alt="consultingPhone"
        width={489}
        height={869}
      />
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

const ConsultingDescription = styled.div`
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

const ConsultingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 967px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const SideImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const ConsultingDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export default Consulting;
