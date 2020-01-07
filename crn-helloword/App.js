/*
Curso React Native
Eduardo Chaves Ferreira
V 1.0 - Livro
Exemplo de aplicativo mínimo
*/

import * as React from 'react';
import { Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 18, textAlign: 'center'}}>
          Hello word
        </Text>
      </View>
    );
  }
}


