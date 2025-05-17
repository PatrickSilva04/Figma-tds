import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import axios from "axios";

type Character = {
  id: number;
  name: string;
  image: string;
};

const ExploreScreen = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    axios
      .get<{ results: Character[] }>("https://rickandmortyapi.com/api/character")
      .then((response) => setCharacters(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
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
  image: { width: 700, height: 400, borderRadius: 50 },
  name: { fontSize: 18, fontWeight: "bold" },
});

export default ExploreScreen;
