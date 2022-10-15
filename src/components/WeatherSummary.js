import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { WiDayCloudy } from "weather-icons-react";

const SummaryContainer = styled.section`
  display: flex;
  position: absolute;
  align-items: flex-end;
  margin: 0px 0px 80px 90px;
  top: 70%;
  color: white;
  text-shadow: 0px 0px 38px rgba(3, 3, 3, 1);
`;

const Temperature = styled.span`
  font-size: 95px;
`;

const CityContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const City = styled.span`
  font-size: 40px;
  padding: 15px 0 3px 15px;
`;

const Time = styled.span`
  font-size: 16px;
  padding: 0 0 15px 15px;
`;

const WeatherConditionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.span`
  padding: 15px 0 0 15px;
`;

const Condition = styled.span`
  font-size: 16px;
  padding: 0 0 15px 15px;
`;

const getLocalTime = utcOffset => {
  const utcTime = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
  );
  const localTime = new Date(utcTime.getTime() - utcOffset * 1000);

  return localTime;
};

const WeatherSummary = ({ weatherData }) => {
  const [localTime, setLocalTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setLocalTime(getLocalTime(weatherData.timezone));
    }, 60000);
  }, []);

  return (
    <SummaryContainer>
      <Temperature>{weatherData.main.temp.toFixed()}°</Temperature>
      <CityContainer>
        <City>{weatherData.name}</City>
        <Time>
          {localTime.toLocaleString("en-US", {
            hour: "2-digit",
            hour12: false,
            minute: "2-digit",
          })}
          {", "}
          {localTime.toLocaleString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </Time>
      </CityContainer>
      <WeatherConditionContainer>
        <Icon>
          <WiDayCloudy size={45} color="white" />
        </Icon>
        <Condition>{weatherData.weather[0].main}</Condition>
      </WeatherConditionContainer>
    </SummaryContainer>
  );
};

export default WeatherSummary;
