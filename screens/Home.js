import React, { useCallback, useState } from "react";
import { Icon, Box, ScrollView, Button } from "native-base";
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
  const [showModal2, setShowModal2] = useState(false);

  const [note, setNote] = useState();
  const [noteItems, setNoteItems] = useState([]);
  const [indexNr, setIndexNr] = useState(0);

  const handleAddNote = () => {
    setShowModal(true);
  };

  const handleChangeNote = (nr) => {
    setShowModal2(true);
    console.log("INDEX:", nr);
    setIndexNr(nr);
  };

  const handleUpdateNote = (updateText, nr) => {
    noteItems[nr] = updateText;
    let itemsCopy = [...noteItems];
    setNoteItems(itemsCopy);
  };

  const handleAddNoteOnScreen = (text) => {
    setNoteItems([...noteItems, text]);
    setNote(null);
  };

  return (
    <ScrollView flex={1}>
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
              <TouchableOpacity
                key={index}
                onPress={() => handleChangeNote(index)}
              >
                <Note
                  upDateText={(text, index) => handleUpdateNote(text, index)}
                  NoteText={item}
                  liveNoteText={noteItems[indexNr]}
                  nr={indexNr}
                  show={showModal2}
                  onClose={() => {
                    setShowModal2(false);
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </Box>
        <TouchableWithoutFeedback>
          <AddNote
            addNote={(text) => {
              handleAddNoteOnScreen(text);
            }}
            show={showModal}
            onClose={() => {
              setShowModal(false);
            }}
          />
        </TouchableWithoutFeedback>
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
