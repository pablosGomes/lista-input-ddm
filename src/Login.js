import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';

import styles from './Estilo';
import { verificarLogin } from './Funcoe';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function fazerLogin() {
    if (verificarLogin(usuario, senha)) {
      setSenha('');
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos!');
    }
  }

  return (
    <View style={styles.containerLogin}>
      <Image
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>Lista de Compras</Text>

      <Text style={styles.label}>Usuário</Text>
      <TextInput
        placeholder="Digite seu usuário"
        style={styles.input}
        autoCapitalize="none"
        value={usuario}
        onChangeText={setUsuario}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        placeholder="Digite sua senha"
        style={styles.input}
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
        onSubmitEditing={fazerLogin}
      />

      <View style={styles.botao}>
        <Button title="Entrar" onPress={fazerLogin} color="#2E7D32" />
      </View>
    </View>
  );
}
