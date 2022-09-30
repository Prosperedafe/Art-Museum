import { Box, Text, Heading, Flex, Button } from "@chakra-ui/react";
import Active1 from "../images/ActiveImage1.png";
import Dropdown from "../images/dropdown.svg";
import Activeimg from "../images/active-img.svg";
import { useState } from "react";
import Navbar from "./navbar";

const Exhibition = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleClick = () => {
    setisOpen((current) => !current);
  };
  const [preview, setpreview] = useState(false);
  const handleActive = () => {
    setpreview((current) => !current);
  };

  return (
    <>
      <Navbar />
      <Box as="section" p="1.5rem">
        <Text color="#979797" my=".5rem" fontWeight="600">
          RETROSPECTIVE
        </Text>
        <Heading as="h1" my=".5rem" fontSize="1.3rem" fontWeight="600">
          DOROTHEA LANGE
        </Heading>
        <Text
          as="time"
          my=".5rem"
          display="block"
          color="#FF473A"
          fontSize="1.3rem"
          fontWeight="600"
        >
          OCTOBER 15 - MARCH 18
        </Text>
        <Text color="#979797" fontWeight="600">
          FLOOR 3
        </Text>
        <Box as="section">
          <Box as="figure" textAlign="center" my="2rem">
            <img src={Active1} />
            <Flex justify="center" my="1rem">
              <Button
                border="1px solid #979797"
                h="12px"
                w="12px"
                borderRadius="50%"
                cursor="pointer"
                mx="5px"
                bg="#FF473A"
              ></Button>
              <Button
                border="1px solid #979797"
                h="12px"
                w="12px"
                borderRadius="50%"
                cursor="pointer"
                mx="5px"
              ></Button>
              <Button
                border="1px solid #979797"
                h="12px"
                w="12px"
                borderRadius="50%"
                cursor="pointer"
                mx="5px"
              ></Button>
              <Button
                border="1px solid #979797"
                h="12px"
                w="12px"
                borderRadius="50%"
                cursor="pointer"
                mx="5px"
              ></Button>
              <Button
                border="1px solid #979797"
                h="12px"
                w="12px"
                borderRadius="50%"
                cursor="pointer"
                mx="5px"
              ></Button>
            </Flex>
            <Text as="figcaption" color="#979797" fontSize=".8rem" my=".5rem">
              “Abandoned Dust Bowl Home” Gelatin silver print about 1935 - 1940
            </Text>
          </Box>
        </Box>
        <Flex justify="space-between" align="center" onClick={handleClick}>
          <Heading color="#979797" fontSize="1rem" fontWeight="600" mb="1rem">
            BIOGRAPHY
          </Heading>
          <img
            src={Dropdown}
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0)",
            }}
          />
        </Flex>
        {isOpen && (
          <Text mb="2rem" color="#979797" fontSize=".9rem">
            Dorothea Lange (May 26, 1895 – October 11, 1965) was an influential
            American documentary photographer and photojournalist, best known
            for her Depression-era work for the Farm Security Administration
            (FSA). Lange's photographs humanized the consequences of the Great
            Depression and influenced the development of documentary
            photography. Born of second generation German immigrants on May 26,
            1895, at 1041 Bloomfield Street, Hoboken, New Jersey,[1][2] Dorothea
            Lange was named Dorothea Margaretta Nutzhorn at birth. She dropped
            her middle name and assumed her mother's maiden name after her
            father abandoned the family when she was 12 years old, one of two
            traumatic incidents early in her life. The other was her contraction
            of polio at age seven which left her with a weakened right leg and a
            permanent limp.[1][2] "It formed me, guided me, instructed me,
            helped me and humiliated me," Lange once said of her altered gait.
            "I've never gotten over it, and I am aware of the force and power of
            it."[3]
          </Text>
        )}
      </Box>
    </>
  );
};
export default Exhibition;
