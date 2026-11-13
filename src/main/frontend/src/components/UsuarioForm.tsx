// src/components/UsuarioForm.tsx
import { type FormEvent, useState } from "react";
import api from "../services/usuarios";
import type { Usuario } from "../types/Usuario";
import Botao from "./Botao";

interface UsuarioFormProps {
  onUsuarioSalvo: () => void;
  usuarioEditando?: Usuario | null;
}

function UsuarioForm({ onUsuarioSalvo, usuarioEditando }: UsuarioFormProps) {
  const [nome, setNome] = useState(usuarioEditando?.nome ?? "");
  const [senha, setSenha] = useState(usuarioEditando?.senha ?? "");

  const [username, setUsername] = useState(usuarioEditando?.username ?? "");
  const [email, setEmail] = useState(usuarioEditando?.email ?? "");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const dados = { nome, username, senha, email };

    if (usuarioEditando) {
      await api.put(`/usuarios/${usuarioEditando.id}`, dados);
    } else {
      await api.post("/usuarios", dados);
    }

    onUsuarioSalvo();
  }

  const campo =
    "rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 grid gap-3 rounded-lg bg-white p-4 shadow md:grid-cols-5"
    >
      <input
        className={campo}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
      />
      <input
        className={campo}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        className={campo}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />
      <input
        className={campo}
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Senha"
      />
      <Botao type="submit">
        {usuarioEditando ? "Salvar alterações" : "Cadastrar"}
      </Botao>
    </form>
  );
}

export default UsuarioForm;
