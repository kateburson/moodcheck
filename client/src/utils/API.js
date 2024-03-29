import axios from "axios";

export default {
  register: function(userData) {
    return axios.post("/api/users/register", userData)
  },
  login: function(userData) {
    return axios.post("/api/login", userData)
  },
  validateToken: function(t) {
    return axios.post("/api/users/validate", { token: t })
  },
  newEntry: function(entry, id) {
    return axios.post("/api/journal/" + id, entry)
  },
  populateJournal: function(id) {
    return axios.get("/api/journal/" + id)
  },
  removeJournal: function(id) {
    return axios.delete("/api/journal/" + id)
  },
  journalByDate: function(date) {
    return axios.get("/api/journal/" + date)
  },
  editJournal: function(updatedJournal, id) {
    return axios.put("/api/journal/" + id, updatedJournal)
  },
  newMood: function(moodSurvey, id) {
    return axios.post("/api/mood/" + id, moodSurvey)
  },
  findMoods: function(id) {
    return axios.get("/api/mood/" + id)
  },
  editMood: function(moodSurvey, id) {
    return axios.put("/api/mood/" + id, moodSurvey)
  },
  removeMood: function(id) {
    return axios.delete("/api/mood/" + id)
  }
};