export default function Posts() {
	const posts = [
		{
			userImage: 'assets/img/meowed.svg',
			userName: 'meowed',
			image: 'assets/img/gato-telefone.svg',
			likedByImage: 'assets/img/respondeai.svg',
			likedByName: 'respondeai',
			totalLikes: '101.523',
		},
		{
			userImage: 'assets/img/barked.svg',
			userName: 'barked',
			image: 'assets/img/dog.svg',
			likedByImage: 'assets/img/adorable_animals.svg',
			likedByName: 'adorable_animals',
			totalLikes: '99.159',
		},
	];

	return (
		<div class="posts">
			{posts.map((p) => (
				<Post
					userImage={p.userImage}
					userName={p.userName}
					image={p.image}
					likedByImage={p.likedByImage}
					likedByName={p.likedByName}
					totalLikes={p.totalLikes}
				/>
			))}
		</div>
	);
}

function Post(props) {
	return (
		<div class="post">
			<div class="topo">
				<div class="usuario">
					<img src={props.userImage} />
					{props.userName}
				</div>
				<div class="acoes">
					<ion-icon name="ellipsis-horizontal"></ion-icon>
				</div>
			</div>

			<div class="conteudo">
				<img src={props.image} />
			</div>

			<div class="fundo">
				<div class="acoes">
					<div>
						<ion-icon name="heart-outline"></ion-icon>
						<ion-icon name="chatbubble-outline"></ion-icon>
						<ion-icon name="paper-plane-outline"></ion-icon>
					</div>
					<div>
						<ion-icon name="bookmark-outline"></ion-icon>
					</div>
				</div>

				<div class="curtidas">
					<img src={props.likedByImage} />
					<div class="texto">
						Curtido por <strong>{props.likedByName}</strong> e{' '}
						<strong>outras {props.totalLikes} pessoas</strong>
					</div>
				</div>
			</div>
		</div>
	);
}
