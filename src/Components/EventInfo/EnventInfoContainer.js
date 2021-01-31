import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { EventCovid, EventWeather} from "./EventInfoPresenter";

const EnventInfoContainer = ({ location, data, temp, weather }) => {
    const [state, setState] = useState("weather");
    const changeData = () => {
        if (state === "weather") {
            setTimeout(() => {
                // translate 구현
                setState("covid")
            }, 30000);
        } else if (state === "covid") {
            setTimeout(() => {
                // translate 구현
                setState("weather")
            }, 30000);
        }
    }
    useEffect(() => {
        changeData();
    }, [state]);
 
    return state === "weather" ? <EventWeather temp={temp} weather={weather} /> : <EventCovid location={location} data={data} />;
};

EnventInfoContainer.propTypes = {
    location: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    temp:PropTypes.string.isRequired,
    weather:PropTypes.string.isRequired   
};

export default EnventInfoContainer;