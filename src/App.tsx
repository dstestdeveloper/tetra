import Community from "./components/Community";
import Consulting from "./components/Consulting";
import Outro from "./components/Outro";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Lecture from "./components/Lecture";
import Quiz from "./components/Quiz";
import SelfCoaching from "./components/SelfCoaching";
import Footer from "./components/Footer";

function App() {
  // 질문 모달에 들어갈 글 전문 달라하기 + 줄 넘김 부분 <br />붙여달라하기

  // TODO
  // 모바일버전 남음
  // 모바일 퀴즈, 커뮤니티, 강의, 상담,배치 다시
  //  아우슽로, 푸터
  // pc애니메이션 추가
  // font적용
  // 모달 들어갈 문구 받아서 적용

  return (
    <>
      <Header />
      <Intro />
      <SelfCoaching />
      <Quiz />
      <Community />
      <Lecture />
      <Consulting />
      <Outro />
      <Footer />
    </>
  );
}

export default App;
