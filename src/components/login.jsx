import { Text, Box, Button, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../style/style.css";

const Login = () => {
  return (
    <Box px="3rem" py="4rem" className="login-box" as="section">
      <Box>
        <Text as="h1" color="white" fontSize="3rem" fontWeight="400" my="1rem">
          YOUR ART MUSEUM
        </Text>
        <Text color="white" my="2rem">
          151 3rd St San Francisco, CA 94103
        </Text>
      </Box>
      <Box>
        <Input
          type="email"
          placeholder="Email Adress"
          fontFamily="poppins"
          _placeholder={{ fontWeight: "500" }}
          _focus={{ outline: "none" }}
          fontSize="1.2rem"
          color="#FF473A"
          py=".7rem"
          px="1.5rem"
          mb="5px"
          width="100%"
        />
        <br />
        <Input
          type="password"
          placeholder="Password"
          fontFamily="poppins"
          _placeholder={{ fontWeight: "500" }}
          _focus={{ outline: "none" }}
          fontSize="1.2rem"
          color="#FF473A"
          py=".7rem"
          px="1.5rem"
          width="100%"
        />
        <br />
        <Link display="block" color="white" my="1rem" to="/">
          <Text>Forgot your password</Text>
        </Link>

        <Link to="/collections">
          <Button
            bg="#FF473A"
            color="white"
            p="1rem"
            border="none"
            width="100%"
            fontWeight="600"
            fontSize="1.2rem"
            my="1rem"
          >
            Log in
          </Button>
        </Link>
        <Link display="block" color="white" my="1rem" to="/">
          Don't have an account?
        </Link>
      </Box>
    </Box>
  );
};
export default Login;
