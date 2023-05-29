import axios from "axios";
const API_FAKE = "https://minibackend-oceanic-production.up.railway.app/";
const endpointTiposMaletas = "tiposMaletas";

export const getBaggages = async () => {
  try {
    const { data } = await axios.get(`${API_FAKE}${endpointTiposMaletas}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
