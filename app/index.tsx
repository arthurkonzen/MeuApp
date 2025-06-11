import { router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function fazerLogin() {
    // Aqui você poderia validar usuário/senha com backend futuramente
    if (email && senha) {
      router.push('/home');
    } else {
      alert('Preencha todos os campos!');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} style={styles.input} />
      <Button title="Entrar" onPress={fazerLogin} />
      <Button title="Cadastrar-se" onPress={() => router.push('/cadastro')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
});
