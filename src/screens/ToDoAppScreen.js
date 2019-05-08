import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Icon, AntDesign } from "react-native-vector-icons";
import ToDoList from "../component/ToDoList";
class ToDoAppScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let headerTitle = "TODO";
    let headerStyle = { backgroundColor: "#d96bff" };
    let headerTitleStyle = {
      fontWeight: "bold",
      color: "white"
    };
    if (params === null) {
      alert("Params null!!");
    } else {
      var headerRight = (
        <AntDesign
          name="plus"
          size={40}
          color="white"
          style={{ justifyContent: "flex-start" }}
          //su dung navigate de truyen image thong qua navigation
          onPress={() => {
            params.onAdd();
          }}
        />
      );
    }
    return { headerTitle, headerStyle, headerTitleStyle, headerRight };
  };
  _onAdd() {
    this.props.navigation.navigate("AddToDo");
  }
  componentDidMount() {
    this.props.navigation.setParams({ onAdd: this._onAdd.bind(this) });
  }
  render() {
    return (
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={Keyboard.dismiss}
        accessible={false}
      >
        <View style={styles.container}>
          <ToDoList />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column" },
  root: {
    flexDirection: "row",
    justifyContent: "center"
  }
});
export default ToDoAppScreen;
