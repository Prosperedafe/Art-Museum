import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Watch1 from "../images/watch4.jpg";
import Watch2 from "../images/watch2.jpg";
import Watch3 from "../images/watch3.jpg";
import Cartimg from "../images/cart-white.svg";
import Navbar from "./navbar";

const Shop = () => {
  const [active, setActive] = useState("Watch1");
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <Navbar />
      <Box as="section" p="1rem">
        <Box as="figure">
          {active === "Watch1" && <img src={Watch1} width="100%" />}
          {active === "Watch2" && <img src={Watch2} width="100%" />}
          {active === "Watch3" && <img src={Watch3} width="100%" />}
          <Flex justify="center" my="1rem">
            <Button
              border="1px solid #979797"
              h="12px"
              w="12px"
              borderRadius="50%"
              cursor="pointer"
              mx="5px"
              onClick={() => setActive("Watch1")}
            ></Button>
            <Button
              border="1px solid #979797"
              h="12px"
              w="12px"
              borderRadius="50%"
              cursor="pointer"
              mx="5px"
              onClick={() => setActive("Watch2")}
            ></Button>
            <Button
              border="1px solid #979797"
              h="12px"
              w="12px"
              borderRadius="50%"
              cursor="pointer"
              mx="5px"
              onClick={() => setActive("Watch3")}
            ></Button>
          </Flex>
          <Text as="figcaption" fontSize="1.5rem" fontWeight="600">
            Braun Classic Watch
          </Text>
        </Box>
        <Text my="1rem" color="#979797" fontSize=".9rem">
          This Braun watch is a reissue of the original 1970's design from
          renowned design team Dietrich Lubs and Dieter Rams, both of whom have
          work featured in the Museum’s collection. The large watch features a
          numbered face, and the smaller watch has only index lines. Made of a
          matte stainless-steel case, black dial, mineral glass, a three-hand
          quartz movement, and a leather band. Water-resistant.
        </Text>
        <Flex justify="space-between">
          <Text fontWeight="500" fontSize="1.1rem">
            $160.00
            <br />
            <Text as="span" fontSize=".9rem" color="#979797">
              $140.00 Member Price
            </Text>
          </Text>
          <Flex align="center">
            <Button
              border="1px solid #979797"
              mx="1rem"
              h="2rem"
              w="2rem"
              fontSize="2rem"
              color="#555658"
              onClick={decrement}
            >
              -
            </Button>
            <Text fontSize="1.5rem" color="#555658">
              {count}
            </Text>
            <Button
              fontSize="2rem"
              border="1px solid #979797"
              mx="1rem"
              h="2rem"
              w="2rem"
              color="#555658"
              onClick={increment}
            >
              +
            </Button>
          </Flex>
        </Flex>
        <Flex
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
          <img src={Cartimg} height="25px" />
        </Flex>
      </Box>
    </>
  );
};
export default Shop;
