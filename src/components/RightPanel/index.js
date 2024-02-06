import styled from "styled-components";
import LocationChooser from "./LocationChooser";
import WeatherDetails from "./WeatherDetails";
import FollowingDays from "./FollowingDays";

const RightContainer = styled.section`
  width: 35%;
  max-height: 100%;
  backdrop-filter: blur(20px) brightness(65%);
  z-index: 2;
`;

const PanelContent = styled.div`
  height: 100%;
  overflow: auto;
`;

const RightPanel = ({ weatherData, setCity, city }) => {
  return (
    <RightContainer>
      <LocationChooser setCity={setCity} />

      <PanelContent>
        <WeatherDetails weatherData={weatherData} />

        <FollowingDays city={city} />
      </PanelContent>
    </RightContainer>
  );
};

export default RightPanel;
