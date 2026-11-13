import { type FormEvent, useState } from "react";
import permissao from "../services/permissao";
import type { Permissao } from "../types/Permissao";
import Botao from "./Botao";

interface PermissaoFormProps {
  onPermissaoSalva: () => void;
  permissaoEditando?: Permissao | null;
}

function PermissaoForm({ onPermissaoSalva, permissaoEditando }: PermissaoFormProps) {
  const [nome, setNome] = useState(permissaoEditando?.nome ?? "");
  const [descricao, setDescricao] = useState(permissaoEditando?.descricao ?? "");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const dados = {
      nome,
      descricao,
    };

    if (permissaoEditando) {
      await permissao.put(`/permissoes/${permissaoEditando.id}`, dados);
    } else {
      await permissao.post("/permissoes/", dados);
    }

    onPermissaoSalva();
  }

  const campo =
    "rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 grid gap-3 rounded-lg bg-white p-4 shadow md:grid-cols-3"
    >
      <input
        className={campo}
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        placeholder="Nome"
        required
      />
      <input
        className={campo}
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
        placeholder="Descrição"
        required
      />
      <Botao type="submit">
        {permissaoEditando ? "Salvar alterações" : "Cadastrar"}
      </Botao>
    </form>
  );
}

export default PermissaoForm;
