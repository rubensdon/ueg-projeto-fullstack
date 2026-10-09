// src/components/UsuarioList.tsx
import { useEffect, useState } from "react";
import usuario from "../services/usuarios";
import type { Usuario } from "../types/Usuario";
import UsuarioItem from "../components/UsuarioItem";
import UsuarioForm from "../components/UsuarioForm";

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

            <h1>Criar usuario</h1>

      <UsuarioForm
        key={editando?.id ?? "novo"}
        usuarioEditando={editando}
        onUsuarioSalvo={() => {
          carregarUsuarios();
          setEditando(null);
        }}
      />

      <ul>
              <h3>Lista de usuario</h3>

        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <UsuarioItem usuario={usuario} />
            <button onClick={() => setEditando(usuario)}>Editar</button>
            <button onClick={() => excluir(usuario.id)}>Excluir</button>
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