import { type FormEvent, useState } from "react";
import permissao from "../services/permissao";
import type { Permissao } from "../types/Permissao";

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

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        placeholder="Nome"
        required
      />
      <input
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
        placeholder="Descrição"
        required
      />
      <button type="submit">
        {permissaoEditando ? "Salvar alterações" : "Cadastrar"}
      </button>
    </form>
  );
}

export default PermissaoForm;
