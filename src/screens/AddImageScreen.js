import React from "react";
import {
  View,
  Text,
  ImageEditor,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground
} from "react-native";
import { ImagePicker } from "expo";
import { AntDesign } from "react-native-vector-icons";
import { Permissions } from "expo";

export default class AddImageScreen extends React.Component {
  // state = {
  //   image: null
  // };
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }

  async componentDidMount() {
    const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (permission.status !== "granted") {
      const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (newPermission.status === "granted") {
        //its granted.
      }
    } else {
      alert("No camera");
    }
  }

  static navigationOptions = {
    title: "ADD IMAGE",
    headerStyle: {
      backgroundColor: "#d96bff"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "white"
    }
  };
  handleChoosePhoto = async () => {
    const { navigation } = this.props;
    const useImage = navigation.state.params.useImage;
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
    if (result.cancelled) {
      console.log("got here");
      return;
    }
    let resizedUri = await new Promise((resolve, reject) => {
      ImageEditor.cropImage(
        result.uri,
        {
          offset: { x: 0, y: 0 },
          size: { width: result.width, height: result.height },
          displaySize: { width: 50, height: 50 },
          resizeMode: "contain"
        },
        uri => resolve(uri),
        () => reject()
      );
    });
    this.setState({ image: resizedUri });
    useImage(resizedUri); //get du lieu qua page Image chinh
  };
  render() {
    let { image } = this.state;

    return (
      <ImageBackground
        source={require("../assets/addImage.jpg")}
        imageStyle={{ opacity: 0.3 }}
        style={styles.container}
      >
        <View>
          <View style={styles.content}>
            <TouchableOpacity
              style={styles.btnChoose}
              onPress={this.handleChoosePhoto}
            >
              <Text style={styles.textBtn}>Choose Picker Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnSave}
              onPress={() =>
                this.props.navigation.navigate("Image", {
                  uri: this.state.image
                })
              }
            >
              <Text style={styles.textBtn}>SAVE</Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {image && <Image source={{ uri: image }} style={styles.img} />}
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: "contain"
  },
  content: {
    flexDirection: "row",
    alignItems: "center"
  },
  btnChoose: {
    padding: 10,
    margin: 10,
    backgroundColor: "#6fb6ed",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#5b68f7",
    borderRadius: 5
  },
  btnSave: {
    padding: 10,
    margin: 10,
    backgroundColor: "#57cc59",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#53c65d",
    borderRadius: 5
  },
  textBtn: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  }
});
