// src/services/api.ts
import axios from "axios";
const permissao = axios.create({
baseURL: "http://localhost:8080"
,

});
export default permissao;

