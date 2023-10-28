import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

function ScreenNivelAutonomia() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.buttonText}>Regimento de Enfermagem</Text> */}

      <Text style={styles.buttonText}>PARABÉNS!</Text>
      <Text>Você é capaz de executar a gestão do seu trabalho com autonomia gerando mais resultados e contribuindopara uma assistência qualificada.</Text>
      
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

export default ScreenNivelAutonomia;
