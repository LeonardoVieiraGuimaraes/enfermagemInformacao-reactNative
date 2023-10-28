import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

function ScreenPOPEnfermagem() {
  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>POP Enfermagem</Text>

      <Text style={styles.buttonText}>
        O Manual de Procedimentos Operacionais Padrão de Enfermagem
        caracteriza-se pela procedimentos de frequentemente reunião dos
        enfermagem executados nas unidades prisionais de Minas Gerais em um
        único documento, detalhando a forma correta de fazê-los. Insta salientar
        que esse documento será atualizado a cada dois anos ou sempre que houver
        necessidade.
      </Text>
      <Image
        source={require("../assets/imagem/Tela9_1.png")} // Caminho para a imagem do botão
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

export default ScreenPOPEnfermagem;
