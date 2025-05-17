import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const cars = [
  { id: "1", name: "Toyota Supra MK4 (1994) – Brian O'Conner", image: require("../../assets/images/supra.jpg") },
  { id: "2", name: "Mazda RX-7 (Dominic Toretto)", image: require("../../assets/images/rx7.jpg") },
  { id: "3", name: "Dodge Charger R/T (1970) – Dominic Toretto", image: require("../../assets/images/dodge.jpg") },
  { id: "4", name: "Mitsubishi Eclipse (1995) – Brian O'Conner", image: require("../../assets/images/1995_Mitsubishi_Eclipse.jpg") },
  { id: "5", name: "Nissan Skyline GT-R R34 (1999) – Brian O'Conner", image: require("../../assets/images/skyline.jpg") },
  { id: "6", name: "Honda S2000 (2000) – Suki", image: require("../../assets/images/PinkHondas2000.jpg") },
  { id: "7", name: "Mazda RX-7 (Han)", image: require("../../assets/images/rx7han.jpg") }
];

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { alignItems: "center", marginBottom: 20 },
  image: { width: 700, height: 400, borderRadius: 70 },
  name: { fontSize: 18, fontWeight: "bold" },
});

export default ListScreen;
