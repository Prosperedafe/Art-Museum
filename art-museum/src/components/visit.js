import { Box, Text, Heading, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Dates from "./dates";

const Visit = () => {
  const [active, setIsactive] = useState("Tomorrow");

  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const [addCount, setaddCount] = useState(0);
  const addIncrement = () => setaddCount(addCount + 1);
  const addDecrement = () => setaddCount(addCount - 1);

  const [countadd, setCountadd] = useState(0);
  const incrementAdd = () => setCountadd(countadd + 1);
  const decrementAdd = () => setCountadd(countadd - 1);

  const result = count + addCount + countadd;

  return (
    <Box as="section" p="1rem">
      <Heading as="h1">
        Skip the Line.
        <br /> Purchase Tickets.
      </Heading>
      <Text color="#FF473A" fontWeight="500" my="1rem">
        All exhibitions, audio tours, and films included in the price of
        admission.
      </Text>

      <Flex as="section" justify="space-between" mt="2rem" px="1rem">
        <Heading onClick={() => setIsactive("Tomorrow")}>Today</Heading>
        <Heading onClick={() => setIsactive("Today")}>Tomorrow</Heading>
        <Heading onClick={() => setIsactive("Other")}>Other</Heading>
      </Flex>
      {active === "Tomorrow" && (
        <Dates
          Current={
            <Text as="time" fontWeight="500">
              March 22, 2023 <br /> Open 9:30am-5:00pm
            </Text>
          }
        />
      )}
      {active === "Today" && (
        <Dates
          Current={
            <Text as="time" fontWeight="500">
              April 16, 2023 <br /> Open 10:30am-5:30pm
            </Text>
          }
        />
      )}
      {active === "Other" && (
        <Dates
          Current={
            <Text as="time" fontWeight="500">
              June 22, 2024
              <br /> Open 12:30am-4pm
            </Text>
          }
        />
      )}

      <Flex justify="space-between" my="2rem" mx="1rem">
        <Heading as="h2" fontSize="1.3rem">
          Adults
        </Heading>
        <Flex align="center">
          <Button
            border="1px solid #979797"
            mx="1rem"
            h="2rem"
            w="2rem"
            fontSize="1.8rem"
            color="#555658"
            onClick={decrement}
          >
            -
          </Button>
          <Text fontSize="1.5rem" color="#555658">
            {count}
          </Text>
          <Button
            fontSize="1.8rem"
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
      <Flex justify="space-between" my="2rem" mx="1rem">
        <Heading as="h2" fontSize="1.3rem">
          Seniors
        </Heading>
        <Flex align="center">
          <Button
            border="1px solid #979797"
            mx="1rem"
            h="2rem"
            w="2rem"
            fontSize="1.8rem"
            color="#555658"
            onClick={addDecrement}
          >
            -
          </Button>
          <Text fontSize="1.5rem" color="#555658">
            {addCount}
          </Text>
          <Button
            fontSize="1.8rem"
            border="1px solid #979797"
            mx="1rem"
            h="2rem"
            w="2rem"
            color="#555658"
            onClick={addIncrement}
          >
            +
          </Button>
        </Flex>
      </Flex>
      <Flex justify="space-between" my="2rem" mx="1rem">
        <Heading as="h2" fontSize="1.3rem">
          Students
        </Heading>
        <Flex align="center">
          <Button
            border="1px solid #979797"
            mx="1rem"
            h="2rem"
            w="2rem"
            fontSize="1.8rem"
            color="#555658"
            onClick={decrementAdd}
          >
            -
          </Button>
          <Text fontSize="1.5rem" color="#555658">
            {countadd}
          </Text>
          <Button
            fontSize="1.8rem"
            border="1px solid #979797"
            mx="1rem"
            h="2rem"
            w="2rem"
            color="#555658"
            onClick={incrementAdd}
          >
            +
          </Button>
        </Flex>
      </Flex>
      <Flex
        justify="space-between"
        borderTop="3px solid #FF473A"
        mt="4rem"
        py=".5rem"
        px="1rem"
      >
        <Heading as="h2" fontSize="1.3rem">
          Total
        </Heading>
        <Text fontSize="1.2rem" fontWeight="600">
          ${result}
        </Text>
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
        Continue to Payment
      </Button>
    </Box>
  );
};
export default Visit;
