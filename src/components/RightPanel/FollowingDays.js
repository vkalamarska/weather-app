import styled from "styled-components";
import { WiDayCloudy } from "weather-icons-react";
import { useEffect, useState } from "react";

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

const MIDDAY_HOURS = [10, 11, 12, 13, 14];
const NIGHT_HOURS = [1, 2, 3, 4, 5];

const getDate = (forecast) => new Date(forecast.dt * 1000);

const FollowingDays = ({ city, weatherIcon: WeatherIcon }) => {
  const [forecastByDate, setForecastByDate] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&cnt=35&appid=36c2a3bab1696f112962a862cdb66ccd&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        /*
  {
    "20-07-2023": [forecast1, forecast2],
    "21-07-2023": [forecast3, forecast4],
  }


*/

        const filetredDates = result.list.reduce((allDates, forecast) => {
          const date = getDate(forecast).toDateString();

          if (!allDates[date]) {
            return { ...allDates, [date]: [forecast] };
          }

          allDates[date].push(forecast);

          return allDates;
        }, {});

        setForecastByDate(filetredDates);
      });
  }, [city.lat, city.lon]);

  return (
    <FollowingDaysContainer>
      <FollowingDaysItem>Following Days</FollowingDaysItem>
      {forecastByDate &&
        Object.keys(forecastByDate)
          .filter((date) => {
            const dateForecasts = forecastByDate[date];

            const forecastHours = dateForecasts.map((forecast) =>
              getDate(forecast).getHours()
            );

            const middayForecastExists = MIDDAY_HOURS.some((hour) =>
              forecastHours.includes(hour)
            );
            const nightForecastExists = NIGHT_HOURS.some((hour) =>
              forecastHours.includes(hour)
            );

            return middayForecastExists && nightForecastExists;
          })
          .map((date) => {
            const dateForecasts = forecastByDate[date];

            const weekday = getDate(dateForecasts[0]).toLocaleDateString(
              "en-US",
              {
                weekday: "short",
              }
            );

            const middayTempForecast = dateForecasts.find((forecast) =>
              MIDDAY_HOURS.includes(getDate(forecast).getHours())
            );
            const nightTempForecast = dateForecasts.find((forecast) =>
              NIGHT_HOURS.includes(getDate(forecast).getHours())
            );
            console.log(middayTempForecast, nightTempForecast);

            return (
              <DayContainer>
                <Day>{weekday}</Day>
                <DayValue>
                  <WeatherIcon size={22} />{" "}
                  {middayTempForecast?.main.temp_max.toFixed()}° /{" "}
                  {nightTempForecast?.main.temp_min.toFixed()}°
                </DayValue>
              </DayContainer>
            );
          })}
    </FollowingDaysContainer>
  );
};

export default FollowingDays;
