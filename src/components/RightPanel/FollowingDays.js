import styled from "styled-components";
import { WiDayCloudy } from "weather-icons-react";

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

const FollowingDays = () => {
  return (
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
  );
};

export default FollowingDays;
