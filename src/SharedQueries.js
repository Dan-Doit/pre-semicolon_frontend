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

// 코로나
export const GET_COVID = gql`
    query covid19($location:String!){
        covid19(location:$location)
    }
`;
