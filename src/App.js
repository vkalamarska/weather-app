import getWeatherAssets from "./getWeatherAssets";
import styled from "styled-components";
import WeatherSummary from "./components/WeatherSummary";
import RightPanel from "./components/RightPanel";
import { useEffect, useState } from "react";

const AppWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;

  &:before {
    content: "";
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-image: url(${(p) => p.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: 1;
    filter: blur(40px);
    transform: rotate(180deg) scale(1.1);
    background-position: 0px 0px;
  }
`;

const AppContainer = styled.section`
  width: 75%;
  height: 90%;
  margin: 35px auto;
  display: flex;
  background-image: url(${(p) => p.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2;
  border-radius: 1px;
  box-shadow: 0px 0px 35px 0px rgba(102, 102, 102, 0.36);

  &:before {
    content: "";
    position: absolute;
    inset: 0px;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 56%,
      rgba(91, 91, 91, 0.46) 100%
    );
  }
`;

const LeftPanel = styled.section`
  width: 65%;
  height: 100%;
`;

function App() {
  const [apiData, setApiData] = useState(null);

  const [city, setCity] = useState({ lat: 39.4697, lon: -0.3774 });

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=9d66f6522fa2befa44ba5c51e6e4c09b&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setApiData(result);
      });
  }, [city]);

  if (!apiData) {
    return <div>Loading</div>;
  }

  const weatherId = apiData.weather[0].id;

  const { backgroundImage, weatherIcon } = getWeatherAssets(weatherId);

  return (
    <AppWrapper image={backgroundImage}>
      <AppContainer image={backgroundImage}>
        <LeftPanel>
          <WeatherSummary
            weatherIcon={weatherIcon}
            weatherData={apiData}
            city={city}
          ></WeatherSummary>
        </LeftPanel>
        <RightPanel
          weatherData={apiData}
          setCity={setCity}
          city={city}
        ></RightPanel>
      </AppContainer>
    </AppWrapper>
  );
}

export default App;
