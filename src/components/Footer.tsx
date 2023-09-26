import React from "react";
import styled from "styled-components";

type FooterProps = {
  setPersonalModal: React.Dispatch<React.SetStateAction<boolean>>;
  setServiceModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Footer: React.FC<FooterProps> = (props) => {
  const { setPersonalModal, setServiceModal } = props;

  return (
    <FooterWrapper>
      <LeftContent>
        <ButtonWrapper>
          <PersonalInfo
            onClick={() => {
              setPersonalModal(true);
              document.body.style.overflow = "hidden";
            }}
          >
            개인정보 처리약관
          </PersonalInfo>
          <Service
            onClick={() => {
              setServiceModal(true);
              document.body.style.overflow = "hidden";
            }}
          >
            서비스 이용약관
          </Service>
        </ButtonWrapper>
        <PhoneW>
          <PhoneWrapper>
            <PhoneContent w={400}>사업자등록번호</PhoneContent>
            <PhoneContent w={400}>통신판매업신고</PhoneContent>
            <PhoneContent w={400}>문의전화</PhoneContent>
          </PhoneWrapper>
          <PhoneWrapper>
            <PhoneContent w={700}>123-12-123456</PhoneContent>
            <PhoneContent w={700}>123-강남-123456</PhoneContent>
            <PhoneContent w={700}>070-0000-0000</PhoneContent>
          </PhoneWrapper>
        </PhoneW>
      </LeftContent>
      <RightContent>
        <TetraTitle>테트라 셀프코칭</TetraTitle>
        <TetraRights>ⓒ 테트라.All Rights Reserved.</TetraRights>
      </RightContent>
    </FooterWrapper>
  );
};

const TetraRights = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;

  @media (max-width: 768px) {
    margin-bottom: 42px;
    font-size: 12px;
    line-height: 40px;
  }
`;

const TetraTitle = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  line-height: 29px;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    margin-top: 38px;
  }
`;

const PhoneContent = styled.div<{ w?: number }>`
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: start;

  font-family: Pretendard, sans-serif;

  font-weight: ${(p) => p.w};
  font-size: 14px;
  line-height: 40px;

  @media (max-width: 768px) {
    gap: 50px;
    font-size: 12px;
    line-height: 30px;
  }
`;

const PhoneW = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 30px;
`;

const PhoneWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const Service = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PersonalInfo = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #f2e8f9;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ButtonWrapper = styled.div`
  display: inline-flex;
  gap: 21px;

  @media (max-width: 768px) {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    margin-bottom: 27px;
  }
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
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: 319px;
  background-color: #1a1f27;
  display: inline-flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    height: 390px;
  }
`;

export default Footer;
