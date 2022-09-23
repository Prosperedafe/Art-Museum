import { useState } from "react";
import { Text, Box, Flex, Input } from "@chakra-ui/react";
import Events from "../images/basket.svg";
import Search from "../images/search.svg";
import Shop from "../images/Shop.svg";
import Visit from "../images/visit.svg";
import Collections from "../images/Collections.svg";
import Artist from "../images/artists.svg";
import Member from "../images/member.svg";
import { Link } from "@chakra-ui/react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <header bg="black">
      <nav>
        <Flex justify="space-between">
          <Text>
            THE
            <br /> ART
            <br /> MUSEUM
          </Text>
          <Box
            pos="absolute"
            top="5rem"
            right="6rem"
            overflowX="hidden"
            overflowY="visible"
            px="1rem"
            py=".5rem"
            bg="#FF473A"
            h="100%"
            as="section"
          >
            <Flex alignItems="center" my="1rem">
              <img src={Search} />
              <Input
                ml=".7rem"
                type="search"
                placeholder="Search"
                fontSize="1.3rem"
                px="1rem"
                py=".9rem"
                border="2px solid white"
                background="transparent"
                color="white"
                _placeholder={{ color: "white" }}
                _focus={{ outline: "none" }}
              />
            </Flex>
            <Flex alignItems="center" my="1rem">
              <img src={Events} w="30px" h="30px" />
              <Link color="white" fontSize="1.2rem" ml="1rem" to="/" m="1rem">
                Exhibitions & Events
              </Link>
            </Flex>
            <Flex alignItems="center" my="1rem">
              <img src={Artist} w="30px" h="30px" />
              <Link color="white" fontSize="1.2rem" ml="1rem" to="/">
                Artists & Networks
              </Link>
            </Flex>
            <Flex alignItems="center" my="1rem">
              <img src={Collections} w="30px" h="30px" />
              <Link color="white" fontSize="1.2rem" ml="1rem" to="/">
                Collections
              </Link>
            </Flex>
            <Flex alignItems="center" my="1rem">
              <img src={Visit} w="30px" h="30px" />
              <Link color="white" fontSize="1.2rem" ml="1rem" to="/">
                Plan Your Visit
              </Link>
            </Flex>
            <Flex alignItems="center" my="1rem">
              <img src={Member} w="30px" h="30px" />
              <Link color="white" fontSize="1.2rem" ml="1rem" to="/">
                Become a Member
              </Link>
            </Flex>
            <Flex alignItems="center" my="1rem">
              <img src={Shop} w="30px" h="30px" />
              <Link color="white" fontSize="1.2rem" ml="1rem" to="/">
                Shop
              </Link>
            </Flex>
          </Box>
          <Box bg="black" h="5rem" w="5rem">
            <span
              bg="white"
              color="white"
              h="30px"
              w="30px"
              display="block"
            ></span>
            <span></span>
            <span></span>
          </Box>
        </Flex>
      </nav>
    </header>
  );
};
export default Navbar;
