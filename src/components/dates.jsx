import { Box, Text } from "@chakra-ui/react";

const Dates = ({ Current }) => {
  return (
    <Box align="center" mt="1rem">
      <Text as="time">{Current}</Text>
    </Box>
  );
};
export default Dates;
