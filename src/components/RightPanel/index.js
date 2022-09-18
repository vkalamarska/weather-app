import styled from "styled-components";
import LocationChooser from "./LocationChooser";
import WeatherDetails from "./WeatherDetails";
import FollowingDays from "./FollowingDays";

const RightContainer = styled.section`
  width: 35%;
  min-height: 100%;
  backdrop-filter: blur(20px) brightness(65%);
  z-index: 2;
`;

const Line = styled.div`
  margin: 15px 38px;
  border-bottom: 1px solid #d3d3d3;
`;

const PanelContent = styled.div`
  overflow: scroll;
`;

const RightPanel = () => {
  return (
    <RightContainer>
      <LocationChooser />

      <Line />

      <PanelContent>
        <WeatherDetails />
        <Line />
        <FollowingDays />
      </PanelContent>
    </RightContainer>
  );
};

export default RightPanel;
