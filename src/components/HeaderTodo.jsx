import { useEffect, useState, memo } from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import dayjs from "dayjs";
import localization from "dayjs/plugin/localizedFormat";

const HeaderTodo = ({ email }) => {
  dayjs.extend(localization);
  const [date, setDate] = useState(dayjs().format("ll"));
  const [time, setTime] = useState(dayjs().format("LT"));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs().format("ll"));
      setTime(dayjs().format("LT"));
    }, dayjs().second() * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dayjs]);

  return (
    <Flex
      bg="#1C538E"
      w="100%"
      h="15%"
      py="1rem"
      px="2rem"
      borderTopRadius="0.9rem"
      color="white"
    >
      <Flex justify="space-between" align="center" w="100%">
        <Box>
          <Text fontWeight="medium">{email}</Text>
          <Text as="h2" mt="-0.3rem" fontWeight="bold" fontSize="1.6rem">
            {date}
          </Text>
        </Box>
        <Box>
          <Text as="h3" fontWeight="500">
            {time}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default memo(HeaderTodo);
