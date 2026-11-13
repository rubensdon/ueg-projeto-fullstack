// src/components/Layout.tsx
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { sair, temPapel } from "../services/auth";

const link = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3 py-2 text-sm font-medium ${
    isActive ? "bg-blue-800 text-white" : "text-blue-100 hover:bg-blue-500"
  }`;

function Layout() {
  const navigate = useNavigate();

  function deslogar() {
    sair();
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 shadow">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 px-4 py-3">
          <span className="mr-4 text-lg font-bold text-white">Sistema</span>
          <NavLink to="/" end className={link}>Home</NavLink>
          <NavLink to="/grupos" className={link}>Grupos</NavLink>
          {temPapel("ADMIN") && (
            <>
              <NavLink to="/usuarios" className={link}>Usuários</NavLink>
              <NavLink to="/permissoes" className={link}>Permissões</NavLink>
              <NavLink to="/atribuir-permissoes" className={link}>Atribuir Permissões</NavLink>
            </>
          )}
          <button
            onClick={deslogar}
            className="ml-auto rounded-md px-3 py-2 text-sm font-medium text-blue-100 hover:bg-blue-500"
          >
            Sair
          </button>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
