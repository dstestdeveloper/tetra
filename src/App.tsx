import Header from "./components/Header";
import Intro from "./components/Intro";
import SelfCoaching from "./components/SelfCoaching";

function App() {
  //질문1. 셀프코칭쪽 스마일 이미지 합쳐줄 수 있는지
  //질문2. 셀프코칭쪽 배경색이 #ddd인거같은데 제가 한 것은 좀 더 탁하다.
  return (
    <>
      <Header />
      <Intro />
      <SelfCoaching />
      <div style={{ height: "200px" }}></div>
    </>
  );
}

export default App;
