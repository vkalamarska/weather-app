import styled from "styled-components";
import { useEffect, useState } from "react";
import getWeatherAssets from "../../getWeatherAssets";

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

const FollowingDays = ({ city }) => {
  const [forecastByDate, setForecastByDate] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?q=${city.lat},${city.lon}&days=5&key=894ee9b32bbe4b23852191852230511`
    )
      .then((res) => res.json())
      .then((result) => {
        setForecastByDate(result);
      });
  }, [city.lat, city.lon]);
  console.log(forecastByDate);

  return (
    <FollowingDaysContainer>
      <FollowingDaysItem>Following Days</FollowingDaysItem>
      {forecastByDate?.forecast.forecastday.map((f) => {
        const date = new Date(f.date).toLocaleString("en-US", {
          weekday: "short",
        });

        return (
          <DayContainer>
            <Day>{date}</Day>
            <DayValue>
              <div> H {f.day.maxtemp_c.toFixed()}°</div>/
              <div> L {f.day.mintemp_c.toFixed()}°</div>
            </DayValue>
          </DayContainer>
        );
      })}
    </FollowingDaysContainer>
  );
};

export default FollowingDays;
