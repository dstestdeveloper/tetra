import React from "react";
import styled from "styled-components";

const Intro: React.FC = () => {
  return (
    <IntroWrapper>
      <Plus></Plus>
      <IntroImage
        src={"/images/plus.png"}
        alt="plus"
        width={184}
        height={182}
      />
      <Title>테트라 셀프코칭</Title>
      <Content>테트라 셀프코칭에서 지금 바로 자신을 찾아보아요!</Content>
      <Download>
        <IntroImage
          src="/images/googleplay_w.png"
          alt="googleplay"
          width={260}
          height={84}
        />
        <IntroImage
          src="/images/appstore_w.png"
          alt="appstore"
          width={260}
          height={84}
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
`;

const Content = styled.div`
  font-weight: 400;
  font-size: 36px;
  color: #ffffff;
  margin-top: 22px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: #ffffff;
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
  height: 1193px;
  background-color: #ffffff;
  background-image: url("/images/mainbanner.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default Intro;
