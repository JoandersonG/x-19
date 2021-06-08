import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import styles from "./styles";

const MapaAglomeracaoScreen = ({ navigation }) => {
  const email = navigation.getParam("email");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../src/image/maps_example2.png")}
        style={[styles.background, styles.container]}
      >
        <View style={styles.topbar}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.navigate("Denunciar Aglomeração");
            }}
          >
            <Text style={styles.backButtonText}>{"<"}</Text>
          </TouchableOpacity>
          <Text style={styles.topbarText}>Mapa de Aglomeração</Text>
        </View>
        <View style={styles.dadosView}>
          <Text style={styles.exclamation}>!</Text>
          <Text style={styles.text}>
            12 casos de aglomeração registrados próximo à sua localidade
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
export default MapaAglomeracaoScreen;
