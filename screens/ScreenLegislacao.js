import React from "react";
import {
  View,
  TouchableOpacity,
  Linking,
  Text,
  StyleSheet,
} from "react-native";

function ScreenLegislacao({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // navigation.navigate("WebView");
          Linking.openURL(
            "https://drive.google.com/file/d/1MRk8AIyCjzO484Ei2A4gPSwwxYagEgj4/view?usp=sharing"
          );
        }}
      >
        <Text style={styles.buttonText}>RENP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Linking.openURL(
            "https://drive.google.com/file/d/1OsCUcW6wYuUPAkDcuf6Teo9_xcmvv4zj/view?usp=drive_link"
          );
        }}
      >
        <Text style={styles.buttonText}>LEP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("LeiExercicoProfissional");
        }}
      >
        <Text style={styles.buttonText}>Lei do Exercíio Profissional</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Linking.openURL(
            "https://drive.google.com/file/d/1VTRHwLGa-ejFh80eORLIL43LReurlmzh/view?usp=sharing"
          );
        }}
      >
        <Text style={styles.buttonText}>PNAISP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Linking.openURL(
            "https://drive.google.com/file/d/1oRB9MayqD_P1ea07dkERhI5VR_5nwLET/view?usp=sharing"
          );
        }}
      >
        <Text style={styles.buttonText}>Resolução Carga Horaria</Text>
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
});

export default ScreenLegislacao;
