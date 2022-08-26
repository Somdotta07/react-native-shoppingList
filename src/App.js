import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";
import { v4 } from "uuid";

const App = () => {
  const [items, setItems] = useState([
    {
      id: v4(),
      text: "Egg"
    },
    {
      id: v4(),
      text: "Biscuit"
    },
    {
      id: v4(),
      text: "Wine"
    },
    {
      id: v4(),
      text: "Peaches"
    }
  ]);

  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "Please add an item", { text: "OK" });
    } else {
      setItems((prevItems) => {
        return [{ id: v4(), text }, ...prevItems];
      });
    }
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
