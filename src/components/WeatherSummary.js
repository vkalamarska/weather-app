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

const WeatherSummary = () => {
  return (
    <SummaryContainer>
      <Temperature>16°</Temperature>
      <CityContainer>
        <City>London</City>
        <Time>10:36 - Monday, 9 Sep '19</Time>
      </CityContainer>
      <WeatherConditionContainer>
        <Icon>
          <WiDayCloudy size={45} color="white" />
        </Icon>
        <Condition>Cloudy</Condition>
      </WeatherConditionContainer>
    </SummaryContainer>
  );
};

export default WeatherSummary;
