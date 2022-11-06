import styled from "styled-components";

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

const WeatherDetails = ({ weatherData }) => {
  return (
    <WeatherDetailsContainer>
      <WeatherDetailsItem>Weather Details</WeatherDetailsItem>
      <CloudyContainer>
        <CloudyItem>Cloudiness</CloudyItem>
        <CloudyValue>{weatherData.clouds.all}%</CloudyValue>
      </CloudyContainer>
      <HumidityContainer>
        <HumidityItem>Humidity</HumidityItem>
        <HumidityValue>{weatherData.main.humidity}%</HumidityValue>
      </HumidityContainer>
      <WindContainer>
        <WindItem>Wind</WindItem>
        <WindValue>{weatherData.wind.speed.toFixed()} m/s</WindValue>
      </WindContainer>
      <PressureContainer>
        <PressureItem>Pressure</PressureItem>
        <PressureValue>{weatherData.main.pressure} hPa</PressureValue>
      </PressureContainer>
    </WeatherDetailsContainer>
  );
};

export default WeatherDetails;
