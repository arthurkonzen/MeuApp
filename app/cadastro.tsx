import { router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function cadastrar() {
    if (nome && email && senha) {
      alert('Cadastro realizado com sucesso!');
      router.replace('/'); // Volta para o login
    } else {
      alert('Preencha todos os campos!');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} style={styles.input} />
      <Button title="Cadastrar" onPress={cadastrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
});
