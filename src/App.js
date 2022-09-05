import image from "./assets/image.jpg";
import styled from "styled-components";
import WeatherSummary from "./components/WeatherSummary";
import RightPanel from "./components/RightPanel";

const AppWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;

  &:before {
    content: "";
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: 1;
    filter: blur(40px);
    transform: rotate(180deg) scale(1.1);
    background-position: 0px 0px;
  }
`;

const AppContainer = styled.section`
  width: 75%;
  height: 90%;
  margin: 35px auto;
  display: flex;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2;
  border-radius: 1px;
  box-shadow: 0px 0px 35px 0px rgba(102, 102, 102, 0.36);

  &:before {
    content: "";
    position: absolute;
    inset: 0px;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 56%,
      rgba(91, 91, 91, 0.46) 100%
    );
  }
`;

const LeftPanel = styled.section`
  width: 60%;
  height: 100%;
`;

function App() {
  return (
    <AppWrapper>
      <AppContainer>
        <LeftPanel>
          <WeatherSummary></WeatherSummary>
        </LeftPanel>
        <RightPanel></RightPanel>
      </AppContainer>
    </AppWrapper>
  );
}

export default App;
