import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";
import { stopLocationUpdatesAsync } from "expo-location";
import { AntDesign } from "@expo/vector-icons";
class ToDoList extends React.Component {
  render() {
    const { todos, toggleTodo } = this.props;
    return (
      <View style={styles.container}>
        {/* {todos.map(todo => (
          <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
            <AntDesign name={nameIcon} size={32} color="black" />
            <Text
              style={{
                fontSize: 24,
                paddingBottom: 20,
                color: "#d96bff",
                paddingLeft: 10,
                textDecorationLine: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
            </Text>
          </TouchableOpacity>
        ))} */}
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.content}
              onPress={() => toggleTodo(item.id)}
            >
              <AntDesign
                name="checkcircle"
                size={32}
                color={item.status ? "red" : "#d96bff"}
              />
              <Text
                style={{
                  fontSize: 24,
                  paddingBottom: 20,
                  color: "#d96bff",
                  paddingLeft: 20,
                  textDecorationLine: item.status ? "line-through" : "none"
                }}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todos
});
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#d96bff"
  },
  content: {
    flexDirection: "row"
  }
});
