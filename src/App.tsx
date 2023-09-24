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

  //TODO
  //모바일버전 남음
  //pc애니메이션 추가
  //font적용
  //outro 원 추가해야함

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
