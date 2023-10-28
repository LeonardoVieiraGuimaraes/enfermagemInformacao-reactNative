import React from "react";
import { View, TouchableOpacity, Image, Text, Linking, StyleSheet } from "react-native";

function ScreenNormasRotinas({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/imagem/Tela6_1.png")} // Caminho para a imagem do botão
        style={styles.imagem}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("RegimentoEnfermagem");
        }}
      >
        <Text style={styles.buttonText}>Regimento de Enfermagem</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("POPEnfermagem");
        }}
      >
        <Text style={styles.buttonText}>POP Enfermagem</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Linking.openURL(
            "https://drive.google.com/file/d/11VLYuRnAbu7hMDcTHOToZTQcmv6iKZ5k/view?usp=drive_link"
          );
        }}
      >
        <Text style={styles.buttonText}>Manual de Transporte</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("GuiaAtencaoPrimariaSaude");
        }}
      >
        <Text style={styles.buttonText}>Guia de Atenção Primária</Text>
      </TouchableOpacity>
      <Image
        source={require("../assets/imagem/Tela6_2.png")} // Caminho para a imagem do botão
        style={styles.imagem}
      />
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

export default ScreenNormasRotinas;
