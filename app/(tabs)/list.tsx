import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const cars = [
  { id: "1", name: "Toyota Supra", image: require("../../assets/images/supra.jpg") },
  { id: "2", name: "Mazda RX-7 (Han)", image: require("../../assets/images/rx7.jpg") }
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
  image: { width: 100, height: 100, borderRadius: 10 },
  name: { fontSize: 18, fontWeight: "bold" },
});

export default ListScreen;
