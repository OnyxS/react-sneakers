import styles from './Card.module.scss'
import React from 'react';



function Card(price,title,imageUrl,onFavorite,onPlus){

	const [isAdded,setIsAdded]=React.useState(false);

	const onClickPlus=()=>{
		onPlus(title,price,imageUrl);
		setIsAdded(!isAdded);
	};

	return(
		<div className={styles.card}>
			<div className={styles.favorite}>
				<img onClick={props.onClickFavorite} width={32} height={32} src="/img/unliked.svg" alt="Unliked" />
			</div>
			<img width={133} height={112} src={props.imgUrl} alt="Sneakers" />
			<h5>{props.title}</h5>
			<div className="d-flex align-center justify-between">
				<div className={styles.cost}>
					<span>Цена:</span>
					<b>{props.price} руб.</b>
				</div> 
					<img onClick={onClickPlus} width={32} height={32} 
					src={isAdded?'/img/checked.svg':'/img/plus.svg'}
					alt="Plus" />
			</div>
		</div>
	);
}

export default Card;