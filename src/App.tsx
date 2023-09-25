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
  // TODO
  // 모바일 퀴즈, 커뮤니티, 강의, 상담, 배치 다시
  // pc애니메이션 추가
  // font적용
  // 헤더 따라 내려오도록

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
