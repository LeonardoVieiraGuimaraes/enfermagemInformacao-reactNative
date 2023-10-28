import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

function ScreenGuiaAtencaoPrimariaSaude() {
  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>Guia Atenção Primária à Saúde</Text>
     

        <Text style={styles.buttonText}>{'A atenção em saúde ocorre nas unidades prisisonais no âmbito da atenção primária  conforme Portaria Interministerial Nº1 de 2014. com o objetivo de subsidiar os profissionais de enfermagem na condução das Consultas de Enfermagem. O documento contempla 17 áreas clínicas com descrições referentes às atribuições da equipe de enfermagem, solicitação de exames e prescrição de medicamentos pelo enfermeiro, bem como, os principais diagnósticos de enfermagem e intervenções em cada área de atuação da APS. \n https://www.corenmg.gov.br/wp-content/uploads/2019/12/Guia-de-Orientacoes-para-a-Atuacao-da-Equipe-de-Enfermagem-na-Atencao-Primaria-a-Saude.pdf'}</Text>
      
        <Image
        source={require("../assets/imagem/Tela10_1.png")} // Caminho para a imagem do botão
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

export default ScreenGuiaAtencaoPrimariaSaude;
