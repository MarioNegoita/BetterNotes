import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  KeyboardAvoidingView,
  StatusBar,
  Flex,
  Divider,
  Icon,
  HStack,
} from "native-base";
import {
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [titleColor, setTitleColor] = useState(0);

  const colors = ["#ECECEC", "#bef264", "#4f46e5", "#6ee7b7", "#0891b2"];

  const switchTitleColor = () => {
    const newColorIndex = titleColor + 1;
    colors[newColorIndex] ? setTitleColor(newColorIndex) : setTitleColor(0);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Center flex={1} backgroundColor="primary1.500">
        <StatusBar backgroundColor={"black"} barStyle={"dark-light"} />

        <TouchableOpacity
          style={Styles.titleStyle}
          onPress={() => switchTitleColor()}
        >
          <Text
            style={{
              fontSize: 30,
              fontFamily: "monospace",
              color: colors[titleColor],
            }}
          >
            BETTER NOTES
          </Text>
        </TouchableOpacity>
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
          flexDirection={"row"}
        >
          <TextInput
            placeholder="Email"
            style={Styles.inputTextStyle}
            placeholderTextColor={`${isFocusedEmail ? "black" : "#8e8e8e"}`}
            flex={1}
          />
          <Icon
            as={Ionicons}
            name="mail-outline"
            style={[
              isFocusedEmail ? Styles.inputFocusedIcon : Styles.inputBluredIcon,
            ]}
            size={"25px"}
            marginRight={5}
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
          flexDirection={"row"}
        >
          <TextInput
            placeholder="Password"
            style={Styles.inputTextStyle}
            placeholderTextColor={`${isFocusedPassword ? "black" : "#8e8e8e"}`}
            secureTextEntry={true}
            flex={1}
          />
          <Icon
            as={Ionicons}
            name="eye-off-outline"
            style={[
              isFocusedPassword
                ? Styles.inputFocusedIcon
                : Styles.inputBluredIcon,
            ]}
            size={"25px"}
            marginRight={5}
          />
        </Box>

        <Button
          color={"primary3.500"}
          borderRadius="10"
          bg={"primary3.500"}
          _pressed={{ bg: "primary3.600" }}
          width={"30%"}
          top={"15%"}
          onPress={() => navigation.navigate("Home")}

          // position="absolute"
        >
          <HStack>
            <Icon
              as={Ionicons}
              name="log-in-outline"
              size={"25px"}
              marginRight={2}
            />
            <Box justifyContent="center">Login</Box>
          </HStack>
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
    fontFamily: "monospace",
    color: "#ECECEC",
  },
  titleStyle: {
    bottom: "15%",
  },

  form: {
    width: "70%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
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

  inputFocusedIcon: {
    color: "black",
  },
  inputBluredIcon: {
    color: "#DE6F6F",
  },
});

export default LoginScreen;
