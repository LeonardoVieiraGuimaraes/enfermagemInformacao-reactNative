import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ScreenRegimentoEnfermagemInf() {
  return (
    <View style={styles.container}>
      <Text style={styles.texttitle}> Regimento de Enfermagem</Text>
      <Text style={styles.text}>
      {'A importância do Regimento Interno do Serviço de Enfermagem como instrumento de gestão é inegável, uma vez que não apenas orienta o processo de trabalho da equipe, como também atende aos aspectos legais necessários ao seu funcionamento. A efetiva utilização deste documento contribui significativamente para a qualidade dos cuidados prestados e segurança dos pacientes.'}
      </Text>
      {/* Aqui você pode adicionar mais componentes e conteúdo específico */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BF63", // Cor de fundo verde para a área de enfermagem 1
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    padding: 20,
    textAlign: "justify",
  },
  texttitle: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
  },
});

export default ScreenRegimentoEnfermagemInf;
