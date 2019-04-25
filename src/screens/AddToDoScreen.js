import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import AddToDo from "../component/AddToDo";
export default class AddToDoScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        <View style={styles.root}>
        <AntDesign
            name="close"
            size={40}
            color="black"
            style={{ justifyContent: "flex-start" }}
            onPress={() => this.props.navigation.navigate("Todo")}
          />
          <Text style={styles.header}>Add Todo</Text>
        </View>
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
    justifyContent: "flex-start"
  },
  root: {
    flexDirection: "row",
    justifyContent: "center"
  },
  header: {
    flex: 1,
    fontSize: 30,
    textAlign: "center"
  }
});
