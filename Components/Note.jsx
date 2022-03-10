import React from "react";
import {
  Modal,
  Text,
  TextArea,
  Icon,
  Box,
  Container,
  HStack,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const Note = ({ show = false, onClose = () => {} }) => {
  return (
    <Modal
      isOpen={show}
      onClose={() => {
        onClose();
      }}
    >
      <Modal.Content width="350px" height="500px" flex={1}>
        <Modal.Header backgroundColor="primary1.500">
          <Modal.CloseButton marginTop={1} />
          <Text color="white" fontSize={19}>
            Write a note
          </Text>
        </Modal.Header>
        <TextArea
          w={"100%"}
          h={"75%"}
          fontSize={25}
          borderColor={"primary3.500"}
          borderWidth={0}
        ></TextArea>

        <HStack space={"65%"} justifyContent={"center"}>
          <Container>
            <TouchableOpacity>
              <Icon
                as={AntDesign}
                name="delete"
                size="50px"
                color="primary1.500"
              />
            </TouchableOpacity>
          </Container>
          <Container>
            <TouchableOpacity>
              <Icon
                as={AntDesign}
                name="checkcircle"
                size="50px"
                color="primary1.500"
              />
            </TouchableOpacity>
          </Container>
        </HStack>
      </Modal.Content>
    </Modal>
  );
};

export default Note;
