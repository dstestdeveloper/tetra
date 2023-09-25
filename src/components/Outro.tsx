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
    <OutroWrapper>
      <Plus />
      <PlusImage
        src={"/images/plus2.png"}
        alt="plus"
        width={488}
        height={306}
      />
      <Title>테트라 셀프코칭</Title>
      <WebContent>테트라 셀프코칭에서 지금 바로 자신을 찾아보아요!</WebContent>
      <MobileContent>
        테트라 셀프코칭에서
        <br />
        지금 바로 자신을 찾아보아요!
      </MobileContent>
      <Download>
        <OutroImage
          onClick={handleAndroidClick}
          src="/images/googleplay_b.png"
          alt="googleplay"
          width={260}
          height={84}
        />
        <OutroImage
          onClick={handleIosClick}
          src="/images/appstore_b.png"
          alt="appstore"
          width={260}
          height={84}
        />
      </Download>
    </OutroWrapper>
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

  @media (max-width: 768px) {
    gap: 8px;
    display: inline-flex;
    justify-content: center;
  }
`;

const WebContent = styled.div`
  display: none;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  font-size: 36px;
  color: #ffffff;
  margin-top: 22px;

  @media (min-width: 768px) {
    display: block;
  }
`;

const MobileContent = styled.div`
  display: block;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  margin-top: 22px;
  text-align: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Title = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  font-size: 50px;
  color: #1a1f27;
  margin-top: 38px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const PlusImage = styled.img`
  object-fit: contain;

  @media (max-width: 768px) {
    width: 243px;
    height: 152px;
  }
`;

const OutroImage = styled.img`
  object-fit: contain;

  @media (max-width: 768px) {
    width: 160px;
    height: 56px;
  }
`;

const OutroWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 967px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    height: 745px;
  }
`;

export default Outro;
