import React, { useState } from "react";
import {
  Icon,
  HStack,
  Box,
  View,
  Container,
  ScrollView,
  Button,
  Text,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import {
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import AddNote from "../Components/AddNote";
import ChangeNote from "../Components/ChangeNote";
import Note from "../Components/Note";

const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const handleAddNote = () => {
    setShowModal(true);
  };

  const handleChangeNote = () => {
    setShowModal2(true);
  };

  const [note, setNote] = useState();
  const [noteItems, setNoteItems] = useState([]);

  const handleAddNoteOnScreen = (text) => {
    setNoteItems([...noteItems, text]);
    setNote(null);
  };

  const changeText = () => {
    noteItems[0] = "mario";
    let itemsCopy = [...noteItems];
    setNoteItems(itemsCopy);
  };

  return (
    <ScrollView bg="primary3.500" flex={1}>
      <Box flex={1} alignItems="center">
        <TouchableOpacity onPress={() => handleAddNote()}>
          <Icon
            as={AntDesign}
            name="addfile"
            size="60px"
            color="primary1.500"
            margin={10}
          />
        </TouchableOpacity>

        <Box
          alignItems="center"
          flexDirection={"row"}
          flexWrap="wrap"
          justifyContent={"center"}
        >
          {noteItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => handleChangeNote()}>
                <Note text={item} />
              </TouchableOpacity>
            );
          })}
        </Box>

        <TouchableWithoutFeedback>
          <AddNote
            AddNote={handleAddNoteOnScreen}
            show={showModal}
            onClose={() => {
              setShowModal(false);
            }}
          />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <ChangeNote
            show={showModal2}
            onClose={() => {
              setShowModal2(false);
            }}
            notesText={"Lorem ipsum"}
          />
        </TouchableWithoutFeedback>
      </Box>
      <Button onPress={() => changeText()}>Write text</Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
