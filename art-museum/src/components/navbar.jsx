import { useState } from "react";
import { Text, Box, Flex, Input, Heading } from "@chakra-ui/react";
import Events from "../images/basket.svg";
import Search from "../images/search.svg";
import Shop from "../images/Shop.svg";
import Visit from "../images/visit.svg";
import Collections from "../images/Collections.svg";
import Artist from "../images/artists.svg";
import Member from "../images/member.svg";
import Logout from "../images/logout.svg";
import Cartimg from "../images/cart-white.svg";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { countCartItems } = props;
  console.log(countCartItems);
  const [isOpen, setisOpen] = useState(false);
  const handleClick = () => {
    setisOpen((current) => !current);
  };

  return (
    <Box as="header" bg="white" pb="5rem" pos="relative" zIndex="1">
      <Box
        as="nav"
        bg="white"
        marginBottom="1rem"
        w="100%"
        zIndex="1"
        px=".5rem"
        pos="fixed"
        top="0"
        left="0"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
      >
        <Flex justify="space-between" align="center" p=".7rem">
          <Text fontSize=".9rem" fontWeight="500" lineHeight="1rem">
            THE <br />
            ART
            <br /> MUSEUM
          </Text>

          <Box
            style={{
              left: isOpen ? "0" : "-100%",
            }}
            pos="absolute"
            top="4.5rem"
            left="0"
            overflowX="hidden"
            overflowY="visible"
            zIndex="1000"
            px="1rem"
            py="2rem"
            bg="#FF473A"
            minH="100vh"
            bottom="0"
            w="100%"
            as="section"
            transition="all 400ms ease"
          >
            <Flex alignItems="center" my="1rem" w="100%">
              <img src={Search} height="25px" width="25px" />
              <Box
                border="2px solid white"
                py="1rem"
                px=".7rem"
                ml="1rem"
                w="100%"
              >
                <Input
                  type="search"
                  placeholder="Search"
                  fontSize="1.3rem"
                  border="none"
                  background="transparent"
                  color="white"
                  w="100%"
                  _placeholder={{ color: "white" }}
                  _focus={{ outline: "none" }}
                />
              </Box>
            </Flex>
            <Flex alignItems="center" my="1rem">
              <img src={Events} width="25px" height="25px" />
              <Link fontSize="1.2rem" to="/exhibition">
                Exhibitions & Events
              </Link>
            </Flex>
            <Flex alignItems="center" my="1rem">
              <img src={Artist} width="25px" height="25px" />
              <Link color="white" fontSize="1.2rem" ml="1rem">
                Artists & Networks
              </Link>
            </Flex>
            <Flex alignItems="center" my="1rem">
              <img src={Collections} width="25px" h="25px" />
              <Link color="white" fontSize="1.2rem" ml="1rem" to="/collections">
                Collections
              </Link>
            </Flex>
            <Flex alignItems="center" my="1rem">
              <img src={Visit} width="25px" h="25px" />
              <Link color="white" fontSize="1.2rem" ml="1rem" to="/visit">
                Plan Your Visit
              </Link>
            </Flex>
            <Flex alignItems="center" my="1rem">
              <img src={Member} width="25px" h="25px" />
              <Link color="white" fontSize="1.2rem" ml="1rem" to="/member">
                Become a Member
              </Link>
            </Flex>
            <Flex alignItems="center" my="1rem">
              <img src={Shop} width="25px" h="25px" />
              <Link color="white" fontSize="1.2rem" ml="1rem" to="/shop">
                Shop
              </Link>
            </Flex>
            <Flex alignItems="center" my="1rem">
              <img src={Cartimg} width="25px" h="25px" />
              <Link color="white" fontSize="1.2rem" ml="1rem" to="/cart">
                Cart{" "}
                {props.countCartItems ? (
                  <Text
                    bg="white"
                    borderRadius="50%"
                    as="span"
                    color="#FF473A"
                    px=".3rem"
                    fontSize=".9rem"
                    fontWeight="500"
                  >
                    {props.countCartItems}
                  </Text>
                ) : (
                  ""
                )}
              </Link>
            </Flex>
            <Flex alignItems="center" my="1rem">
              <img src={Logout} width="25px" h="25px" />
              <Link color="white" fontSize="1.2rem" ml="1rem" to="/">
                Logout
              </Link>
            </Flex>
          </Box>
          <Box
            transition="all .3s ease"
            pos="relative"
            h="30px"
            cursor="pointer"
            onClick={handleClick}
          >
            <Text
              style={{
                transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                position: isOpen ? "absolute" : "static",
                bottom: isOpen ? "8px" : "0",
              }}
              bg="black"
              h="2px"
              w="30px"
              my="7px"
              transition="all .5s ease"
            ></Text>
            <Text
              style={{
                transform: isOpen ? "scaleX(0)" : "scaleX(1)",
              }}
              bg="black"
              h="2px"
              w="30px"
              my="7px"
              transition="all .5s ease"
            ></Text>
            <Text
              style={{
                transform: isOpen ? "rotate(-45deg)" : "rotate(0)",
                position: isOpen ? "absolute" : "static",
                bottom: isOpen ? "8px" : "0",
              }}
              bg="black"
              h="2px"
              w="30px"
              my="7px"
              transition="all .5s ease"
            ></Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
export default Navbar;
