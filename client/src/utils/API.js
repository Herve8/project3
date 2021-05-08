import axios from "axios";

export default {
  // Gets all suspects
  getSuspects: function () {
    return axios.get("/api/suspects");
  },
  // Gets the suspect with the given id
  getSuspect: function (id) {
    return axios.get("/api/suspects/" + id);
  },
  // Deletes the suspect with the given id
  deleteSuspect: function (id) {
    return axios.delete("/api/suspects/" + id);
  },
  // Saves a suspect to the database
  saveSuspect: function (suspectData) {
    return axios.post("/api/suspects", suspectData);
  },
};
