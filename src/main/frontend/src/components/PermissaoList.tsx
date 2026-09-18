import { useEffect, useState } from "react";
import permissao from "../services/permissao";
import type { Permissao } from "../types/Permissao";
import PermissaoItem from "./PermissaoItem";
import PermissaoForm from "./PermissaoForms";

function PermissaoList() {
  const [permissoes, setPermissoes] = useState<Permissao[]>([]);
  const [editando, setEditando] = useState<Permissao | null>(null);

  function carregarPermissoes() {
    permissao.get<Permissao[]>("/permissoes/").then((resposta) => {
      setPermissoes(resposta.data);
    });
  }

  useEffect(() => {
    carregarPermissoes();
  }, []);

  async function excluir(id: number) {
    await permissao.delete(`/permissoes/${id}`);
    carregarPermissoes();
  }

  return (
    <div>
      <PermissaoForm
        key={editando?.id ?? "novo"}
        permissaoEditando={editando}
        onPermissaoSalva={() => {
          carregarPermissoes();
          setEditando(null);
        }}
      />

      <ul>
        {permissoes.map((item) => (
          <li key={item.id}>
            <PermissaoItem permissao={item} />
            <button onClick={() => setEditando(item)}>Editar</button>
            <button onClick={() => excluir(item.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PermissaoList;