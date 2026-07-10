import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const CreateNewResume = (data) => axiosClient.post("/user-schemas", data);

const GetUserResumes = (userEmail) =>
  axiosClient.get("/user-schemas?filters[userEmail][$eq]=" + userEmail);

const UpdateResumeDetail = (id, data) =>
  axiosClient.put("/user-schemas/" + id, data);

const GetResumeById = (id) =>
  axiosClient.get("/user-schemas/" + id + "?populate=*");

const DeleteResumeById = (id) => axiosClient.delete("/user-schemas/" + id);

export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetail,
  GetResumeById,
  DeleteResumeById,
};
