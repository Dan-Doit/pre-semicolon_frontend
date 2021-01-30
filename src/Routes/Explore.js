import React, { useState } from 'react';
import Weather from "../Components/Weather";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import Loader from '../Components/Loader';


const GET_WEATHER = gql`
  query weather($latitude: Float! , $longitude:Float!) {
    weather(latitude: $latitude, longitude:$longitude){
        temp 
        weather
        }
    }
`;


export default withRouter(() => {
    const { data, loading } = useQuery(GET_WEATHER, {
        variables: {
            latitude: 37.4111,
            longitude: 126.7111
        }
    });
    
    return (loading ? <Loader />:< Weather loading={loading} temp = { data.weather.temp } weather = { data.weather.weather } />)
});
