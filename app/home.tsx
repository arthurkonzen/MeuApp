import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AMARELO_ESCURO = '#FFC300'; // Amarelo escuro

export default function HomeScreen() {
  const usuario = { nome: 'Arthur' };

  function handlePerfilPress() {
    alert(`Perfil do usuário: ${usuario.nome}`);
  }

  function handleCaptura() {
    router.push('/captura');
  }

  function handleSair() {
    router.replace('/');
  }

  return (
    <View style={styles.container}>
      {/* Logo centralizada e bem maior */}
      <Image
        source={require('../assets/images/logo1.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Ícone de perfil no topo direito, bem para cima */}
      <TouchableOpacity style={styles.profileBtn} onPress={handlePerfilPress}>
        <Ionicons name="person-circle-outline" size={60} color={AMARELO_ESCURO} />
      </TouchableOpacity>

      {/* Título centralizado e botão */}
      <View style={styles.centerContainer}>
        <Text style={styles.titulo}>Bem-vindo à Home!</Text>
        <TouchableOpacity style={styles.actionBtn} onPress={handleCaptura}>
          <Text style={styles.actionBtnText}>Iniciar Captura</Text>
        </TouchableOpacity>
      </View>

      {/* Botão Sair fixo no rodapé */}
      <TouchableOpacity style={styles.exitBtn} onPress={handleSair}>
        <Text style={styles.exitBtnText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 },
  logo: {
    width: width * 0.5,     // 50% da largura da tela
    height: width * 0.5,    // proporcional, bem maior
    alignSelf: 'center',
    marginTop: 55,
    marginBottom: 10,
    zIndex: 1,
  },
  profileBtn: {
    position: 'absolute',
    top: 0, // Máximo para cima!
    right: 20,
    zIndex: 2,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 32, color: '#333' },
  actionBtn: {
    backgroundColor: AMARELO_ESCURO,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 40,
    marginBottom: 16,
    minWidth: 220,
    alignItems: 'center',
    elevation: 2,
  },
  actionBtnText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  exitBtn: {
    backgroundColor: AMARELO_ESCURO,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 38,
    minWidth: 220,
    alignSelf: 'center',
    elevation: 2,
  },
  exitBtnText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});