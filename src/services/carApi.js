import axios from "axios";
import { limitOfCards } from "../constants/limitOfCards";

const BASE_URL = "https://6464ce8e127ad0b8f8a8a452.mockapi.io";

const apiCars = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCars = async (page = 1) => {
  const res = await apiCars.get(`/advert?p=${page}&l=${limitOfCards}`);
  return res.data;
};

// export const getMovie = async (id) => {
//   return await axios.get(`/movie/${id}`, {
//     params: {
//       api_key: API_KEY,
//     },
//   });
// };

// export const getMaterials = async () => {
//   const res = await axios.get("/materials");
//   return res.data;
// };
