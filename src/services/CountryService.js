import axios from 'axios';

const CountryService = () => {
  let api = "http://api.aviationstack.com/v1";
     const getCountries = () => {
      const response = axios.get(
        `${api}/countries?access_key=8ffed6994f287cfb3a5c6345503724d0`
      );
      console.log("response: ", response.data);
      // return response.data;
    }
}

export default CountryService 