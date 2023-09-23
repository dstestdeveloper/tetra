import Header from "./components/Header";
import Intro from "./components/Intro";
import Quiz from "./components/Quiz";
import SelfCoaching from "./components/SelfCoaching";

function App() {
  //질문
  //셀프코칭쪽 스마일 이미지 합쳐줄 수 있는지

  //TODO
  //모바일버전 남음
  //quiz부분 회색원 + 그 쪽 style문제

  return (
    <>
      <Header />
      <Intro />
      <SelfCoaching />
      <Quiz />
      <div style={{ height: "200px" }}></div>
    </>
  );
}

export default App;
