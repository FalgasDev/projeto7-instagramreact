export default function Usuario() {
	return (
		<UsuarioItem image="assets/img/catanacomics.svg" user="catanacomics" name="Catana"/>
	);
}

function UsuarioItem(props) {
	return (
		<div class="usuario">
			<img src={props.image} />
			<div class="texto">
				<strong>{props.user}</strong>
				<span>
					{props.name}
					<ion-icon name="pencil"></ion-icon>
				</span>
			</div>
		</div>
	)
}