import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/icon.png")} style={styles.logo} />
      <Text style={styles.title}>The Rick and Morty API</Text>
      <Text style={styles.description}>
        Acesse informações sobre personagens e locais da série!
      </Text>
      <Button title="Ver Personagens" onPress={() => navigation.navigate("explore")} />
      <Button title="Ver Carros" onPress={() => navigation.navigate("list")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  logo: { width: 100, height: 100, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
  description: { fontSize: 16, textAlign: "center", marginVertical: 10 },
});

export default HomeScreen;
