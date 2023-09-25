import React, { useState } from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  const [personalModal, setPersonalModal] = useState<boolean>(false);
  const [serviceModal, setServiceModal] = useState<boolean>(false);

  return (
    <FooterWrapper>
      <LeftContent>
        <ButtonWrapper>
          <PersonalInfo onClick={() => setPersonalModal(true)}>
            개인정보 처리약관
          </PersonalInfo>
          <Service onClick={() => setServiceModal(true)}>
            서비스 이용약관
          </Service>
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
      {personalModal && (
        <ModalBackground>
          <ModalWrapper>
            <ModalTitle>개인정보처리방침</ModalTitle>
            <CloseImage
              src="/images/exit.png"
              alt="Close"
              width={29}
              height={29}
              onClick={() => setPersonalModal(false)}
            />
            <ModalContent>
              개인정보처리방침 제1조(목적) 카네스블랙(이하 ‘회사'라고 함)는
              회사가 제공하고자 하는 서비스(이하 ‘회사 서비스’)를 이용하는
              개인(이하 ‘이용자’ 또는 ‘개인’)의 정보(이하 ‘개인정보’)를 보호하기
              위해, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한
              법률(이하 '정보통신망법') 등 관련 법령을 준수하고, 서비스 이용자의
              개인정보 보호 관련한 고충을 신속하고 원활하게 처리할 수 있도록
              하기 위하여 다음과 같이 개인정보처리방침(이하 ‘본 방침’)을
              수립합니다. 제2조(개인정보 처리의 원칙) 개인정보 관련 법령 및 본
              방침에 따라 회사는 이용자의 개인정보를 수집할 수 있으며 수집된
              개인정보는 개인의 동의가 있는 경우에 한해 제3자에게 제공될 수
              있습니다. 단, 법령의 규정 등에 의해 적법하게 강제되는 경우 회사는
              수집한 이용자의 개인정보를 사전에 개인의 동의 없이 제3자에게
              제공할 수도 있습니다. 제3조(본 방침의 공개) ① 회사는 이용자가
              언제든지 쉽게 본 방침을 확인할 수 있도록 회사 홈페이지 첫 화면
              또는 첫 화면과의 연결화면을 통해 본 방침을 공개하고 있습니다. ②
              회사는 제1항에 따라 본 방침을 공개하는 경우 글자 크기, 색상 등을
              활용하여 이용자가 본 방침을 쉽게 확인할 수 있도록 합니다. 제4조(본
              방침의 변경) ① 본 방침은 개인정보 관련 법령, 지침, 고시 또는
              정부나 회사 서비스의 정책이나 내용의 변경에 따라 개정될 수
              있습니다. ② 회사는 제1항에 따라 본 방침을 개정하는 경우 다음 각 호
              하나 이상의 방법으로 공지합니다. 1. 회사가 운영하는 인터넷
              홈페이지의 첫 화면의 공지사항란 또는 별도의 창을 통하여 공지하는
              방법 2. 서면·모사전송·전자우편 또는 이와 비슷한 방법으로
              이용자에게 공지하는 방법 ③ 회사는 제2항의 공지는 본 방침 개정의
              시행일로부터 최소 7일 이전에 공지합니다. 다만, 이용자 권리의
              중요한 변경이 있을 경우에는 최소 30일 전에 공지합니다. 제5조(회원
              가입을 위한 정보) 회사는 이용자의 회사 서비스에 대한 회원가입을
              위하여 다음과 같은 정보를 수집합니다. 1. 필수 수집 정보: 이메일
              주소, 비밀번호, 이름, 닉네임, 생년월일 및 휴대폰 번호 제6조(본인
              인증을 위한 정보) 회사는 이용자의 본인인증을 위하여 다음과 같은
              정보를 수집합니다. 1. 필수 수집 정보: 휴대폰 번호, 이메일 주소,
              이름, 본인확인값(CI,DI), 이동통신사 및 내/외국인 여부 제7조(결제
              서비스를 위한 정보) 회사는 이용자에게 회사의 결제 서비스 제공을
              위하여 다음과 같은 정보를 수집합니다.
            </ModalContent>
          </ModalWrapper>
        </ModalBackground>
      )}
      {serviceModal && (
        <ModalBackground>
          <ModalWrapper>
            <ModalTitle>서비스 이용약관</ModalTitle>
            <CloseImage
              src="/images/exit.png"
              alt="Close"
              width={29}
              height={29}
              onClick={() => setServiceModal(false)}
            />
            <ModalContent>
              서비스 이용약관 (상품, 서비스 등 이용 일반 회원용) 제1조(목적) 본
              약관은 카네스블랙가 운영하는 온라인 쇼핑몰 ''에서 제공하는
              서비스(이하 '서비스'라 합니다)를 이용함에 있어 당사자의 권리 의무
              및 책임사항을 규정하는 것을 목적으로 합니다. PC통신, 무선 등을
              이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 본 약관을
              준용합니다. 제2조(정의) '회사'라 함은, '카네스블랙'가 재화 또는
              용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를
              이용하여 재화등을 거래할 수 있도록 설정한 가상의 영업장을 운영하는
              사업자를 말하며, 아울러 ''을 통해 제공되는 전자상거래 관련
              서비스의 의미로도 사용합니다. '이용자'라 함은, '사이트'에 접속하여
              본 약관에 따라 '회사'가 제공하는 서비스를 받는 회원 및 비회원을
              말합니다. '회원'이라 함은, '회사'에 개인정보를 제공하고 회원으로
              등록한 자로서, '회사'의 서비스를 계속하여 이용할 수 있는 자를
              말합니다. '비회원'이라 함은, 회원으로 등록하지 않고, '회사'가
              제공하는 서비스를 이용하는 자를 말합니다. '상품'이라 함은
              '사이트'를 통하여 제공되는 재화 또는 용역을 말합니다. '구매자'라
              함은 '회사'가 제공하는 '상품'에 대한 구매서비스의 이용을 청약한
              '회원' 및 '비회원'을 말합니다. 제3조(약관 외 준칙) 본 약관에서
              정하지 아니한 사항은 법령 또는 회사가 정한 서비스의 개별 약관,
              운영정책 및 규칙(이하 '세부지침'이라 합니다)의 규정에 따릅니다.
              또한 본 약관과 세부지침이 충돌할 경우에는 세부지침이 우선합니다.
              제4조(약관의 명시 및 개정) '회사'는 이 약관의 내용과 상호 및
              대표자 성명, 영업소 소재지, 전화번호, 모사전송번호(FAX),
              전자우편주소, 사업자등록번호, 통신판매업신고번호 등을 이용자가
              쉽게 알 수 있도록 '회사' 홈페이지의 초기 서비스화면에 게시합니다.
              다만 본 약관의 내용은 '이용자'가 연결화면을 통하여 확인할 수
              있도록 할 수 있습니다. '회사'는 '이용자'가 약관에 동의하기에 앞서
              약관에 정해진 내용 중 청약철회, 배송책임, 환불조건 등과 같은
              내용을 '이용자'가 이해할 수 있도록 별도의 연결화면 또는 팝업화면
              등을 통하여 '이용자'의 확인을 구합니다. '회사'는 '전자상거래
              등에서의 소비자보호에 관한 법률', '약관의 규제에 관한
              법률','전자거래기본법', '정보통신망 이용촉진등에 관한 법률',
              '소비자보호법' 등 관련법령(이하 '관계법령'이라 합니다)에 위배되지
              않는 범위내에서 본 약관을 개정할 수 있습니다. '회사'가 본 약관을
              개정하고자 할 경우, 적용일자 및 개정사유를 명시하여 현행약관과
              함께 온라인 쇼핑몰의 초기화면에 그 적용일자 7일전부터 적용일자
              전날까지 공지합니다. 다만, '이용자'에게 불리한 내용으로 약관을
              변경하는 경우 최소 30일 이상 유예기간을 두고 공지합니다.
            </ModalContent>
          </ModalWrapper>
        </ModalBackground>
      )}
    </FooterWrapper>
  );
};

const ModalContent = styled.div`
  background-color: #f3f3f3;
  border-radius: 15px;
  padding: 40px 43px;
  width: calc(100% - 112px);
  height: calc(100% - 300px);
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #696a6f;
`;

const CloseImage = styled.img`
  position: absolute;
  top: 28px;
  right: 28px;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  font-weight: 700;
  font-size: 36px;
  color: #1a1f27;
  display: inline-flex;
  width: 100%;
  justify-content: center;
  margin-top: 63px;
  margin-bottom: 39px;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const ModalWrapper = styled.div`
  position: relative;
  width: 63%;
  height: calc(100% - 256px);
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  z-index: 3;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const TetraRights = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;

  @media (max-width: 768px) {
    margin-top: 15px;
    font-size: 12px;
  }
`;

const TetraTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 20px;
  }
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

  @media (max-width: 768px) {
    div {
      font-size: 12px;
    }
    p {
      font-size: 12px;
    }
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

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PersonalInfo = styled.div`
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
  }
`;

export default Footer;
