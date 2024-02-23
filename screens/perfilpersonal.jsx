import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

const perfilpersonal = () => {
  const item = {
    username: "kulian",
    description: "Ingeniero en GRINDR",
    image: require("../assets/foto4.jpg"),
  };

  const posts = 6;
  const followers = 367;
  const following = 190;

  return (
    <View style={styles.fullScreenContainer}>
      <Image
        source={require("../assets/Header.jpg")}
        style={styles.Header}
        resizeMode="contain"
      />
      <Image style={styles.profileImage} source={item.image} />
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statsBlock}>
          <Text style={styles.statsNumber}>{posts}</Text>
          <Text style={styles.statsLabel}>Publicaciones</Text>
        </View>
        <View style={styles.statsBlock}>
          <Text style={styles.statsNumber}>{followers}</Text>
          <Text style={styles.statsLabel}>Seguidores</Text>
        </View>
        <View style={styles.statsBlock}>
          <Text style={styles.statsNumber}>{following}</Text>
          <Text style={styles.statsLabel}>Seguidos</Text>
        </View>
      </View>
      <View style={{paddingBottom:150}}>
        <ScrollView
            horizontal={true}
            style={{ backgroundColor: "white" }}
            >
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
      <View style ={{paddingTop :30}}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingBottom:14}}>
                <Image style={{width:140, height:120, borderRadius: 10}} source={require('../assets/foto5.jpg')}/>
                <Image style={{width:140, height:120, borderRadius: 10}} source={require('../assets/foto5.jpg')}/>
                <Image style={{width:140, height:120, borderRadius: 10}} source={require('../assets/foto5.jpg')}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start',paddingBottom:14 }}>
                <Image style={{width:140, height:120, borderRadius: 10}} source={require('../assets/foto5.jpg')}/>
                <Image style={{width:140, height:120, borderRadius: 10}} source={require('../assets/foto5.jpg')}/>
                <Image style={{width:140, height:120, borderRadius: 10}} source={require('../assets/foto5.jpg')}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start',paddingBottom:14}}>
                <Image style={{width:140, height:120, borderRadius: 10}} source={require('../assets/foto5.jpg')}/>
                <Image style={{width:140, height:120, borderRadius: 10}} source={require('../assets/foto5.jpg')}/>
                <Image style={{width:140, height:120, borderRadius: 10}} source={require('../assets/foto5.jpg')}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start',paddingBottom:14}}>
                <Image style={{width:140, height:120, borderRadius: 10}} source={require('../assets/foto5.jpg')}/>
                <Image style={{width:140, height:120, borderRadius: 10}} source={require('../assets/foto5.jpg')}/>
                <Image style={{width:140, height:120, borderRadius: 10}} source={require('../assets/foto5.jpg')}/>
            </View>
        </View>
      </View>
    </View>
  );
};

export default perfilpersonal;

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    marginVertical: 5,
    color: "gray",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 10,
  },
  statsBlock: {
    alignItems: "center",
  },
  statsNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statsLabel: {
    fontSize: 14,
    color: "gray",
  },
  largeImage: {
    width: "45%",
    height: 200,
    margin: 30,
    borderRadius: 10,
  },
  Botones: {
    width: 420,
    height: 100,
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
});
