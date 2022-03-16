import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  KeyboardAvoidingView,
  StatusBar,
  Flex,
  Divider,
} from "native-base";
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
          style={[
            Styles.form,
            isFocusedEmail ? Styles.formFocus : Styles.formBlur,
          ]}
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
          style={[
            Styles.form,
            isFocusedPassword ? Styles.formFocus : Styles.formBlur,
          ]}
          marginTop={15}
          backgroundColor="primary3.500"
        >
          <TextInput
            placeholder="Password"
            style={Styles.inputTextStyle}
            placeholderTextColor={`${isFocusedPassword ? "black" : "#8e8e8e"}`}
            secureTextEntry={true}
          />
        </Box>

        <Button
          color={"primary3.500"}
          borderRadius="10"
          bg={"primary3.500"}
          _pressed={{ bg: "primary3.600" }}
          width={"30%"}
          top={"25%"}
          // position="absolute"
        >
          <Text>Sign In</Text>
        </Button>
        <Box alignItems="center" top="30%">
          <Flex direction="row" h="58" p="4">
            <Text>Better</Text>
            <Divider
              bg="emerald.500"
              thickness="2"
              mx="2"
              orientation="vertical"
            />
            <Text>Simple</Text>
            <Divider
              bg="indigo.500"
              thickness="2"
              mx="2"
              orientation="vertical"
            />
            <Text>Easier</Text>
          </Flex>
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
  formFocus: {
    borderColor: "black",
  },
  formBlur: {
    borderColor: "#F4976C",
  },
  inputTextStyle: {
    fontSize: 20,
    marginLeft: 5,
  },
  titleStyle: {
    bottom: "15%",
  },
});

export default LoginScreen;
