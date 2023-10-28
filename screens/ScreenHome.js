import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../assets/style/style';

function ScreenHome({ navigation }) {
  return (
    <View style={styles.container}>
     
      <TouchableOpacity
        onPress={() => {navigation.navigate('Inicio')}}
        style={styles.button}
      >
        <Image
          source={require("../assets/imagem/Tela_inicial.png")} // Caminho para a imagem
          style={styles.image} // Estilo da imagem (opcional)
        />
      </TouchableOpacity>
      <Text style={styles.text}>Clique na Imagem</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:'#00BF63',
//   },
//   text: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: 'transparent', // Cor de fundo transparente
//     padding: 10,
//     borderRadius: 10,
//   },
//   buttonImage: {
//     width: 300, // Largura da imagem do botão
//     height: 300, // Altura da imagem do botão
//   },
// });

export default ScreenHome;
