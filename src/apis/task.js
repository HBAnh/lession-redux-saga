import axiosService from "./axiosService";
import { API_ENDPOINT } from "../constants/index";

const url = "tasks";

export const getListTask = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};
