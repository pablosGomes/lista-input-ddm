// ---------- LOGIN ----------
export function verificarLogin(usuario, senha) {
  if (usuario === 'admin' && senha === 'admin') {
    return true;
  }

  return false;
}

// ---------- LISTA DE COMPRAS ----------

// Valida os campos e, se estiver tudo certo, adiciona o item na lista.
// Retorna uma mensagem de erro (string) ou '' quando deu certo.
export function adicionarItem(nome, quantidade, preco, lista, setLista) {
  const nomeLimpo = nome.trim();
  const qtd = Number(quantidade);
  const valor = preco.trim() === '' ? 0 : Number(preco.replace(',', '.'));

  if (nomeLimpo === '') {
    return 'Digite o nome do item.';
  }

  if (!Number.isInteger(qtd) || qtd <= 0) {
    return 'A quantidade deve ser um número inteiro maior que zero.';
  }

  if (Number.isNaN(valor) || valor < 0) {
    return 'Digite um preço válido.';
  }

  const novoItem = {
    id: String(Date.now()),
    nome: nomeLimpo,
    quantidade: qtd,
    preco: valor,
    comprado: false,
  };

  setLista([...lista, novoItem]);
  return '';
}

// Marca / desmarca um item como comprado.
export function alternarComprado(id, lista, setLista) {
  setLista(
    lista.map((item) =>
      item.id === id ? { ...item, comprado: !item.comprado } : item
    )
  );
}

// Remove um item da lista.
export function removerItem(id, lista, setLista) {
  setLista(lista.filter((item) => item.id !== id));
}

// Soma quantidade x preço de todos os itens.
export function calcularTotal(lista) {
  return lista.reduce((soma, item) => soma + item.quantidade * item.preco, 0);
}

export function formatarPreco(valor) {
  return 'R$ ' + valor.toFixed(2).replace('.', ',');
}
