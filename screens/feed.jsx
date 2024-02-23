import { useNavigation } from "@react-navigation/native";
import { Image, Text } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, View, SectionList, ScrollView, Modal } from "react-native";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const feed = () => {
    const [modalVisible, setModalVisible] = useState(false);
  const [imagenActual, setImagenActual] = useState('');
  const feed = [
    {
      imagen: require("../assets/foto1.jpg"),
      descripcion: "Soy rica y famosa y tuve de esposo a dios",
      likes: "100",
      usuario: "Kim kardhasian",
      imgperfil: require("../assets/foto2.jpg"),
    },
    {
        imagen: require("../assets/foto2.jpg"),
        descripcion: "Tengo mucho dinero",
        likes: "5000",
        usuario: "MrBeast",
        imgperfil: require("../assets/foto2.jpg"),
    },
    {
        imagen: require("../assets/foto3.jpg"),
        descripcion: "Soy belico y peligroso",
        likes: "800",
        usuario: "Peso Pluma",
        imgperfil: require("../assets/foto2.jpg"),
    },
    {
        imagen: require("../assets/foto4.jpg"),
        descripcion: "Bad bunny tienes 10 horas padarme tu buggati",
        likes: "900",
        usuario: "Bad bunny",
        imgperfil: require("../assets/foto2.jpg"),
    },
  ];

  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require("../assets/Header.jpg")}
          style={styles.Header}
          resizeMode="contain"
        />
        <View style={{ flexDirection: "row", paddingBottom: 20 }}>
          <View style={{ alignItems: "center", marginRight: 5, padding: 10 }}>
            <Image
              style={styles.imagenf}
              source={require("../assets/foto3.jpg")}
            />
            <Text>Juanito</Text>
          </View>
          <ScrollView
            horizontal={true}
            style={{ padding: 10, paddingBottom: 10, backgroundColor: "white" }}
          >
            <View style={{ alignItems: "center", marginRight: 10 }}>
            <TouchableOpacity onPress={() => {require('../assets/foto7.jpg'); setModalVisible(true); }}>
              <Image
                style={styles.imagenf}
                source={require("../assets/foto7.jpg")}
              />
              <Text>Julian</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", marginRight: 10 }}>
            <TouchableOpacity onPress={() => {require('../assets/foto7.jpg'); setModalVisible(true); }}>
              <Image
                style={styles.imagenf}
                source={require("../assets/foto7.jpg")}
              />
              <Text>Julian</Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", marginRight: 10 }}>
              <Image
                style={styles.imagenf}
                source={require("../assets/foto7.jpg")}
              />
              <Text>Julian</Text>
            </View>
            <View style={{ alignItems: "center", marginRight: 10 }}>
              <Image
                style={styles.imagenf}
                source={require("../assets/foto7.jpg")}
              />
              <Text>Julian</Text>
            </View>
            <View style={{ alignItems: "center", marginRight: 10 }}>
              <Image
                style={styles.imagenf}
                source={require("../assets/foto7.jpg")}
              />
              <Text>Julian</Text>
            </View>
            <View style={{ alignItems: "center", marginRight: 10 }}>
              <Image
                style={styles.imagenf}
                source={require("../assets/foto7.jpg")}
              />
              <Text>Julian</Text>
            </View>
            <View style={{ alignItems: "center", marginRight: 10 }}>
              <Image
                style={styles.imagenf}
                source={require("../assets/foto7.jpg")}
              />
              <Text>Julian</Text>
            </View>
            <View style={{ alignItems: "center", marginRight: 10 }}>
              <Image
                style={styles.imagenf}
                source={require("../assets/foto7.jpg")}
              />
              <Text>Julian</Text>
            </View>
          </ScrollView>
          <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Image source={require('../assets/foto7.jpg')} style={styles.imagenGrande} />
                  <TouchableOpacity
                    style={styles.buttonClose}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Cerrar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          
        </View>
        <SectionList
          sections={[{ title: "feed", data: feed }]}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.cardPost}>
              <TouchableOpacity onPress={() => goToUser(item)}>
                <View style={styles.userInfo}>
                  <Image source={item.imgperfil} style={styles.profilePhoto} />
                  <Text style={styles.username}>{item.usuario}</Text>
                </View>
              </TouchableOpacity>
              <Image source={item.imagen} style={styles.postImage} />

              <View style={styles.like}>
                <Text style={styles.description}>Me gusta: {likes}</Text>
                <TouchableOpacity onPress={handleLikeClick}>
                  <FontAwesome5
                    name="heart"
                    size={25}
                    color={likes === 1 ? "red" : "black"}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <Text style={styles.description}>{item.descripcion}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <StatusBar barStyle={"light-content"} backgroundColor="#089779" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  cardPost: {
    marginTop: 60,
    flex: 1,
    width: 360,
    height: "auto",
    margin: 10,
    backgroundColor: "white",
  },
  username: {
    justifyContent: "center",
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
  },
  postImage: {
    width: "auto",
    height: 400,
    alignSelf: "center",
  },
  description: {
    color: "black",
    padding: 10,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  like: {
    margin: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  Header: {
    width: 420,
    height: 100,
    marginTop: 10,
  },
  imagenf: {
    height: 90,
    width: 90,
    borderRadius: 50,
  },
  imagenGrande: {
    width: 200,
    height: 200,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default feed;
