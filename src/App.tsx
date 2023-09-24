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
  //TODO
  //모바일버전 남음
  //pc애니메이션 추가
  //font적용
  //quiz부분 회색원
  //커뮤니티부분 회색원
  //강의부분 회색원
  //상담부분 회색원
  //outro 원 추가해야함
  // 모달 2개

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
