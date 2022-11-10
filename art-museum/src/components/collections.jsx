import { Box, Input, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import SearchImg from "../images/icons8-search.svg";
import Decoration from "../images/decoration.svg";
import Impression from "../images/impression.svg";
import Destill from "../images/de-still.svg";
import American from "../images/american.svg";
import Cubism from "../images/cubism.svg";
import Greek from "../images/greek.svg";
import Navbar from "./navbar";

const Collections = () => {
  return (
    <>
      <Box as="section" py=".6rem" px="1rem">
        <Flex
          px="1rem"
          py=".4rem"
          border="2px solid #FF473A"
          align="center"
          justify="space-between"
        >
          <Input
            type="search"
            placeholder="Explore the Collection"
            border="none"
            py=".5rem"
            color="#FF473A"
            fontSize="1.2rem"
            fontWeight="600"
            _placeholder={{ color: "#FF473A" }}
            _focus={{ outline: "none" }}
          />
          <img src={SearchImg} />
        </Flex>
        <Text
          as="label"
          my=".5rem"
          display="block"
          color="#FF473A"
          fontWeight="600"
          htmlFor="search"
          name="search"
        >
          Advanced Search
        </Text>
        <Grid
          py="1rem"
          px=".3rem"
          as="section"
          templateColumns="repeat(2, 1fr)"
          gap={20}
        >
          <GridItem as="figure">
            <img w="100%" src={Decoration} />
            <Text as="figcaption" noOfLines={2}>
              DECORATIVE ARTS & CRAFTS{" "}
            </Text>
          </GridItem>
          <GridItem as="figure">
            <img w="100%" src={Impression} />
            <Text as="figcaption" noOfLines={2}>
              AMERICAN IMPRESSIONISM
            </Text>
          </GridItem>
          <GridItem as="figure">
            <img w="100%" src={Destill} />
            <Text as="figcaption" noOfLines={2}>
              DE STIJL
            </Text>
          </GridItem>
          <GridItem as="figure">
            <img w="100%" src={Cubism} />
            <Text as="figcaption" noOfLines={2}>
              CUBISM
            </Text>
          </GridItem>
          <GridItem as="figure">
            <img w="100%" src={American} />
            <Text as="figcaption" noOfLines={2}>
              AMERICAN
            </Text>
          </GridItem>
          <GridItem as="figure">
            <img w="100%" src={Greek} />
            <Text as="figcaption" noOfLines={2}>
              GREEK ANTIQUITIES
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
export default Collections;
