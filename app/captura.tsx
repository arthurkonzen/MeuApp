import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AMARELO_ESCURO = '#FFC300';

export default function CapturaScreen() {
  const [nomeBebe, setNomeBebe] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [rg, setRG] = useState('');
  const [cpf, setCPF] = useState('');

  function handlePerfilPress() {
    // Aqui pode abrir tela de perfil futuramente
    alert('Perfil do usuário');
  }

  function handleSalvar() {
    // Aqui você pode implementar a lógica de salvar os dados
    alert(
      `Nome: ${nomeBebe}\nData de nascimento: ${dataNascimento}\nRG: ${rg}\nCPF: ${cpf}`
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Ícone de perfil centralizado no topo */}
      <TouchableOpacity style={styles.profileBtn} onPress={handlePerfilPress}>
        <Ionicons name="person-circle-outline" size={48} color={AMARELO_ESCURO} />
      </TouchableOpacity>

      <View style={styles.formContainer}>
        <Text style={styles.titulo}>Cadastro do Bebê</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do bebê"
          value={nomeBebe}
          onChangeText={setNomeBebe}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento (DD/MM/AAAA)"
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />
        <TextInput
          style={styles.input}
          placeholder="RG do bebê"
          value={rg}
          onChangeText={setRG}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF do bebê"
          value={cpf}
          onChangeText={setCPF}
        />

        <TouchableOpacity style={styles.saveBtn} onPress={handleSalvar}>
          <Text style={styles.saveBtnText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  profileBtn: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 28, color: '#333' },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 18,
    backgroundColor: '#f8f8f8',
  },
  saveBtn: {
    backgroundColor: AMARELO_ESCURO,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
    elevation: 2,
  },
  saveBtnText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backBtn: {
    padding: 8,
  },
  backBtnText: {
    color: AMARELO_ESCURO,
    fontSize: 16,
    fontWeight: 'bold',
  },
});