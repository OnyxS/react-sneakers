import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";
import React from "react";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [openCart, setOpenCart] = React.useState(false);

  React.useEffect(() => {
    fetch("https://6201aa33b8735d00174cb554.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart=(obj)=>{
    setCartItems(prev=>[..cartItems,obj]);
  };

  return (
    <div className="wrapper clear">
      {openCart && <Cart items={cartItems} onClose={() => setOpenCart(false)} />}
      <Header onClickCart={() => setOpenCart(true)} />
      <div className="d-flex">
        {items.map((item) => (
          <Card
            title={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
            onFavorite={() => console.log("Enter like")}
            onPlus={(obj) =>onAddToCart(obj)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
