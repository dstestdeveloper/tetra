import React from "react";
import styled from "styled-components";

const Outro: React.FC = () => {
  const handleAndroidClick = () => {
    window.location.href =
      "https://play.google.com/store/search?q=%ED%85%8C%ED%8A%B8%EB%9D%BC%EC%85%80%ED%94%84%EC%BD%94%EC%B9%AD&c=apps&hl=ko-KR";
  };
  const handleIosClick = () => {
    window.location.href =
      "https://apps.apple.com/kr/app/tetra-self-coaching-%ED%85%8C%ED%8A%B8%EB%9D%BC-%EC%85%80%ED%94%84%EC%BD%94%EC%B9%AD/id1669817203";
  };

  return (
    <IntroWrapper>
      <Plus />
      <IntroImage
        src={"/images/plus2.png"}
        alt="plus"
        width={488}
        height={306}
      />
      <Title>테트라 셀프코칭</Title>
      <Content>테트라 셀프코칭에서 지금 바로 자신을 찾아보아요!</Content>
      <Download>
        <IntroImage
          onClick={handleAndroidClick}
          src="/images/googleplay_b.png"
          alt="googleplay"
          width={260}
          height={84}
        />
        <IntroImage
          onClick={handleIosClick}
          src="/images/appstore_b.png"
          alt="appstore"
          width={260}
          height={84}
        />
      </Download>
    </IntroWrapper>
  );
};

const Plus = styled.div`
  margin-top: 179px;
`;

const Download = styled.div`
  display: inline-flex;
  gap: 37px;
  margin-top: 34px;

  img {
    cursor: pointer;
  }
`;

const Content = styled.div`
  font-weight: 400;
  font-size: 36px;
  color: #1a1f27;
  margin-top: 22px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: #1a1f27;
  margin-top: 38px;
`;

const IntroImage = styled.img`
  object-fit: contain;
`;

const IntroWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 967px;
  background-color: #ffffff;
`;

export default Outro;
