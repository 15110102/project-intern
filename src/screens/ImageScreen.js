import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  ActivityIndicator
} from "react-native";
import { AntDesign } from "react-native-vector-icons";
class ImageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: []
    };
  }
  //su dung navigate de truyen image thong qua navigation
  useImage = image => {
    this.setState(prevState => {
      return {
        image: [...prevState.image, image]
      };
    });
  };
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let headerTitle = "ADD IMAGE";
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
          color="blue"
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
    this.props.navigation.navigate("AddImage", {
      useImage: this.useImage
    });
  }
  componentDidMount() {
    this.props.navigation.setParams({ onAdd: this._onAdd.bind(this) });
  }
  render() {
    const { image } = this.state;
    const numCol = 3;
    return (
      <ImageBackground
        source={require("../assets/image1.jpg")}
        imageStyle={{ opacity: 0.6 }}
        style={styles.container}
      >
        <View>
          {/* <View style={styles.contentPlus}>
            <AntDesign
              name="plus"
              size={40}
              color="blue"
              style={{ justifyContent: "flex-start" }}
              //su dung navigate de truyen image thong qua navigation
              onPress={() =>
                this.props.navigation.navigate("AddImage", {
                  useImage: this.useImage
                })
              }
            />
            <Text style={styles.header}>Add Image</Text>
          </View> */}
          {/* <Image source={{ uri: image }} style={styles.img} /> */}
          <View style={styles.flatListImage}>
            <FlatList
              data={image}
              numColumns={numCol}
              renderItem={({ item }) => (
                <Image source={{ uri: item }} style={styles.img} />
              )}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  header: {
    flex: 1,
    textAlign: "center",
    fontSize: 30,
    color: "#182696"
  },
  contentPlus: {
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 10,
    marginRight: 90,
    marginBottom: 50,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 5
  },
  img: {
    width: 100,
    height: 100,
    alignItems: "center",
    resizeMode: "contain",
    margin: 10
  },
  flatListImage: {
    justifyContent: "center",
    alignItems: "center"
  }
});
export default ImageScreen;
