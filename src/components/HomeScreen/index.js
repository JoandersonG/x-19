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

const HomeScreen = ({ navigation }) => {
  const email = navigation.getParam("email");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../src/image/maps_example.png")}
        style={[styles.background, styles.container]}
      >
        <View style={styles.topbar}>
          <Text style={styles.topbarText}>Denunciar Aglomeração</Text>
        </View>
        <View style={styles.dadosView}>
          <Text style={styles.section}>Endereço</Text>
          <TextInput
            style={styles.input}
            placeholder="Rua"
            secureTextEntry={true}
          />

          <TextInput
            style={styles.input}
            placeholder="Bairro"
            secureTextEntry={true}
          />

          <TextInput
            style={styles.input}
            placeholder="CEP"
            secureTextEntry={true}
          />

          <Text style={styles.section}>Observações</Text>

          <TextInput
            style={[styles.input, { minHeight: 100 }]}
            placeholder="Especifique maiores informações da aglomeração"
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Home", { email: email });
            }}
          >
            <Text style={styles.buttonText}>Enviar denúncia</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default HomeScreen;
