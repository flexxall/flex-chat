import { Box, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Box
      m="auto"
      mt="2"
      borderRadius="10"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="tomato"
      w="95%"
      p={4}
      color="white"
    >
      <Link to="/">Home</Link>
      &#8239;
      <Link to="chats">Chats</Link>
      <Badge borderRadius="full" px="2" colorScheme="teal">
        New
      </Badge>
    </Box>
  );
};

export default Nav;
