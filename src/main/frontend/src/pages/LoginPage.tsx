// src/pages/LoginPage.tsx
import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { type Sessao, salvarSessao } from "../services/auth";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  async function entrar(e: FormEvent) {
    e.preventDefault();
    try {
      const resposta = await api.post<Sessao>("/api/login", { username, senha });
      salvarSessao(resposta.data);
      navigate("/");
    } catch {
      setErro("Usuário ou senha inválidos");
    }
  }

  return (
    <form onSubmit={entrar} className="mx-auto mt-16 max-w-sm rounded-lg bg-white p-6 shadow">
      <h1 className="mb-4 text-2xl font-bold">Entrar</h1>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Usuário"
        className="mb-3 w-full rounded-md border p-2"
      />
      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Senha"
        className="mb-3 w-full rounded-md border p-2"
      />
      {erro && <p className="mb-3 text-red-600">{erro}</p>}
      <button className="w-full rounded-md bg-blue-600 py-2 text-white">Entrar</button>
    </form>
  );
}

export default LoginPage;
