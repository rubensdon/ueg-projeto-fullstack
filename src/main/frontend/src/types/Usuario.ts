import type { Permissao } from "./Permissao";

// src/types/Usuario.ts
export interface Usuario {
id: number;
nome: string;
senha: string;
username: string;
email: string;

permissao?: Permissao[];
}