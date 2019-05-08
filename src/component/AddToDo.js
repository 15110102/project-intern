import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { addTodo } from "../actions";
import { connect } from "react-redux";
class AddToDo extends React.Component {
  state = {
    text: ""
  };
  onAdd = () => {
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    const { text } = this.state;

    return (
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={Keyboard.dismiss}
        accessible={false}
      >
        <View style={styles.container}>
          <View style={styles.border}>
            <TextInput
              style={styles.input}
              placeholder={""}
              placeholderTextColor="#000000"
              onChangeText={text => this.setState({ text })}
              value={text}
            />
          </View>
          <TouchableOpacity style={styles.btnAdd} onPress={this.onAdd}>
            <Text style={{ color: "white" }}>ADD TO LIST</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fef9ff"
  },
  border: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#d96bff",
    borderRadius: 5
  },
  input: {
    width: 300,
    height: 50,
    borderStyle: "solid",
    fontSize: 20,
    paddingLeft: 40,
    color: "#d96bff",
    backgroundColor: "#ffffff"
  },
  btnAdd: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d96bff",
    width: 300,
    height: 30
  }
});
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text, false))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToDo);
