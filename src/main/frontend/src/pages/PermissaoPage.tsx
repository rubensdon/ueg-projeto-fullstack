import { useEffect, useState } from "react";
import permissao from "../services/permissao";
import type { Permissao } from "../types/Permissao";
import PermissaoItem from "../components/PermissaoItem";
import PermissaoForm from "../components/PermissaoForms";
import Botao from "../components/Botao";

function PermissaoList() {
  const [permissoes, setPermissoes] = useState<Permissao[]>([]);
  const [editando, setEditando] = useState<Permissao | null>(null);

  function carregarPermissoes() {
    permissao.get<Permissao[]>("/permissoes").then((resposta) => {
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
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Permissões</h1>

      <PermissaoForm
        key={editando?.id ?? "novo"}
        permissaoEditando={editando}
        onPermissaoSalva={() => {
          carregarPermissoes();
          setEditando(null);
        }}
      />

      <ul className="divide-y divide-gray-200 rounded-lg bg-white shadow">
        {permissoes.map((item) => (
          <li key={item.id} className="flex flex-wrap items-center justify-between gap-2 p-4">
            <PermissaoItem permissao={item} />
            <div className="flex gap-2">
              <Botao variante="neutro" onClick={() => setEditando(item)}>Editar</Botao>
              <Botao variante="perigo" onClick={() => excluir(item.id)}>Excluir</Botao>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PermissaoList;
