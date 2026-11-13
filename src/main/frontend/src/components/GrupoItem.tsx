// src/components/GrupoItem.tsx
import { Link } from "react-router-dom";
import type { Grupo } from "../types/Grupo";

interface GrupoItemProps {
  grupo: Grupo;
}

function GrupoItem({ grupo }: GrupoItemProps) {
  return (
    <Link to={`/grupos/${grupo.id}`} className="font-medium text-blue-600 hover:underline">
      {grupo.nome} <span className="text-gray-500">({grupo.descricao})</span>
    </Link>
  );
}

export default GrupoItem;
