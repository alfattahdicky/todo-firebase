import { Center, Stack, Box } from "@chakra-ui/react";

const WrapperTodo = ({children, bg}) => {
  return (
    <Stack>
      <Center h="100vh" bgImage={bg} bgPosition="center" bgRepeat="no-repeat">
        <Box shadow="lg" bg="white" w="25rem" h="36rem" mx={["1.2rem","2rem"]} maxW="100%" borderRadius="1rem" position="relative">
          {children}
        </Box>
      </Center>
    </Stack>
  )
}

export default WrapperTodo;