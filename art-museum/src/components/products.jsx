import { Box, Text, Button, Heading, Flex } from "@chakra-ui/react";
import data from "./data";
import Cart from "../images/cart-white.svg";
import Basket from "./basket";

export default function Items(props) {
  const { item, product, onAdd, onRemove } = props;
  return (
    <>
      <Box p="1rem">
        <img width="100%" src={product.image} alt={product.name} />
        <Heading color="#FF473A">{product.name}</Heading>
        <Text fontWeight="600">${product.price}</Text>
        <Box>
          {item ? (
            <Flex my="1rem" justify="space-between" align="center">
              <Button
                p=".5rem 1rem"
                border="none"
                color="white"
                bg="#FF473A"
                fontSize="1rem"
                fontWeight="500"
                fontFamily="poppins"
                transition="all .3s ease"
                mx=".5rem"
                _active={{ bg: "#979797" }}
                onClick={() => onAdd(item)}
              >
                Add
              </Button>
              <Text color="#FF473A" fontSize="1.8rem" fontWeight="500">
                {item.qty}
              </Text>
              <Button
                p=".55rem 1rem"
                border="none"
                color="white"
                bg="#FF473A"
                fontSize="1rem"
                fontWeight="500"
                fontFamily="poppins"
                transition="all .3s ease"
                mx=".5rem"
                _active={{ bg: "#979797" }}
                onClick={() => onRemove(item)}
              >
                Remove
              </Button>
            </Flex>
          ) : (
            <Flex
              onClick={() => onAdd(product)}
              align="center"
              justify="center"
              bg="#FF473A"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              mx="auto"
              py="1rem"
              px="1rem"
              my="2rem"
              w="80%"
            >
              <Button
                bg="transparent"
                color="#FFFFFF"
                border="none"
                fontSize="1rem"
                fontFamily="poppins"
                mr="1rem"
              >
                Add to Cart
              </Button>
              <img src={Cart} height="25px" />
            </Flex>
          )}
        </Box>
      </Box>
    </>
  );
}
