import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <LeftContent>
        <ButtonWrapper>
          <PersonalInfo>개인정보 처리약관</PersonalInfo>
          <Service>서비스 이용약관</Service>
        </ButtonWrapper>
        <PhoneWrapper>
          <PhoneContent>
            <div>사업자등록번호</div>
            <p>123-12-123456</p>
          </PhoneContent>
          <PhoneContent>
            <div>통신판매업신고</div>
            <p>123-강남-123456</p>
          </PhoneContent>
          <PhoneContent>
            <div>문의전화</div>
            <p>070-0000-0000</p>
          </PhoneContent>
        </PhoneWrapper>
      </LeftContent>
      <RightContent>
        <TetraTitle>테트라 셀프코칭</TetraTitle>
        <TetraRights>ⓒ 테트라.All Rights Reserved.</TetraRights>
      </RightContent>
    </FooterWrapper>
  );
};

const TetraRights = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
`;

const TetraTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
`;

const PhoneContent = styled.div`
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  div {
    font-weight: 400;
    font-size: 14px;
  }
  p {
    font-weight: 700;
    font-size: 14px;
  }
`;

const PhoneWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const Service = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
`;

const PersonalInfo = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #f2e8f9;
`;

const ButtonWrapper = styled.div`
  display: inline-flex;
  gap: 21px;
`;

const LeftContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const RightContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: 319px;
  background-color: #1a1f27;
  display: inline-flex;
  justify-content: space-around;
`;

export default Footer;
