import { Box, ScrollView, Text } from "native-base";
import React from "react";

const Note = (props) => {
  return (
    <Box
      margin={15}
      backgroundColor={"primary1.500"}
      width={"150px"}
      height={"180px"}
      borderRadius={40}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box h={"155px"} w={"100px"} borderRadius={40}>
        <Text fontSize={18} borderWidth={0}>
          {props.text}
        </Text>
      </Box>
    </Box>
  );
};

export default Note;
