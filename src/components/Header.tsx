import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  const handleAndroidClick = () => {
    window.location.href =
      "https://play.google.com/store/search?q=%ED%85%8C%ED%8A%B8%EB%9D%BC%EC%85%80%ED%94%84%EC%BD%94%EC%B9%AD&c=apps&hl=ko-KR";
  };
  const handleIosClick = () => {
    window.location.href =
      "https://apps.apple.com/kr/app/tetra-self-coaching-%ED%85%8C%ED%8A%B8%EB%9D%BC-%EC%85%80%ED%94%84%EC%BD%94%EC%B9%AD/id1669817203";
  };
  return (
    <HeaderWrapper>
      <LeftContent>
        <span>테트라</span>
        셀프코칭
      </LeftContent>
      <RightContent>
        <AndroidContent onClick={handleAndroidClick}>
          <OsImage src={"/images/android.png"} alt="android" />
          <WebContent>Android 앱 다운로드</WebContent>
        </AndroidContent>
        <IosContent onClick={handleIosClick}>
          <OsImage src={"/images/ios.png"} alt="ios" />
          <WebContent>iOS 앱 다운로드</WebContent>
        </IosContent>
      </RightContent>
    </HeaderWrapper>
  );
};

const AndroidContent = styled.div`
  background-color: #1a1f27;
  border-radius: 50px;
  padding: 9px 19px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 9.5px 9.5px 9.5px 11.5px;
  }
`;
const IosContent = styled.div`
  background-color: #1a1f27;
  border-radius: 50px;
  padding: 9px 19px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 8.5px 10.5px 10.5px 10.5px;
  }
`;

const WebContent = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const OsImage = styled.img`
  object-fit: contain;
  width: 19px;
  height: 21px;
`;

const RightContent = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  display: inline-flex;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 6px;
    margin-right: 13px;
  }
`;

const LeftContent = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  font-size: 36px;
  color: #000000;

  span {
    font-family: Pretendard, sans-serif;
    font-weight: 700;
    font-size: 36px;
    color: #813ff2;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: 16px;

    span {
      font-size: 20px;
    }
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 113px;
  background-color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 6;

  @media (max-width: 768px) {
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 6;
  }
`;

export default Header;
