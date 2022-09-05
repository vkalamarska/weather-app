import styled from "styled-components";

const RightContainer = styled.section`
  width: 40%;
  height: 100%;
  backdrop-filter: blur(15px) brightness(70%);
  z-index: 2;
`;

const RightPanel = () => {
  return <RightContainer></RightContainer>;
};

export default RightPanel;
