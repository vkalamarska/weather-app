import image from "./assets/image.jpg";
import styled from "styled-components";

const AppWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(${image});
    background-size: cover;
    position: absolute;
    z-index: 1;
    filter: blur(50px);
    transform: rotate(180deg);
    background-position: 25px 25px;
  }
`;

const AppContainer = styled.section`
  width: 80%;
  height: 85%;
  margin: 50px auto;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2;
  border-radius: 1px;
  box-shadow: 0px 0px 27px 0px rgba(66, 68, 90, 0.25);
`;

function App() {
  return (
    <AppWrapper>
      <AppContainer></AppContainer>
    </AppWrapper>
  );
}

export default App;
