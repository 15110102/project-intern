import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import ImageScreen from "../screens/ImageScreen";
import ToDoAppScreen from "../screens/ToDoAppScreen";
import AddToDoScreen from "../screens/AddToDoScreen";
import AddImageScreen from "../screens/AddImageScreen";
import AddToDoComponent from "../component/AddToDo";
import { AntDesign, Entypo } from "react-native-vector-icons";
const TodoStack = createStackNavigator(
  {
    Todo: { screen: ToDoAppScreen },
    AddToDo: { screen: AddToDoScreen, AddToDoComponent }
  },
  {
    initialRouteName: "Todo"
  }
);

const ImageStack = createStackNavigator(
  {
    Image: { screen: ImageScreen },
    AddImage: { screen: AddImageScreen }
  },
  {
    initialRouteName: "Image"
  }
);

const AppNavigator = createBottomTabNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        tabBarIcon: <AntDesign name="login" size={22} color="#9608a0" />
      }
    },
    Image: {
      screen: ImageStack,
      navigationOptions: {
        tabBarIcon: <Entypo name="image" size={22} color="#9608a0" />
      }
    },
    Todo: {
      screen: TodoStack,
      navigationOptions: {
        tabBarIcon: <Entypo name="list" size={22} color="#9608a0" />
      }
    }
  },
  {
    initialRouteName: "Login"
  }
);
export default createAppContainer(AppNavigator);
