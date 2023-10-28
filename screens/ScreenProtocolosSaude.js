import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

function ScreenProtocolosSaude({ navigation }) {
  return (
    <View style={styles.container}>
     <Image
        source={require("../assets/imagem/Tela7_1.png")} // Caminho para a imagem do botão
        style={styles.imagem}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Tuberculose')
        }}
      >
        <Text style={styles.buttonText}>Tuberculose</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('ISTHIVAids')
        }}
      >
        <Text style={styles.buttonText}>IST-HIV - Aids</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Escabiose')
        }}
      >
        <Text style={styles.buttonText}>Escabiose</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#00BF63',
  },
  button: {
    backgroundColor: '#8ECAEF',
    borderWidth: 1, // Largura da borda
    borderColor: 'blue', // Cor da borda
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15, // Espaço entre os botões
    width: '80%', // Use a largura total do contêiner
  },
  buttonText: {
    color: 'black', // Cor do texto do botão
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagem: {

    // alignContent: 'right',
    // width: 100, // Largura da imagem do botão
    // height: 100, // Altura da imagem do botão
  },
});

export default ScreenProtocolosSaude;
