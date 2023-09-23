import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <LeftContent>
        <span>테트라</span>
        셀프코칭
      </LeftContent>
      <RightContent>
        <div>
          <OsImage src={"/images/android_w.png"} alt="android" />
          Android 앱 다운로드
        </div>
        <div>
          <OsImage src={"/images/ios_w.png"} alt="ios" />
          iOS 앱 다운로드
        </div>
      </RightContent>
    </HeaderWrapper>
  );
};

const OsImage = styled.img`
  object-fit: contain;
  width: 19px;
  height: 21px;
`;

const RightContent = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  display: inline-flex;
  gap: 10px;

  div {
    background-color: #1a1f27;
    border-radius: 50px;
    padding: 9px 19px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
`;

const LeftContent = styled.div`
  font-weight: 400;
  font-size: 36px;
  color: #000000;

  span {
    font-weight: 700;
    font-size: 36px;
    color: #813ff2;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 113px;
  background-color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
`;

export default Header;
