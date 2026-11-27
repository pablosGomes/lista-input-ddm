import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import styles from './Estilo';
import {
  adicionarItem,
  alternarComprado,
  removerItem,
  calcularTotal,
  formatarPreco,
} from './Funcoe';

export default function Home() {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('1');
  const [preco, setPreco] = useState('');
  const [erro, setErro] = useState('');
  const [lista, setLista] = useState([
    { id: '1', nome: 'Arroz', quantidade: 2, preco: 5.5, comprado: false },
    { id: '2', nome: 'Feijão', quantidade: 1, preco: 8, comprado: false },
    { id: '3', nome: 'Leite', quantidade: 6, preco: 4.2, comprado: true },
  ]);

  function aoAdicionar() {
    const mensagem = adicionarItem(nome, quantidade, preco, lista, setLista);
    setErro(mensagem);

    if (mensagem === '') {
      setNome('');
      setQuantidade('1');
      setPreco('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.subtitulo}>Novo item</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do item (ex: Pão)"
        value={nome}
        onChangeText={setNome}
      />

      <View style={styles.linha}>
        <TextInput
          style={[styles.input, styles.campo]}
          placeholder="Quantidade"
          keyboardType="numeric"
          value={quantidade}
          onChangeText={setQuantidade}
        />
        <TextInput
          style={[styles.input, styles.campo]}
          placeholder="Preço (R$)"
          keyboardType="decimal-pad"
          value={preco}
          onChangeText={setPreco}
        />
      </View>

      {erro !== '' && <Text style={styles.erro}>{erro}</Text>}

      <TouchableOpacity style={styles.botaoAdicionar} onPress={aoAdicionar}>
        <Text style={styles.textoAdicionar}>Adicionar</Text>
      </TouchableOpacity>

      <Text style={styles.subtitulo}>Itens ({lista.length}):</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.vazio}>Sua lista está vazia.</Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, item.comprado && styles.itemComprado]}
            onPress={() => alternarComprado(item.id, lista, setLista)}
          >
            <View style={styles.itemInfo}>
              <Text
                style={[styles.nome, item.comprado && styles.nomeComprado]}
              >
                {item.nome}
              </Text>
              <Text style={styles.detalhe}>
                {item.quantidade} x {formatarPreco(item.preco)}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.botaoRemover}
              onPress={() => removerItem(item.id, lista, setLista)}
            >
              <Text style={styles.textoRemover}>Remover</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.total}>Total: {formatarPreco(calcularTotal(lista))}</Text>
    </View>
  );
}
