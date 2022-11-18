export default function Sugestoes() {
	const sugestoes = [
		{
			image: 'assets/img/bad.vibes.memes.svg',
			name: 'bad.vibes.memes',
			reason: 'Segue você',
		},
		{
			image: 'assets/img/chibirdart.svg',
			name: 'chibirdart',
			reason: 'Segue você',
		},
		{
			image: 'assets/img/razoesparaacreditar.svg',
			name: 'razoesparaacreditar',
			reason: 'Novo no Instagram',
		},
		{
			image: 'assets/img/adorable_animals.svg',
			name: 'adorable_animals',
			reason: 'Segue você',
		},
		{
			image: 'assets/img/smallcutecats.svg',
			name: 'smallcutecats',
			reason: 'Segue você',
		},
	];

	return (
		<div class="sugestoes">
			<div class="titulo">
				Sugestões para você
				<div>Ver tudo</div>
			</div>
			{sugestoes.map((s) => (
				<Sugestao image={s.image} name={s.name} reason={s.reason} />
			))}
		</div>
	);
}

function Sugestao(props) {
	return (
		<div class="sugestao">
			<div class="usuario">
				<img src={props.image} />
				<div class="texto">
					<div class="nome">{props.name}</div>
					<div class="razao">{props.reason}</div>
				</div>
			</div>

			<div class="seguir">Seguir</div>
		</div>
	);
}
