import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { Icon, AntDesign } from "react-native-vector-icons";
import ToDoApp from "../component/ToDoApp";
class ToDoAppScreen extends React.Component {
  static navigationOptions = {
    title: "TODO LIST",
    headerStyle: {
      backgroundColor: "#f4511e"
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
        <View style={styles.root}>
          <Text style={styles.header}>TODO LIST</Text>
          <AntDesign
            name="plus"
            size={40}
            color="black"
            style={{ justifyContent: "flex-end" }}
            onPress={() => this.props.navigation.navigate("AddToDo")}
          />
        </View>
        <View>
          <ToDoApp />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column" },
  root: {
    flexDirection: "row",
    justifyContent: "center"
  },
  header: {
    flex: 1,
    textAlign: "center",
    fontSize: 30
  }
});
export default ToDoAppScreen;
