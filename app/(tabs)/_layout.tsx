import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CharactersScreen from "./screens/CharactersScreen";
import CarsScreen from "./screens/CarsScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Characters" component={CharactersScreen} />
        <Stack.Screen name="Cars" component={CarsScreen} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
