import axios from "axios";
import { limitOfCards } from "../constants/limitOfCards";

const BASE_URL = "https://6464ce8e127ad0b8f8a8a452.mockapi.io";

const apiCars = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllCars = async () => {
  const { data } = await apiCars.get("/advert");
  return data;
};

export const getCars = async (page = 1) => {
  const { data } = await apiCars.get(`/advert?p=${page}&l=${limitOfCards}`);
  return data;
};

export const getCarById = async (id) => {
  const { data } = await apiCars.get(`/advert/${id}`);
  return data;
};
