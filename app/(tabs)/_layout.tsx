import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./index";
import ExploreScreen from "./explore";
import ListScreen from "./list";


const Stack = createNativeStackNavigator();

const Layout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="index" component={HomeScreen} />
      <Stack.Screen name="explore" component={ExploreScreen} />
      <Stack.Screen name="list" component={ListScreen} />
      {/* <Stack.Screen name="not-found" component={NotFoundScreen} /> */}
    </Stack.Navigator>
  );
};

export default Layout;
