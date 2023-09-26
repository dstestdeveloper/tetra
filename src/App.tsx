import Community from "./components/Community";
import Consulting from "./components/Consulting";
import Outro from "./components/Outro";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Lecture from "./components/Lecture";
import Quiz from "./components/Quiz";
import SelfCoaching from "./components/SelfCoaching";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Modal from "./components/Modal";

//1. 모바일 인트로 화면 가운데
//2. 모바일 / pc + 이미지 꽉차게
//4. pc 모달 아래여백
//6. 푸터 조정
//7. 모바일 / pc 푸터 아래여백

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [sectionPositions, setSectionPositions] = useState<number[]>([]);
  const [personalModal, setPersonalModal] = useState<boolean>(false);
  const [serviceModal, setServiceModal] = useState<boolean>(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".section");
    const positions = Array.from(sections).map((s) => s.offsetTop);
    setSectionPositions(positions);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollYMid = window.scrollY + window.innerHeight / 2;
      for (let i = 0; i < sectionPositions.length; i++) {
        if (
          scrollYMid >= sectionPositions[i] &&
          (i === sectionPositions.length - 1 ||
            scrollYMid < sectionPositions[i + 1])
        ) {
          setActiveSection(i);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionPositions]);

  return (
    <>
      <Header />
      <Intro />
      <SelfCoaching />

      <DesktopOnly>
        <EmptySection className="section">
          <InnerContent
            className={`fixed-content ${
              activeSection === 0 ? "fade-in" : "fade-out"
            }`}
          ></InnerContent>
        </EmptySection>
        <Section className="section">
          <InnerContent
            className={`fixed-content ${
              activeSection === 1 ? "fade-in" : "fade-out"
            }`}
          >
            {activeSection === 1 ? <Quiz /> : null}
          </InnerContent>
        </Section>
        <Section className="section">
          <InnerContent
            className={`fixed-content ${
              activeSection === 2 ? "fade-in" : "fade-out"
            }`}
          >
            {activeSection === 2 ? <Community /> : null}
          </InnerContent>
        </Section>
        <Section className="section">
          <InnerContent
            className={`fixed-content ${
              activeSection === 3 ? "fade-in" : "fade-out"
            }`}
          >
            {activeSection === 3 ? <Lecture /> : null}
          </InnerContent>
        </Section>
        <Section className="section">
          <InnerContent
            className={`fixed-content ${
              activeSection === 4 ? "fade-in" : "fade-out"
            }`}
          >
            {activeSection === 4 ? <Consulting /> : null}
          </InnerContent>
        </Section>
        <EmptySection className="section"></EmptySection>
      </DesktopOnly>

      <MobileOnly>
        <Quiz />
        <Community />
        <Lecture />
        <Consulting />
      </MobileOnly>

      <Outro />
      <Footer
        setPersonalModal={setPersonalModal}
        setServiceModal={setServiceModal}
      />
      <Modal
        personalModal={personalModal}
        setPersonalModal={setPersonalModal}
        serviceModal={serviceModal}
        setServiceModal={setServiceModal}
      />
    </>
  );
}

const EmptySection = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Section = styled.div`
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const InnerContent = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const DesktopOnly = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileOnly = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

export default App;
