import { Center, Stack, Box, Button } from "@chakra-ui/react";
import { memo } from "react";

const WrapperTodo = ({ children, bg, handleLogOut }) => {
  return (
    <Stack>
      <Center h="100vh" bgImage={bg} bgPosition="center" bgRepeat="no-repeat">
        <Button
          position="absolute"
          top="2rem"
          right="2rem"
          onClick={handleLogOut}
          colorScheme="blue"
        >
          Log Out
        </Button>
        <Box
          shadow="lg"
          bg="white"
          w="25rem"
          h="36rem"
          mx={["1.2rem", "2rem"]}
          maxW="100%"
          borderRadius="1rem"
          position="relative"
          overflowY="hidden"
        >
          {children}
        </Box>
      </Center>
    </Stack>
  );
};

export default memo(WrapperTodo);
