import "react-native-gesture-handler";
import React, { Component } from "react";
import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import styles from "./styles";

const MapaAglomeracaoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.navigate('Denunciar Aglomeração');
        }}
      >
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
        <Text style={styles.topbarText}>Estatísticas</Text>
      </View>

      <Text style={styles.tituloGrafico}>Evolução das Denúncias em 2021</Text>
      <Image
        source={require("../../../src/image/estatistica1.png")}
        style={styles.grafico}
      />

      <Text style={styles.tituloGrafico}>
        Quantitativo de Denúncias por Bairro
      </Text>
      <Image
        source={require("../../../src/image/estatistica2.png")}
        style={[styles.grafico, { height: "37%" }]}
      />
    </View>
  );
};
export default MapaAglomeracaoScreen;
