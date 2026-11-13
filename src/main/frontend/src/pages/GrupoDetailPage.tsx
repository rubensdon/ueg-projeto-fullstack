// src/pages/GrupoDetailPage.tsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/grupo";
import type { Grupo } from "../types/Grupo";
import Botao from "../components/Botao";
function GrupoDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [grupo, setGrupo] = useState<Grupo | null>(null);
  useEffect(() => {
    api.get<Grupo>(`/grupo/${id}`).then((resposta) => {
      setGrupo(resposta.data);
    });
  }, [id]);
  if (!grupo) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="max-w-md rounded-lg bg-white p-6 shadow">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">{grupo.nome}</h1>
      <p className="text-gray-700">
        <strong>Descrição:</strong> {grupo.descricao}
      </p>
      <p className="text-gray-700">
        <strong>Data de criação:</strong> {grupo.datacriacao}
      </p>
      <p className="mb-4 text-gray-700">
        <strong>ID do criador:</strong> {grupo.id_criador}
      </p>
      <Botao variante="neutro" onClick={() => navigate("/grupos")}>Voltar</Botao>
    </div>
  );
}
export default GrupoDetailPage;
