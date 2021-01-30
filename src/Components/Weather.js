import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IoSunnyOutline, IoPartlySunnyOutline, IoRainyOutline } from "react-icons/io5";
import { BsCloud } from "react-icons/bs";
import { WiSandstorm } from "react-icons/wi";
import { RiThunderstormsLine, RiDrizzleLine, RiHazeLine } from "react-icons/ri";
import { IoIosSnow } from "react-icons/io"
import { BiWater } from "react-icons/bi"

const Text = styled.span`
  font-size:20px;
  font-weight: 600;
`;

const weatherOption = (weather, temp) => {
    if (weather === "Clear") return <><IoSunnyOutline size={30} /><Text>{temp}°</Text></>
    else if (weather === "Thunderstorm") return <><RiThunderstormsLine size={30} /><Text>{temp}°</Text></>
    else if (weather === "Drizzle") return <><RiDrizzleLine size={30} /><Text>{temp}°</Text></>
    else if (weather === "Rain") return <><IoRainyOutline size={30} /><Text>{temp}°</Text></>
    else if (weather === "Snow") return <><IoIosSnow size={30} /><Text>{temp}°</Text></>
    else if (weather === "Clouds") return <><BsCloud size={30} /><Text>{temp}°</Text></>
    else if (weather === "Mist") return <><BiWater size={30} /><Text>{temp}°</Text></>
    else if (weather === "Dust") return <><WiSandstorm size={30} /><Text>{temp}°</Text></>
    else if (weather === "Haze") return <><RiHazeLine size={30} /><Text>{temp}°</Text></>
    else return <><IoPartlySunnyOutline size={30} /><Text>{temp}°</Text></>
}

export const Weather = ({ temp, weather }) => {
    return weatherOption(weather,parseInt(temp))
};

Weather.propTypes = {
    temp: PropTypes.string.isRequired,
    weather : PropTypes.string.isRequired
};

export default Weather;