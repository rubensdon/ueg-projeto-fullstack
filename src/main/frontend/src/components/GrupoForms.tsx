import { type FormEvent, useState } from "react";
import grupo from "../services/grupo";
import type { Grupo } from "../types/Grupo";
import Botao from "./Botao";

interface GrupoFormProps {
	onGrupoSalvo: () => void;
	GrupoEditando?: Grupo | null;
}

function GrupoForm({ onGrupoSalvo, GrupoEditando }: GrupoFormProps) {
	const [nome, setNome] = useState(GrupoEditando?.nome ?? "");
	const [descricao, setDescricao] = useState(GrupoEditando?.descricao ?? "");
	const [datacriacao, setDatacriacao] = useState(
		GrupoEditando?.datacriacao ?? "",
	);
	const [idCriador, setIdCriador] = useState(
		GrupoEditando?.id_criador?.toString() ?? "",
	);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const dados = {
			nome,
			descricao,
			datacriacao,
			id_criador: Number(idCriador),
		};

		if (GrupoEditando) {
			await grupo.put(`/grupo/${GrupoEditando.id}`, dados);
		} else {
			await grupo.post("/grupo", dados);
		}

		onGrupoSalvo();
	}

	const campo =
		"rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none";

	return (
		<form
			onSubmit={handleSubmit}
			className="mb-6 grid gap-3 rounded-lg bg-white p-4 shadow md:grid-cols-5"
		>
			<input
				className={campo}
				value={nome}
				onChange={(event) => setNome(event.target.value)}
				placeholder="Nome"
				required
			/>
			<input
				className={campo}
				value={descricao}
				onChange={(event) => setDescricao(event.target.value)}
				placeholder="Descrição"
				required
			/>
			<input
				className={campo}
				type="date"
				value={datacriacao}
				onChange={(event) => setDatacriacao(event.target.value)}
				required
			/>
			<input
				className={campo}
				type="number"
				value={idCriador}
				onChange={(event) => setIdCriador(event.target.value)}
				placeholder="ID do criador"
				required
			/>
			<Botao type="submit">
				{GrupoEditando ? "Salvar alterações" : "Cadastrar"}
			</Botao>
		</form>
	);
}

export default GrupoForm;
