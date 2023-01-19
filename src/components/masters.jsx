import { Box, Text, Flex, Heading, Button } from "@chakra-ui/react";
import Museum from "../images/museum-img.png";
import Clock from "../images/clock.svg";
import Location from "../images/location.svg";

const Masters = () => {
  return (
    <>
      <Box as="section">
        <Box as="figure">
          <img src={Museum} width="100%" alt="museum" />
        </Box>
        <Box px="1rem">
          <Text color="#979797" fontWeight="500">
            EXHIBITION
          </Text>
          <Heading
            fontWeight="500"
            fontSize="2rem"
            my=".5rem"
            lineHeight="2.5rem"
          >
            MASTERS
            <br /> OLD AND
            <br /> NEW
          </Heading>
          <Text as="time" color="#FF473A" fontWeight="500" fontSize="1.3rem">
            APRIL 15 - SEPTEMBER 20
          </Text>
          <Text color="#979797" fontWeight="500">
            FLOOR 5
          </Text>
        </Box>
        <Button
          color="white"
          border="none"
          fontSize="1.1rem"
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
          Plan Your Visit
        </Button>
        <Flex justify="space-between">
          <Flex m=".4rem">
            <img src={Location} height="30px" alt="location" />
            <Text as="time" color="#FF473A" fontSize="1rem" fontWeight="500">
              151 3rd St San Francisco, CA 94103
            </Text>
          </Flex>
          <Flex m=".4rem">
            <img src={Clock} height="30px" alt="clock" />
            <Text as="time" color="#FF473A" fontSize="1rem" fontWeight="500">
              151 3rd St San Francisco, CA 94103
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
export default Masters;
