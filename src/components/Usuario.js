
export default function Usuario(props) {
	return (
		<div data-test="user" class="usuario">
			<UsuarioItem nome={props.nome} novoNome={props.novoNome} imagem={props.imagem} novaImagem={props.novaImagem} user="catanacomics"/>
		</div>
	);
}

function UsuarioItem(props) {

	return (
		<>
			<img data-test="profile-image" onClick={props.novaImagem} src={!props.imagem ? 'assets/img/catanacomics.svg' : props.imagem} alt=""/>
			<div class="texto">
				<strong>{props.user}</strong>
				<span>
					<p data-test="name">{!props.nome ? 'Catana' : props.nome}</p>
					<ion-icon data-test="edit-name" onClick={props.novoNome} name="pencil"></ion-icon>
				</span>
			</div>
		</>
	)
}