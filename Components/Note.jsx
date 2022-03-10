import { Box, ScrollView, TextArea } from "native-base";
import React from "react";

const Note = () => {
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </TextArea>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default Note;
