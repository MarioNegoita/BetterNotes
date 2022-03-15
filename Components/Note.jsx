import {
  Box,
  ScrollView,
  Text,
  Modal,
  TextArea,
  HStack,
  Icon,
} from "native-base";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Note = ({
  NoteText,
  liveNoteText,
  nr,
  show = false,
  onClose = () => {},
  upDateText = (text, nr) => {},
}) => {
  const [change, setChange] = useState(liveNoteText);

  useEffect(() => {
    setChange(liveNoteText);
  }, [liveNoteText]);

  const handleUpdateText = () => {
    upDateText(change, nr);
    onClose();
  };

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
          {NoteText}
        </Text>
      </Box>
      <Modal
        isOpen={show}
        onClose={() => {
          onClose();
        }}
      >
        <Modal.Content width="350px" height="500px" flex={1}>
          <Modal.Header backgroundColor="primary1.500">
            <TextArea
              color="white"
              fontSize={19}
              maxHeight={10}
              maxWidth={"80%"}
              borderWidth={0}
            >
              Schimba textul
            </TextArea>
          </Modal.Header>
          <TextArea
            w={"100%"}
            h={"75%"}
            fontSize={25}
            borderColor={"primary3.500"}
            borderWidth={0}
            value={change}
            onChangeText={(text) => setChange(text)}
          ></TextArea>
          <HStack space={"65%"} justifyContent={"center"}>
            <TouchableOpacity
              onPress={() => {
                onClose();
              }}
            >
              <Icon
                as={AntDesign}
                name="delete"
                size="50px"
                color="primary1.500"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleUpdateText();
              }}
            >
              <Icon
                as={AntDesign}
                name="checkcircle"
                size="50px"
                color="primary1.500"
              />
            </TouchableOpacity>
          </HStack>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default Note;
