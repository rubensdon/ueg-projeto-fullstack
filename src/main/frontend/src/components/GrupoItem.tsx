

import type { Grupo } from  "../types/Grupo";

interface GrupoItemProps {

    grupo: Grupo;
}

function  GrupoItem({ grupo }:GrupoItemProps){

    return <li>
        <strong>{grupo.nome}</strong>({grupo.descricao})

    </li>
}

export default GrupoItem;