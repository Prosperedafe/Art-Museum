import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

const Dates = ({ Current }) => {
  const [active, setIsactive] = useState("Tomorrow");

  return (
    <Box align="center" mt="1rem">
      <Text as="time">{Current}</Text>
    </Box>
  );
};
export default Dates;
