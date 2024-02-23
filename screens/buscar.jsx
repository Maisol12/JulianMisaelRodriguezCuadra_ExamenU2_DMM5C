import React from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const buscar = () => {
  return (
    <View>
      <View style={styles.container}>
        <FontAwesome name="search" style={styles.icon} />
        <TextInput
          placeholder="Buscar"
          style={styles.input}
          placeholderTextColor="#8e8e93"
        />
      </View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dcdbdb",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 60,
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
    color: "#8e8e93",
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#000",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 800, 
    height: 850,
  },
});

export default buscar;
