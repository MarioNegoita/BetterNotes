import { Box, ScrollView, TextArea } from "native-base";
import React from "react";

const Note = (props) => {
  return (
    <Box
      backgroundColor={"primary1.500"}
      width={"200px"}
      height={"150px"}
      borderRadius={40}
      alignItems={"center"}
    >
      <Box
        h={"150px"}
        w={"170px"}
        backgroundColor="primary1.500"
        borderRadius={40}
        justifyContent={"center"}
      >
        <ScrollView maxHeight={"118px"}>
          <TextArea fontSize={18} borderWidth={0}>
            {props.text}
          </TextArea>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default Note;
