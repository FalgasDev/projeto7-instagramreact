import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"
import { useState } from "react";

export default function SideBar() {
	const [nome, setNome] = useState('Catana')
	const [imagem, setImagem] = useState('assets/img/catanacomics.svg')

	function novoNome() {
		setNome(prompt('Qual o seu novo nome?'))
	}

	function novaImagem() {
		setImagem(prompt('Qual a sua nova imagem?'))
	}

	return (
		<div class="sidebar">
			<Usuario nome={nome} novoNome={novoNome} imagem={imagem} novaImagem={novaImagem}/>
			<Sugestoes/>
			<div class="links">
				Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
				Localizações • Contas mais relevantes • Hashtags • Idioma
			</div>

			<div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
		</div>
	);
}