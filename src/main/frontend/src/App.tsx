// src/App.tsx
import UsuarioList from "./components/UsuarioList";
// Certifique-se de usar 'P' maiúsculo (e o nome exato do arquivo):
import PermissaoList from "./components/PermissaoList"; 
import GrupoList from "./components/GrupoList";

function App() {
  return (
    <div>
      <h1>Usuários cadastrados</h1>
      <UsuarioList />

      <h1>Permissões cadastradas</h1>
      <PermissaoList />
     

      <h1>Grupos cadastrados</h1>
      <GrupoList />
    </div>
  );
}

export default App;