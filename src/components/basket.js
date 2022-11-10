import { Box, Text, Heading, Button, Flex } from "@chakra-ui/react";

const Basket = (props) => {
  
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <Box p="1rem" mb="3rem" border=" 1px solid #979797">
      <Box align="center">
        <Heading fontSize="1.8rem" color="#FF473A">
          Cart Items
        </Heading>
      </Box>
      {cartItems.length === 0 && (
        <Box textAlign="center" py="2rem">
          <Text color="#979797" fontSize="1.2rem">
            Cart is empty
          </Text>
        </Box>
      )}
      {cartItems.map((item) => (
        <Box key={item.id} mb="1rem">
          <img src={item.image} width="100%" />
          <Text fontSize="1.5rem" fontWeight="500">
            {item.name}
          </Text>
          <Flex justify="space-between" my="1rem">
            <Button
              p=".7rem 1.5rem"
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
            <Button
              p=".7rem 1.5rem"
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
          <Text color="#979797" fontSize="1.5rem" fontWeight="500">
            {item.qty} x ${item.price.toFixed(2)}
          </Text>
        </Box>
      ))}
      {cartItems.lenght !== 0 && (
        <Box as="section">
          <hr color="#FF473A" />
          <Box my="1rem">
            <Text color="#FF473A" fontSize="1.5rem" fontWeight="500">
              Items Price
            </Text>
            <Text color="#979797" fontSize="1.5rem" fontWeight="500">
              ${itemsPrice.toFixed(2)}
            </Text>
          </Box>
          <Box my="1rem">
            <Text color="#FF473A" fontSize="1.5rem" fontWeight="500">
              Tax Price
            </Text>
            <Text color="#979797" fontSize="1.5rem" fontWeight="500">
              ${taxPrice.toFixed(2)}
            </Text>
          </Box>
          <Box my="1rem">
            <Text color="#FF473A" fontSize="1.5rem" fontWeight="500">
              Shipping Price
            </Text>
            <Text color="#979797" fontSize="1.5rem" fontWeight="500">
              ${shippingPrice.toFixed(2)}
            </Text>
          </Box>
          <Box my="1rem">
            <Text color="#FF473A" fontSize="1.5rem" fontWeight="500">
              Total Price
            </Text>
            <Text color="#979797" fontSize="1.5rem" fontWeight="500">
              ${taxPrice.toFixed(2)}
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Basket;
