// src/pages/Home.tsx
import { Link } from "react-router-dom";
import { temPapel } from "../services/auth";

const azul = "rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700";
const cinza = "rounded-md bg-gray-600 px-4 py-2 text-white hover:bg-gray-700";

function Home() {
  return (
    <div className="rounded-lg bg-white p-8 text-center shadow">
      <h1 className="mb-2 text-3xl font-bold text-blue-600">Bem-vindo ao sistema!</h1>
      <p className="mb-6 text-gray-600">Gerencie usuários, permissões e grupos.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link to="/grupos" className={azul}>Grupos</Link>
        {temPapel("ADMIN") && (
          <>
            <Link to="/usuarios" className={cinza}>Usuários</Link>
            <Link to="/permissoes" className={cinza}>Permissões</Link>
            <Link to="/atribuir-permissoes" className={cinza}>Atribuir Permissões</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
