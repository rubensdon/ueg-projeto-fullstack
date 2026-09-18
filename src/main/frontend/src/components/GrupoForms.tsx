import { type FormEvent, useState } from "react";
import grupo from "../services/grupo";
import type { Grupo } from "../types/Grupo";

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
			await grupo.post("/grupo/", dados);
		}

		onGrupoSalvo();
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				value={nome}
				onChange={(event) => setNome(event.target.value)}
				placeholder="Nome"
				required
			/>
			<input
				value={descricao}
				onChange={(event) => setDescricao(event.target.value)}
				placeholder="Descrição"
				required
			/>
			<input
				type="date"
				value={datacriacao}
				onChange={(event) => setDatacriacao(event.target.value)}
				required
			/>
			<input
				type="number"
				value={idCriador}
				onChange={(event) => setIdCriador(event.target.value)}
				placeholder="ID do criador"
				required
			/>
			<button type="submit">
				{GrupoEditando ? "Salvar alterações" : "Cadastrar"}
			</button>
		</form>
	);
}

export default GrupoForm;
