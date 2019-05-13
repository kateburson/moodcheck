import axios from "axios";

export default {
  register: function(userData) {
    return axios.post("/api/users/register", userData);
  }
};