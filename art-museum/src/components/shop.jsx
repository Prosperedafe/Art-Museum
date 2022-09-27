import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Clock from "../images/classic-watch.png";
import Rolex1 from "../images/rolex1.jpg";
import Rolex2 from "../images/rolex2.jpg";
import Watch from "./watch";

const Shop = () => {
  const [active, setActive] = useState("Watch1");
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  console.log(active);
  return (
    <Box as="section" p="1rem">
      <Box as="figure">
        {active === "Watch1" && <Watch Current={{ Clock }} />}
        {active === "Watch2" && <Watch Current={{ Rolex1 }} />}
        {active === "Watch3" && <Watch Current={{ Rolex2 }} />}
        <Flex justify="center" my="1rem">
          <Button
            border="1px solid #979797"
            h="12px"
            w="12px"
            borderRadius="50%"
            cursor="pointer"
            mx="5px"
            bg="#FF473A"
            onClick={() => setActive("Watch1")}
          ></Button>
          <Button
            border="1px solid #979797"
            h="12px"
            w="12px"
            borderRadius="50%"
            cursor="pointer"
            mx="5px"
            bg="#FF473A"
            onClick={() => setActive("Watch2")}
          ></Button>
          <Button
            border="1px solid #979797"
            h="12px"
            w="12px"
            borderRadius="50%"
            cursor="pointer"
            mx="5px"
            bg="#FF473A"
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
      <Button
        color="#FFFFFF"
        border="none"
        fontSize="1rem"
        background="#FF473A"
        fontFamily="poppins"
        display="block"
        my="2rem"
        mx="auto"
        py="1rem"
        px="1rem"
        w="80%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      >
        Add to Cart
      </Button>
    </Box>
  );
};
export default Shop;
