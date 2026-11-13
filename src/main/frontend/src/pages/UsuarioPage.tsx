// src/components/UsuarioList.tsx
import { useEffect, useState } from "react";
import usuario from "../services/usuarios";
import type { Usuario } from "../types/Usuario";
import UsuarioItem from "../components/UsuarioItem";
import UsuarioForm from "../components/UsuarioForm";
import Botao from "../components/Botao";

function UsuarioPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [editando, setEditando] = useState<Usuario | null>(null);

  function carregarUsuarios() {
    usuario.get<Usuario[]>("/usuarios").then((resposta) => {
      setUsuarios(resposta.data);
    });
  }

  useEffect(() => {
    carregarUsuarios();
  }, []);

  async function excluir(id: number) {
    await usuario.delete(`/usuarios/${id}`);
    carregarUsuarios();
  }
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Usuários</h1>

      <UsuarioForm
        key={editando?.id ?? "novo"}
        usuarioEditando={editando}
        onUsuarioSalvo={() => {
          carregarUsuarios();
          setEditando(null);
        }}
      />

      <ul className="divide-y divide-gray-200 rounded-lg bg-white shadow">
        {usuarios.map((usuario) => (
          <li key={usuario.id} className="flex flex-wrap items-center justify-between gap-2 p-4">
            <UsuarioItem usuario={usuario} />
            <div className="flex gap-2">
              <Botao variante="neutro" onClick={() => setEditando(usuario)}>Editar</Botao>
              <Botao variante="perigo" onClick={() => excluir(usuario.id)}>Excluir</Botao>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

/*return (
    <div>
        <h1>Usuários</h1>

        <UsuarioForm
            key={editando?.id ?? "novo"}
            usuarioEditando={editando}
            onUsuarioSalvo={() => {
                carregarUsuarios();
                setEditando(null);
            }}
        />

        <ul>
            {usuarios.map((usuario) => (
                <li key={usuario.id}>
                    <UsuarioItem usuario={usuario} />
                    <button onClick={() => setEditando(usuario)}>
                        Editar
                    </button>
                    <button onClick={() => excluir(usuario.id)}>
                        Excluir
                    </button>
                </li>
            ))}
        </ul>
    </div>
);*/
}




export default UsuarioPage;