import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import AddToDo from "../component/AddToDo";

export default class AddToDoScreen extends React.Component {
  static navigationOptions = {
    title: "ADD TODO LIST",
    headerStyle: {
      backgroundColor: "#d96bff"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "white"
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <AddToDo />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fef9ff"
  }
});
