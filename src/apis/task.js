import axiosService from "./axiosService";
import { API_ENDPOINT } from "../actions/constants/index";
import qs from "query-string";

const url = "tasks"; // http://localhost.../tasks

export const getListTaskAPI = (params = {}) => {
  let queryyParams = "";
  if (Object.keys(params).length > 0) {
    queryyParams = `?${qs.stringify(params)}`;
  }
  // http://localhost:3000/tasks?q=....  Method: GET
  return axiosService.get(`${API_ENDPOINT}/${url}${queryyParams}`);
};

export const addTaskAPI = (data) => {
  // http://localhost:3000/tasks  Method: POST
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateTaskAPI = (data, taskID) => {
  //http://localhost:3000/tasks/:id METHOD PUT
  return axiosService.put(`${API_ENDPOINT}/${url}/${taskID}`, data);
};


export const deleteTaskAPI = taskID => {
  //http://localhost:3000/tasks/:id METHOD DELETE
  return axiosService.delete(`${API_ENDPOINT}/${url}/${taskID}`);
};