// src/App.tsx
import type { ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import UsuariosPage from "./pages/UsuarioPage";
import UsuarioDetailPage from "./pages/UsuarioDetailPage";
import UsuarioPermissoesPage from "./pages/UsuarioPermissoesPage";
import PermissaoPage from "./pages/PermissaoPage";
import PermissaoDetailPage from "./pages/PermissaoDetailPage";
import GrupoPage from "./pages/GrupoPage";
import GrupoDetailPage from "./pages/GrupoDetailPage";
import LoginPage from "./pages/LoginPage";
import { obterToken } from "./services/auth";

function RequireAuth({ children }: { children: ReactNode }) {
return obterToken() ? children : <Navigate to="/login" replace />;
}

function App() {
return (
<Routes>
<Route path="/login" element={<LoginPage />} />
<Route element={<RequireAuth><Layout /></RequireAuth>}>
<Route path="/" element={<Home />} />
<Route path="/usuarios" element={<UsuariosPage />} />
<Route path="/usuarios/:id" element={<UsuarioDetailPage />} />
<Route path="/permissoes" element={<PermissaoPage />} />
<Route path="/permissoes/:id" element={<PermissaoDetailPage />} />
<Route path="/grupos" element={<GrupoPage />} />
<Route path="/grupos/:id" element={<GrupoDetailPage />} />
<Route path="/atribuir-permissoes" element={<UsuarioPermissoesPage />} />
<Route path="*" element={<h1 className="text-2xl font-bold text-gray-800">Página não encontrada</h1>} />
</Route>
</Routes>
);
}
export default App;
