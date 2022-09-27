import { Text, Box, Heading, Button, Flex } from "@chakra-ui/react";
import Bounty from "../images/bounty.png";
import Open from "../images/open.svg";

const Member = () => {
  return (
    <>
      <Box as="section" pos="relative">
        <Box as="figure">
          <img src={Bounty} width="100%" height="auto" />
        </Box>
        <Heading
          pos="absolute"
          color="white"
          bottom="2rem"
          left="2rem"
          right="2rem"
        >
          Your Museum. Your Bounty of Experience.
        </Heading>
      </Box>
      <Box as="section" p="1rem">
        <Text color="#979797">
          Choose the membership that’s the best fit for you. Click on a level to
          view the full description of benefits.
        </Text>
        <Box p="1rem">
          <Flex justify="space-between" my="1rem">
            <Heading as="h3">
              Individual—$75
              <br />
              <Text as="span" fontSize="1rem" color="#AAAAAA">
                $60 tax deductible
              </Text>
            </Heading>
            <img src={Open} />
          </Flex>
          <Flex justify="space-between" my="1rem">
            <Heading as="h3">
              Dual—$125
              <br />
              <Text as="span" fontSize="1rem" color="#AAAAAA">
                $60 tax deductible
              </Text>
            </Heading>
            <img src={Open} />
          </Flex>
          <Flex justify="space-between" my="1rem">
            <Heading as="h3">
              Supporter—$300
              <br />
              <Text as="span" fontSize="1rem" color="#AAAAAA">
                $60 tax deductible
              </Text>
            </Heading>
            <img src={Open} />
          </Flex>
          <Button
            color="white"
            border="none"
            fontSize="1.1rem"
            background="#FF473A"
            fontFamily="poppins"
            display="block"
            my="3rem"
            mx="auto"
            py="1rem"
            px="1rem"
            w="80%"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            Join Today
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Member;
