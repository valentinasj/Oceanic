import axios from "axios";
const API_FAKE = "https://minibackend-oceanic-production.up.railway.app/";
const endpointFechasSalidas = "fechasSalidas";

export const getDepartureDates = async () => {
  try {
    const { data } = await axios.get(`${API_FAKE}${endpointFechasSalidas}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
