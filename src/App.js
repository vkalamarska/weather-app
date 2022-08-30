import image from "./assets/image.jpg";
import styled from "styled-components";

const AppWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  background-image: linear-gradient(to bottom right, #d1e6f7, #2887c1, #0061a8);
  background-size: cover;
  background-repeat: no-repeat;
`;

const AppContainer = styled.section`
  width: 70%;
  height: 85%;
  margin: 80px auto;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

function App() {
  return (
    <AppWrapper>
      <AppContainer></AppContainer>
    </AppWrapper>
  );
}

export default App;
