import "react-native-gesture-handler";
import React, { useState, Component } from "react";
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

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../src/image/background_login.png")}
        style={[styles.background, styles.container]}
      >
        <Image
          source={require("../../../src/image/logo.png")}
          style={styles.logo}
        />

        <Text style={styles.subtitle}>Denúncia</Text>
        <Text style={styles.subtitle}>de</Text>
        <Text style={styles.subtitle}>Aglomerações</Text>

        <View style={styles.loginFieldsContainer}>
          <TextInput
            style={[styles.input, {marginTop: 25}]}
            placeholder="Login"
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Home", { email: email });
            }}
          >
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#800000ff", marginBottom: 25 }]}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={styles.buttonText}>Não possui conta? Criar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default LoginScreen;
