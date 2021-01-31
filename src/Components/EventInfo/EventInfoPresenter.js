import React from "react";
import styled from "styled-components";
import Weather from "../Weather";
import Covid from "../Covid";

const EventContainer = styled.div`
  width : 150px;
  height : 35px;
  overflow: hidden;
`;

const Container = styled.div`
    width : 150px;
`;

export const EventCovid = ({ location, data }) => {
    return <EventContainer><Container> <Covid location={location} data={data} /> </Container></EventContainer>
};


export const EventWeather = ({ temp, weather }) => {
    return <EventContainer><Container> <Weather temp={temp} weather={weather} /> </Container></EventContainer>
};
