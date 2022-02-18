import styles from "./Cart.module.scss";
function Cart({onClose,items=[]}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.cart}>
        <h3 onClick={props.onClose} className="mb-30">Корзина</h3>
        <div className="flex">
          {
            items.map((obj)=>(
              <div className={styles.cartItem}>
            <img width={70} height={70} src="/img/item1.jpg" alt="" />
            <div className={styles.itemText}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <p>12300 руб.</p>
            </div>
            <img width={32} height={32} src="/img/delete.svg" alt="" />
          </div>
            ))
          }
          
        </div>
		  <div className={styles.cartDown}>
		  	<ul>
				  <li>
					  <span>Итого:</span>
					  <div></div>
						<b>21500 руб.</b>
						</li>
						<li>
					  <span>Налог:</span>
					  <div></div>
						<b>500 руб.</b>
						</li>
			  </ul>
			  <button className="mt-25">Оформить заказ</button>
		  </div>
      </div>
    </div>
  );
}

export default Cart;
