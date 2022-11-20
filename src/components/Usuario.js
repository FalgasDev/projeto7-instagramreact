
export default function Usuario(props) {
	return (
		<div class="usuario">
			<UsuarioItem nome={props.nome} novoNome={props.novoNome} imagem={props.imagem} novaImagem={props.novaImagem} user="catanacomics"/>
		</div>
	);
}

function UsuarioItem(props) {

	return (
		<>
			<img onClick={props.novaImagem} src={!props.imagem ? 'assets/img/catanacomics.svg' : props.imagem} alt=""/>
			<div class="texto">
				<strong>{props.user}</strong>
				<span>
					{!props.nome ? 'Catana' : props.nome}
					<ion-icon onClick={props.novoNome} name="pencil"></ion-icon>
				</span>
			</div>
		</>
	)
}