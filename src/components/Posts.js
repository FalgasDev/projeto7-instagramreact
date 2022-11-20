import { useState } from 'react';

export default function Posts() {
	const posts = [
		{
			userImage: 'assets/img/meowed.svg',
			userName: 'meowed',
			image: 'assets/img/gato-telefone.svg',
			likedByImage: 'assets/img/respondeai.svg',
			likedByName: 'respondeai',
			totalLikes: 101523,
		},
		{
			userImage: 'assets/img/barked.svg',
			userName: 'barked',
			image: 'assets/img/dog.svg',
			likedByImage: 'assets/img/adorable_animals.svg',
			likedByName: 'adorable_animals',
			totalLikes: 99159,
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
	const [bookmark, setBookmark] = useState('bookmark-outline');
	const [heart, setHeart] = useState('heart-outline');
	const [corHeart, setCorHeart] = useState('');
	const [totalLikes, setTotalLikes] = useState(props.totalLikes);

	function favoritar() {
		if (bookmark === 'bookmark') {
			setBookmark('bookmark-outline');
		} else {
			setBookmark('bookmark');
		}
	}

	function curtir() {
		if (heart === 'heart') {
			setHeart('heart-outline');
			setCorHeart('');
			setTotalLikes(totalLikes - 1);
		} else {
			setHeart('heart');
			setCorHeart('vermelho');
			setTotalLikes(totalLikes + 1);
		}
	}

	function imagemClick() {
		if (heart === 'heart') {
		} else {
			setHeart('heart');
			setCorHeart('vermelho');
			setTotalLikes(totalLikes + 1);
		}
	}

	return (
		<div class="post">
			<div class="topo">
				<div class="usuario">
					<img src={props.userImage} alt=''/>
					{props.userName}
				</div>
				<div class="acoes">
					<ion-icon name="ellipsis-horizontal"></ion-icon>
				</div>
			</div>

			<div class="conteudo">
				<img onClick={imagemClick} src={props.image} alt=''/>
			</div>

			<div class="fundo">
				<div class="acoes">
					<div>
						<ion-icon onClick={curtir} class={corHeart} name={heart}></ion-icon>
						<ion-icon name="chatbubble-outline"></ion-icon>
						<ion-icon name="paper-plane-outline"></ion-icon>
					</div>
					<div>
						<ion-icon onClick={favoritar} name={bookmark}></ion-icon>
					</div>
				</div>

				<div class="curtidas">
					<img src={props.likedByImage} alt=''/>
					<div class="texto">
						Curtido por <strong>{props.likedByName}</strong> e{' '}
						<strong>outras {totalLikes} pessoas</strong>
					</div>
				</div>
			</div>
		</div>
	);
}
