import React, { useState } from "react";
import { Modal, Text, TextArea, Icon, Container, HStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const AddNote = ({
  show = false,
  addNote = (text) => {},
  onClose = () => {},
}) => {
  const [noteText, setNoteText] = useState("");

  const handleSaveNote = () => {
    addNote(noteText);
    setNoteText("");
    onClose();
  };

  return (
    <Modal
      isOpen={show}
      onClose={() => {
        onClose();
      }}
    >
      <Modal.Content width="350px" height="500px" flex={1}>
        <Modal.Header backgroundColor="primary1.500">
          <Modal.CloseButton marginTop={2} />
          <TextArea
            color="white"
            fontSize={19}
            maxHeight={10}
            maxWidth={"80%"}
            borderWidth={0}
          >
            Pick a title and write a note
          </TextArea>
        </Modal.Header>
        <TextArea
          w={"100%"}
          h={"75%"}
          fontSize={25}
          borderColor={"primary3.500"}
          borderWidth={0}
          value={noteText}
          onChangeText={(text) => {
            setNoteText(text);
          }}
        ></TextArea>
        <HStack space={"65%"} justifyContent={"center"}>
          <TouchableOpacity
            onPress={() => {
              onClose();
              setNoteText("");
            }}
          >
            <Icon
              as={AntDesign}
              name="delete"
              size="50px"
              color="primary1.500"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSaveNote()}>
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
  );
};

export default AddNote;
