import { Center, Stack, Box } from "@chakra-ui/react";
import {memo} from 'react';

const WrapForm = ({children, bg}) => {
  return (
    <Stack>
      <Center h="100vh" bg={bg} bgPosition="center" bgRepeat="no-repeat">
        <Box shadow="lg" bg="white" w="23rem" p={["1.5rem","2rem"]} mx={["1.2rem","2rem"]} maxW="100%" borderRadius="1rem">
          {children}
        </Box>
      </Center>
    </Stack>
  )
}

export default memo(WrapForm);