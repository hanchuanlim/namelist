import { StatusBar } from "expo-status-bar";
import { Text, ScrollView, FlatList } from "react-native";
import { names } from "./data/names";
import { styles } from "./styles/stylesheet";

const namesAsObjects = names.map((item) => {
  return { name: item };
});

export default function App() {
  const renderName = ({ item }) => {
    return <Text style={styles.text}>{item.name}</Text>;
  };

  return (
    <FlatList
      data={namesAsObjects}
      renderItem={renderName}
      keyExtractor={(item) => item.name}
    />
  );
}
