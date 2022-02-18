import styles from './Header.module.scss'

function Header(props){
	return(
		<header>
			<div className={styles.headerLeft}>
				<img width={40} height={40} src='/img/logo.svg' alt="logo" />
				<div className="text">
					<h3>REACT SNEAKERS</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className={styles.headerRight}>
				<li onClick={props.onClickCart}>
					<img src="/img/basket.svg" alt="bask" />
					<span>1200 руб.</span>
				</li>
				<li>
					<img src="/img/like.svg" alt="" />
				</li>
				<li>
					<img src="/img/person.svg" alt="" />
				</li>
			</ul>
		</header>
	);
}

export default Header;