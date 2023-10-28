import React, { Component } from 'react';
import { View, StyleSheet, WebView } from 'react-native';
import { Constants } from 'expo';

// import PdfReader from 'rn-pdf-reader-js';

const PdfReader = ({ url: uri }) => <WebView javaScriptEnabled={true} style={{ flex: 1 }} source={{ uri }} />

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PdfReader url="http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
