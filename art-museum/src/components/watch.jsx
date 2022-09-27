import { Box } from "@chakra-ui/react";

const Watch = ({ Current }) => {
  return (
    <Box as="figure">
      <img src={Current} />
    </Box>
  );
};
export default Watch;
