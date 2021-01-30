import { gql } from 'apollo-boost';


export const ME = gql`
    {
        me {
            user{
                username,
                email
            }
        }
    }
`;
// 날씨
export const GET_WEATHER = gql`
  query weather($latitude: Float! , $longitude:Float!) {
    weather(latitude: $latitude, longitude:$longitude){
        temp 
        weather
        }
    }
`;
