import { useEffect, useState } from "react";
import permissao from "../services/permissao";
import type { Permissao } from "../types/Permissao";
import PermissaoItem from "./PermissaoItem";

function PermissaoList() {
  const [permissoes, setPermissoes] = useState<Permissao[]>([]);

  useEffect(() => {
    permissao.get<Permissao[]>("/permissoes/").then((resposta) => {
      setPermissoes(resposta.data);
    });
  }, []);

  return (
    <ul>
      {permissoes.map((item) => (
        <PermissaoItem key={item.id} permissao={item} />
      ))}
    </ul>
  );
}

export default PermissaoList;