import React, { useState } from "react";
import { Icon, HStack, Modal, Box, KeyboardAvoidingView } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import {
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Note from "../Components/Note";

const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const handleAddNote = () => {
    setShowModal(true);
  };

  return (
    <Box backgroundColor={"primary3.500"} flex={1}>
      <TouchableWithoutFeedback>
     
        <Note
          show={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        />
      </TouchableWithoutFeedback>
      

      <HStack space={3} margin="15">
        <TouchableOpacity onPress={() => handleAddNote()}>
          <Icon as={AntDesign} name="addfile" size="60px" color="primary1.500" />
        </TouchableOpacity>
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
