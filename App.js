import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/LoginScreen";
import theme from "./config/colors";
import { NativeBaseProvider, StatusBar } from "native-base";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "BetterNotes",
              headerStyle: {
                backgroundColor: "#F4976C",
              },
              headerTitleAlign: "center",
              headerTintColor: "#fff",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
