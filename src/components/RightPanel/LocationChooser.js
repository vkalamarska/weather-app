import SearchIcon from "../../assets/search_icon.png";
import styled from "styled-components";
import { useRef, useState, useEffect } from "react";

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
  cursor: pointer;
`;

const PLACES_API_KEY = "812dbcc47de44cf5b1749b5e665559d8";

const LocationChooser = ({ setCity }) => {
  const [apiData, setApiData] = useState([]);

  const handleChange = event => {
    const value = event.target.value;

    if (value.length < 3) {
      return;
    }

    fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&limit=10&type=city&apiKey=812dbcc47de44cf5b1749b5e665559d8`
    )
      .then(res => res.json())
      .then(result => {
        const cities = result.features.filter(item => {
          return item.properties.result_type === "city";
        });
        setApiData(cities);
        console.log(cities);
      });
  };

  const textInput = useRef(null);

  const handleClick = () => {
    textInput.current.focus();
  };

  return (
    <>
      <LocationContainer>
        <AnotherLocationInput
          placeholder="Another Location"
          ref={textInput}
          onChange={handleChange}
        ></AnotherLocationInput>
        <SearchButton onClick={handleClick}></SearchButton>
      </LocationContainer>
      <LastLocationsContainer>
        {apiData.map(city => (
          <City
            onClick={() => {
              setCity({ lat: city.properties.lat, lon: city.properties.lon });
            }}
          >
            {city.properties.city}, {city.properties.country}
          </City>
        ))}
      </LastLocationsContainer>
    </>
  );
};

export default LocationChooser;
