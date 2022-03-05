import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./shared/nav";
import { Box, Center, Container, List, Text } from "@chakra-ui/react";

const Chatpage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");

    setChats(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      <Nav />
      <Box
        m="auto"
        mt="2"
        borderRadius="10"
        bg="tomato"
        w="20%"
        p={4}
        color="white"
      >
        <Center>
          <List>
            {chats.map((chat) => (
              <div key={chat._id}>{chat.chatName}</div>
            ))}
          </List>
        </Center>
      </Box>
    </div>
  );
};

export default Chatpage;
