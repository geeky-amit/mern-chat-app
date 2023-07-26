import React from "react";

import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
//import { ChatState } from "../../Context/ChatProvider";

const UserListItem = ({ user, handleFunction }) => {
  //const { user } = ChatState();

  return (
    <Box
      onClick={handleFunction}
      cursor="pionter"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white"
      }}
      w="100%"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Flex alignItems="center">
        <Avatar
          mr={2}
          size="sm"
          cursor="pointer"
          name={user.name}
          src={user.pic}
        />
        <Box>
          <Text>{user.name}</Text>

          <Text fontSize="xs">
            <b>Email : </b>
            {user.email}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default UserListItem;
