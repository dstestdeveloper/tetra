import React from "react";
import styled from "styled-components";

const Intro: React.FC = () => {
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
      <PlusImage src={"/images/plus.png"} alt="plus" width={184} height={182} />
      <Title>테트라 셀프코칭</Title>
      <WebContent>테트라 셀프코칭에서 지금 바로 자신을 찾아보아요!</WebContent>
      <MobileContent>
        테트라 셀프코칭에서
        <br />
        지금 바로 자신을 찾아보아요!
      </MobileContent>
      <Download>
        <IntroImage
          onClick={handleAndroidClick}
          src="/images/googleplay_w.png"
          alt="googleplay"
        />
        <IntroImage
          onClick={handleIosClick}
          src="/images/appstore_w.png"
          alt="appstore"
        />
      </Download>
    </IntroWrapper>
  );
};

const Plus = styled.div`
  margin-top: 338px;
`;

const Download = styled.div`
  display: inline-flex;
  gap: 37px;
  margin-top: 34px;

  img {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    gap: 8px;
    display: inline-flex;
    justify-content: center;
    margin-top: 27px;
  }
`;

const WebContent = styled.div`
  display: none;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  font-size: 36px;
  color: #ffffff;
  margin-top: 22px;
  line-height: 44px;

  @media (min-width: 768px) {
    display: block;
  }
`;

const MobileContent = styled.div`
  display: block;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 6px;
  text-align: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Title = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  font-size: 50px;
  color: #ffffff;
  margin-top: 38px;
  line-height: 61px;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 39px;
    margin-top: 24px;
  }
`;

const PlusImage = styled.img`
  object-fit: contain;

  @media (max-width: 768px) {
    width: 123px;
    height: 123px;
  }
`;

const IntroImage = styled.img`
  object-fit: contain;
  width: 260px;
  height: 84px;

  @media (max-width: 768px) {
    width: 160px;
    height: 56px;
  }
`;

const IntroWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1193px;
  background-color: #ffffff;
  background-image: url("/images/mainbanner.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    height: 790px;
  }
`;

export default Intro;
