import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

export default function ScreenISTHIVAids() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.buttonText}>IST-HIV-Aids</Text>
      <Image
        source={require("../assets/imagem/Tela12_1.png")} // Caminho para a imagem do botão
        style={styles.imagem}
      />

      <Image
        source={require("../assets/imagem/Tela13_1.png")} // Caminho para a imagem do botão
        style={styles.imagem}
      />

      <Image
        source={require("../assets/imagem/Tela13_2.png")} // Caminho para a imagem do botão
        style={styles.imagem}
      />

      <Image
        source={require("../assets/imagem/Tela13_3.png")} // Caminho para a imagem do botão
        style={styles.imagem}
      /> */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Lógica para o segundo botão
        }}
      >
        <Text style={styles.buttonText}>Busca Ativa</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Lógica para o terceiro botão
        }}
      >
        <Text style={styles.buttonText}>Tratamento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Lógica para o terceiro botão
        }}
      >
        <Text style={styles.buttonText}>Isolamento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Lógica para o terceiro botão
        }}
      >
        <Text style={styles.buttonText}>Medidas de Controle</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Lógica para o terceiro botão
        }}
      >
        <Text style={styles.buttonText}>Orientação para Transferência</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00BF63",
  },
  button: {
    backgroundColor: "#8ECAEF",
    borderWidth: 1, // Largura da borda
    borderColor: "blue", // Cor da borda
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15, // Espaço entre os botões
    width: "80%", // Use a largura total do contêiner
  },
  buttonText: {
    color: "black", // Cor do texto do botão
    fontSize: 20,
    fontWeight: "bold",
  },
  imagem: {
    // alignContent: 'right',
    // width: 100, // Largura da imagem do botão
    // height: 100, // Altura da imagem do botão
  },
});
