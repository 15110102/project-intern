import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView
} from "react-native";
class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentText: "",
      result: null
    };
  }
  onAdd = () => {
    
  };
  render() {
      const {contentText} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.border}>
          <TextInput
            style={styles.input}
            placeholder={""}
            placeholderTextColor="#000000"
            onChangeText={(contentText) => this.setState({ contentText })}
            value={contentText}
          />
        </View>
        <TouchableOpacity style={styles.btnAdd} onPress={this.onAdd}>
          <Text>ADD</Text>
        </TouchableOpacity>
        <Text>{this.props.result}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  border: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5
  },
  input: {
    width: 300,
    height: 50,
    borderStyle: "solid",
    fontSize: 20,
    paddingLeft: 40,
    backgroundColor: "#ffffff"
  },
  btnAdd: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009cff",
    width: 300,
    height: 30
  }
});
export default AddToDo;
