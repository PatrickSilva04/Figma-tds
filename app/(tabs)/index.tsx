import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  explore: undefined;
  list: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/react-logo.png")} style={styles.logo} />
      <Text style={styles.title}>The Rick and Morty API & Veloses e Furiosos</Text>
      <Text style={styles.description}>
        Explore personagens e veículos icônicos!
      </Text>
      <Button title="Ver Personagens" onPress={() => navigation.navigate("explore")} />
      <Button title="Ver Carros" onPress={() => navigation.navigate("list")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  logo: { width: 100, height: 100, marginBottom: 20 },
  title: { fontSize: 18, fontWeight: "bold" },
  description: { fontSize: 20, textAlign: "center", marginVertical: 10 },
});

export default HomeScreen;
