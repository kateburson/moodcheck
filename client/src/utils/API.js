import axios from "axios";
import { get } from "mongoose";

export default {
  register: function(userData) {
    return axios.post("/api/users/register", userData)
  },
  login: function(userData) {
    return axios.post("/api/users/login", userData)
  },
  validateToken: function(t) {
    return axios.post("/api/users/validate", { token: t })
  },
  newEntry: function(entry) {
    return axios.post("/api/journal/:id", entry)
  } 
};