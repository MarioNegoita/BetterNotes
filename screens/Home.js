import React, { useState } from "react";
import { Icon, HStack, Box, View, Container } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import {
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import AddNote from "../Components/AddNote";
import Note from "../Components/Note";

const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const handleAddNote = () => {
    setShowModal(true);
  };

  const [note, setNote] = useState();
  const [noteItems, setNoteItems] = useState([]);

  const handleAddNoteOnScreen = (text) => {
    console.log(text);
    setNoteItems([...noteItems, text]);
    setNote(null);
  };

  return (
    <Box flex={1} bg={"primary3.500"}>
      <HStack space={10} margin={15} justifyContent="center">
        <TouchableOpacity onPress={() => handleAddNote()}>
          <Icon
            as={AntDesign}
            name="addfile"
            size="60px"
            color="primary1.500"
            marginTop={10}
          />
        </TouchableOpacity>
        {noteItems.map((item, index) => {
          return <Note key={index} text={item} />;
        })}
      </HStack>
      <TouchableWithoutFeedback>
        <AddNote
          AddNote={handleAddNoteOnScreen}
          show={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        />
      </TouchableWithoutFeedback>
    </Box>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
