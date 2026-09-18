// src/services/api.ts
import axios from "axios";
const grupo = axios.create({
baseURL: "http://localhost:8080"
,

});
export default grupo;

