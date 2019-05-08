import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import logo from "../assets/logo.png";

const userInfo = { email: "admin", password: "123456" };
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  _signin = () => {
    if (
      userInfo.email === this.state.email &&
      userInfo.password === this.state.password
    ) {
      alert("Login successed");
      this.props.navigation.navigate("Todo");
    } else {
      alert("Login Fail");
    }
  };
  render() {
    return (
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={Keyboard.dismiss}
        accessible={false}
      >
        <ImageBackground
          source={require("../assets/login1.jpg")}
          style={styles.container}
        >
          <KeyboardAvoidingView behavior="position">
            <View>
              <View style={styles.border}>
                <TextInput
                  style={styles.input}
                  placeholder={"Email"}
                  placeholderTextColor={"#000000"}
                  keyboardType={"email-address"}
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                />
              </View>
              <View style={styles.border}>
                <TextInput
                  style={styles.input}
                  placeholder={"Password"}
                  placeholderTextColor={"#000000"}
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity style={styles.btnLogin} onPress={this._signin}>
                <Text style={styles.loginText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#93aebf"
  },
  logo: {
    width: 150,
    height: 150,
    marginLeft: 70,
    color: "red"
  },
  border: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 5,
    padding: 10
  },
  input: {
    width: 300,
    height: 50,
    borderStyle: "solid",
    fontSize: 20,
    paddingLeft: 40,
    backgroundColor: "#ffffff",
    opacity: 0.8
  },
  btnLogin: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    height: 50,
    marginTop: 10,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 5
  },
  loginText: {
    fontSize: 20,
    color: "white"
  }
});
export default LoginScreen;
