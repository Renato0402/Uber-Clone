import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import tw from "tailwind-react-native-classnames";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior= {(Platform.OS === 'ios')? "padding" : "height"}
            style={tw`flex-1`}
            keyboardVerticalOffset={Platform.select({ios: -64, android: 0})}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
