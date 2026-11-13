import { useEffect, useState } from "react";
import type { Grupo } from "../types/Grupo";
import GrupoItem from "../components/GrupoItem";
import grupo from "../services/grupo";
import GrupoForm from "../components/GrupoForms";
import Botao from "../components/Botao";
import { temPapel } from "../services/auth";
function GrupoPage(){

    const [grupos,setGrupo] = useState<Grupo[]>([]);
    const [editando, setEditando] = useState<Grupo | null>(null);

    function carregarGrupos() {
    grupo.get<Grupo[]>("/grupo").then((resposta) => {
      setGrupo(resposta.data);
    });
  }
    

    useEffect(() => {
    carregarGrupos();
  }, []);

  async function excluir(id: number) {
    await grupo.delete(`/grupo/${id}`);
    carregarGrupos();
  }


  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Grupos</h1>

      {temPapel("ADMIN") && (
        <GrupoForm
          key={editando?.id ?? "novo"}
          GrupoEditando={editando}
          onGrupoSalvo={() => {
            carregarGrupos();
            setEditando(null);
          }}
        />
      )}

      <ul className="divide-y divide-gray-200 rounded-lg bg-white shadow">
        {grupos.map((grupo) => (
          <li key={grupo.id} className="flex flex-wrap items-center justify-between gap-2 p-4">
            <GrupoItem grupo={grupo} />
            {temPapel("ADMIN") && (
              <div className="flex gap-2">
                <Botao variante="neutro" onClick={() => setEditando(grupo)}>Editar</Botao>
                <Botao variante="perigo" onClick={() => excluir(grupo.id)}>Excluir</Botao>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

}

export default GrupoPage;
