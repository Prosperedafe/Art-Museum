import { Box, Heading } from "@chakra-ui/react";
import data from "./data";
import Items from "./products";
import { useState, useEffect } from "react";
import Basket from "./basket";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;
  const onAdd = (product) => {
    const exist = cartItems.find((goods) => goods.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((goods) =>
        goods.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : goods
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((goods) => goods.id === product.id);
    if (exist.quantity === 1) {
      const newCartItems = cartItems.filter((goods) => goods.id !== product.id);
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItems.map((goods) =>
        goods.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : goods
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };
  useEffect(() => {
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
  }, []);

  // const cartItemsCount = useDeferredValue(cartItems.length);

  return (
    <>
      <Box as="section" p="1rem">
        <Heading as="h1" textAlign="center" mt="2rem" fontSize="3.5rem" color="#FF473A">
          ITEMS
        </Heading>
        <Box my="1rem">
          {products.map((product) => (
            <Items
              key={product.id}
              product={product}
              onAdd={onAdd}
              onRemove={onRemove}
              cartItems={cartItems}
              item={cartItems.find((goods) => goods.id === product.id)}
            />
          ))}
        </Box>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </Box>
    </>
  );
};

export default Cart;
