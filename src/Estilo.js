import { StyleSheet } from 'react-native';

const VERDE = '#2E7D32';
const VERDE_CLARO = '#E8F5E9';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  containerLogin: {
    flex: 1,
    backgroundColor: VERDE_CLARO,
    padding: 24,
    justifyContent: 'center',
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: VERDE,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
  },
  linha: {
    flexDirection: 'row',
    gap: 10,
  },
  campo: {
    flex: 1,
  },
  botao: {
    marginTop: 8,
  },
  botaoAdicionar: {
    backgroundColor: VERDE,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  textoAdicionar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  erro: {
    color: '#C62828',
    marginBottom: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderLeftWidth: 5,
    borderLeftColor: VERDE,
  },
  itemComprado: {
    borderLeftColor: '#9E9E9E',
    backgroundColor: '#EEEEEE',
  },
  itemInfo: {
    flex: 1,
  },
  nome: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
  },
  nomeComprado: {
    textDecorationLine: 'line-through',
    color: '#9E9E9E',
  },
  detalhe: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  botaoRemover: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  textoRemover: {
    color: '#C62828',
    fontWeight: 'bold',
  },
  vazio: {
    textAlign: 'center',
    color: '#888',
    marginTop: 24,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: VERDE,
    textAlign: 'right',
    paddingTop: 8,
  },
});
