import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  index: undefined;
  // add other routes here if needed
};

const NotFoundScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>404 - Página não encontrada</Text>
      <Button title="Voltar para Home" onPress={() => navigation.navigate("index")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  errorText: { fontSize: 24, fontWeight: "bold", color: "red" },
});

export default NotFoundScreen;
