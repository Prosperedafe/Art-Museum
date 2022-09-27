import { useState } from "react";
import { Text, Box, Flex, Input, Heading } from "@chakra-ui/react";
import Events from "../images/basket.svg";
import Search from "../images/search.svg";
import Shop from "../images/Shop.svg";
import Visit from "../images/visit.svg";
import Collections from "../images/Collections.svg";
import Artist from "../images/artists.svg";
import Member from "../images/member.svg";
import Menu from "../images/menu-icon.svg";
import { Link } from "@chakra-ui/react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleClick = () => {
    setisOpen((current) => !current);
  };

  return (
    <header bg="black">
      <Box
        as="nav"
        marginBottom=".5rem"
        py=".3rem"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      >
        <Flex justify="space-between" align="center" p=".7rem">
          <Text fontSize="1rem" fontWeight="500" lineHeight="1.2rem">
            THE ART
            <br /> MUSEUM
          </Text>
          {isOpen && (
            <Box
              pos="absolute"
              top="0"
              left="0"
              right="3rem"
              overflowX="hidden"
              overflowY="visible"
              zIndex="1000"
              px="1rem"
              py="2rem"
              bg="#FF473A"
              h="100%"
              as="section"
            >
              <Flex
                alignItems="center"
                my="1rem"
                border="2px solid white"
                w="100%"
                px="1rem"
                py=".9rem"
              >
                <img src={Search} />
                <Input
                  ml=".7rem"
                  type="search"
                  placeholder="Search"
                  fontSize="1.3rem"
                  border="none"
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
          )}
          <Box w="2rem">
            <img onClick={handleClick} src={Menu} />
          </Box>
        </Flex>
      </Box>
    </header>
  );
};
export default Navbar;
