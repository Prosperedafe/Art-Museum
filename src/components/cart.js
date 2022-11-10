import { Box, Heading } from "@chakra-ui/react";
import Navbar from "./navbar";
import data from "./data";
import Items from "./products";
import { useState, useEffect, useDeferredValue } from "react";
import Basket from "./basket";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
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

  const cartItemsCount = useDeferredValue(cartItems.length);
  // console.log(cartItems.length);
  return (
    <>
      <Box as="section" p="1rem">
        <Box align="center" my=".5rem">
          <Heading as="h1" fontSize="2.5rem" color="#FF473A">
            ITEMS
          </Heading>
        </Box>
        <Box my="1rem">
          {products.map((product) => (
            <Items
              key={product.id}
              product={product}
              onAdd={onAdd}
              onRemove={onRemove}
              cartItems={cartItems}
              item={cartItems.find((x) => x.id === product.id)}
            />
          ))}
        </Box>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </Box>
    </>
  );
};

export default Cart;
