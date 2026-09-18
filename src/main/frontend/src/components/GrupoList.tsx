import { useEffect, useState } from "react";
import type { Grupo } from "../types/Grupo";
import GrupoItem from "./GrupoItem";
import grupo from "../services/grupo";
import GrupoForm from "./GrupoForms";
function GrupoList(){

    const [grupos,setGrupo] = useState<Grupo[]>([]);
    const [editando, setEditando] = useState<Grupo | null>(null);

    function carregarGrupos() {
    grupo.get<Grupo[]>("/grupo/").then((resposta) => {
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
      <GrupoForm
        key={editando?.id ?? "novo"}
        GrupoEditando={editando}
        onGrupoSalvo={() => {
          carregarGrupos();
          setEditando(null);
        }}
      />

      <ul>
        {grupos.map((grupo) => (
          <li key={grupo.id}>
            <GrupoItem grupo={grupo} />
            <button onClick={() => setEditando(grupo)}>Editar</button>
            <button onClick={() => excluir(grupo.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default GrupoList;