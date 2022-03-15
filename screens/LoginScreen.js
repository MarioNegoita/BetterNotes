import React, { useState } from "react";
import { Box, Center, StatusBar } from "native-base";
import {
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";

const LoginScreen = () => {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Center flex={1} backgroundColor="primary1.500">
        <StatusBar backgroundColor={"black"} barStyle={"dark-light"} />
        <Box style={Styles.titleStyle}>
          <Text style={Styles.title}>BETTER NOTES</Text>
        </Box>
        <Box
          onFocus={() => {
            setIsFocusedEmail(true);
          }}
          onBlur={() => {
            setIsFocusedEmail(false);
          }}
          style={Styles.form}
          backgroundColor="primary3.500"
        >
          <TextInput
            placeholder="Email"
            style={Styles.inputTextStyle}
            placeholderTextColor={`${isFocusedEmail ? "black" : "#8e8e8e"}`}
          />
        </Box>

        <Box
          onFocus={() => {
            setIsFocusedPassword(true);
          }}
          onBlur={() => {
            setIsFocusedPassword(false);
          }}
          style={Styles.form}
          marginTop={15}
          backgroundColor="primary3.500"
        >
          <TextInput
            placeholder="Password"
            style={Styles.inputTextStyle}
            placeholderTextColor={`${isFocusedPassword ? "black" : "#8e8e8e"}`}
          />
        </Box>
      </Center>
    </TouchableWithoutFeedback>
  );
};

const Styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "#ECECEC",
    fontFamily: "monospace",
  },

  form: {
    width: "70%",
    height: 60,
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 2,
  },
  inputTextStyle: {
    fontSize: 20,
    marginLeft: 5,
  },
  titleStyle: {
    position: "absolute",
    top: "25%",
  },
});

export default LoginScreen;
