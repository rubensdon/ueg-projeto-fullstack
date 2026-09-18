import { useEffect, useState } from "react";
import type { Grupo } from "../types/Grupo";
import GrupoItem from "./GrupoItem";
import grupo from "../services/grupo";
function GrupoList(){

    const [grupos,setGrupo] = useState<Grupo[]>([]);

    useEffect(()=>{

        grupo.get<Grupo[]>("/grupo/").then((resposta)=>{ setGrupo(resposta.data);})
        
    }, []);

  return (
    <ul>
      {grupos.map((item) => (
        <GrupoItem key={item.id} grupo={item} />
      ))}
    </ul>
  );
}

export default GrupoList;