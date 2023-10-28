import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00BF63",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "transparent", // Cor de fundo transparente
    padding: 10,
    borderRadius: 10,
  },
  buttonImage: {
    width: 300, // Largura da imagem do botão
    height: 300, // Altura da imagem do botão
  },
});


export default styles;