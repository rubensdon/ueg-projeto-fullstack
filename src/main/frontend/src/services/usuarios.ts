// src/services/api.ts
import axios from "axios";
const usuarios = axios.create({
baseURL: "http://localhost:8080"
,

});
export default usuarios;

