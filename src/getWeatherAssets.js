import sun from "./assets/sun.jpg";
import thunder from "./assets/thunder.jpg";
import rain from "./assets/rain.jpg";
import snow from "./assets/snow.jpg";
import fog from "./assets/fog.jpg";
import fewclouds from "./assets/fewclouds.jpg";
import clouds from "./assets/clouds.jpg";
import { WiDaySunny } from "weather-icons-react";
import { WiThunderstorm } from "weather-icons-react";
import { WiRain } from "weather-icons-react";
import { WiSnow } from "weather-icons-react";
import { WiFog } from "weather-icons-react";
import { WiDayCloudy } from "weather-icons-react";
import { WiCloud } from "weather-icons-react";

const weatherImages = {
  thunderstorm: thunder,
  drizzle: rain,
  rain: rain,
  snow: snow,
  atmosphere: fog,
  clear: sun,
  clouds1: fewclouds,
  clouds2: clouds,
};

const weatherIcons = {
  thunderstorm: WiThunderstorm,
  drizzle: WiRain,
  rain: WiRain,
  snow: WiSnow,
  atmosphere: WiFog,
  clear: WiDaySunny,
  clouds1: WiDayCloudy,
  clouds2: WiCloud,
};

const getWeatherType = (weatherId) => {
  const weatherGroupId = String(weatherId).charAt(0);

  switch (weatherGroupId) {
    case "2":
      return "thunderstorm";

    case "3":
      return "drizzle";

    case "5":
      return "rain";

    case "6":
      return "snow";

    case "7":
      return "atmosphere";

    case "8":
      if (weatherId === 800) {
        return "clear";
      }
      if (weatherId === 801 || weatherId === 802) {
        return "clouds1";
      }
      if (weatherId === 803 || weatherId === 804) {
        return "clouds2";
      }
  }
};

const getWeatherAssets = (weatherId) => {
  const weatherType = getWeatherType(weatherId);

  const backgroundImage = weatherImages[weatherType];

  const weatherIcon = weatherIcons[weatherType];

  return { backgroundImage, weatherIcon };
};

export default getWeatherAssets;
