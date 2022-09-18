import { type } from "@testing-library/user-event/dist/type";
import styled from "styled-components";
import { WiDayCloudy, WiHumidity } from "weather-icons-react";
import SearchIcon from "../assets/search_icon.png";

const RightContainer = styled.section`
  width: 35%;
  min-height: 100%;
  overflow: scroll;
  backdrop-filter: blur(20px) brightness(65%);
  z-index: 2;
`;

const LocationContainer = styled.div`
  margin: 0 0 15px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

const AnotherLocationInput = styled.input`
  font-family: "Gill Sans", sans-serif;
  font-size: 16px;
  margin: 37px 38px 0px 38px;
  padding: 0 74px 0 0;
  color: #d3d3d3;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #d3d3d3;

  ::placeholder {
    color: #d3d3d3;
  }
  :focus {
    outline: none;
    color: white;
    border-bottom: 1px solid white;
  }
`;

const SearchButton = styled.button`
  padding: 34px;
  background-color: #72a5d9;
  border: none;
  transition-duration: 0.4s;
  background-image: url(${SearchIcon});
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  :hover {
    background-color: #e6e9ec;
  }
`;

const LastLocationsContainer = styled.div`
  margin: 0 38px;
  padding: 10px 0;
  color: #d3d3d3;
`;

const City = styled.div`
  padding: 8px 0;
  color: #d3d3d3;
`;

const Line = styled.div`
  margin: 15px 38px;
  border-bottom: 1px solid #d3d3d3;
`;

const WeatherDetailsContainer = styled.div`
  margin: 0px 38px;
  padding: 10px 0;
`;

const WeatherDetailsItem = styled.div`
  margin: 0 0 10px 0;
  padding: 8px 0;
  color: white;
`;

const CloudyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #d3d3d3;
`;

const CloudyItem = styled.span`
  padding: 8px 0;
`;

const CloudyValue = styled.span`
  padding: 8px 0;
`;

const HumidityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #d3d3d3;
`;

const HumidityItem = styled.span`
  padding: 8px 0;
`;

const HumidityValue = styled.span`
  padding: 8px 0;
`;

const WindContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #d3d3d3;
`;

const WindItem = styled.span`
  padding: 8px 0;
`;

const WindValue = styled.span`
  padding: 8px 0;
`;

const PressureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #d3d3d3;
`;

const PressureItem = styled.span`
  padding: 8px 0;
`;

const PressureValue = styled.span`
  padding: 8px 0;
`;

const FollowingDaysContainer = styled.div`
  margin: 0px 38px 37px 38px;
  padding: 10px 0 0 0;
`;

const FollowingDaysItem = styled.div`
  margin: 0 0 10px 0;
  padding: 8px 0;
  color: white;
`;

const DayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #d3d3d3;
`;

const Day = styled.span`
  padding: 8px 0;
`;

const DayValue = styled.span`
  padding: 8px 0;
  width: 35%;
  display: flex;
  justify-content: space-between;
`;

const RightPanel = () => {
  return (
    <RightContainer>
      <LocationContainer>
        <AnotherLocationInput placeholder="Another Location"></AnotherLocationInput>
        <SearchButton></SearchButton>
      </LocationContainer>
      <LastLocationsContainer>
        <City>London</City>
        <City>Manchester</City>
      </LastLocationsContainer>
      <Line></Line>
      <WeatherDetailsContainer>
        <WeatherDetailsItem>Weather Details</WeatherDetailsItem>
        <CloudyContainer>
          <CloudyItem>Cloudy</CloudyItem>
          <CloudyValue>86%</CloudyValue>
        </CloudyContainer>
        <HumidityContainer>
          <HumidityItem>Humidity</HumidityItem>
          <HumidityValue>70%</HumidityValue>
        </HumidityContainer>
        <WindContainer>
          <WindItem>Wind</WindItem>
          <WindValue>8km/h</WindValue>
        </WindContainer>
        <PressureContainer>
          <PressureItem>Pressure</PressureItem>
          <PressureValue>1019hPa</PressureValue>
        </PressureContainer>
      </WeatherDetailsContainer>
      <Line></Line>
      <FollowingDaysContainer>
        <FollowingDaysItem>Following Days</FollowingDaysItem>
        <DayContainer>
          <Day>Monday</Day>
          <DayValue>
            <WiDayCloudy size={22} /> 17 / 10°C
          </DayValue>
        </DayContainer>
        <DayContainer>
          <Day>Tuesday</Day>
          <DayValue>
            <WiDayCloudy size={22} /> 19 / 11°C
          </DayValue>
        </DayContainer>
        <DayContainer>
          <Day>Wednesday</Day>
          <DayValue>
            <WiDayCloudy size={22} /> 16 / 9°C
          </DayValue>
        </DayContainer>
        <DayContainer>
          <Day>Thursday</Day>
          <DayValue>
            <WiDayCloudy size={22} /> 14 / 7°C
          </DayValue>
        </DayContainer>
      </FollowingDaysContainer>
    </RightContainer>
  );
};

export default RightPanel;
