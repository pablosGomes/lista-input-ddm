# Lista de Compras — DDM (Lista e Input)

App em React Native (Expo) com **inputs funcionais** e **lista (FlatList)**.
Tema: lista de compras.

## Funcionalidades
- Tela de **Login** (usuário `admin`, senha `admin`).
- Tela **Home** com 3 inputs (nome, quantidade, preço) e botão **Adicionar**.
- Validação dos campos (nome vazio, quantidade inválida, preço inválido).
- Lista com `FlatList`: toque no item para marcar como comprado; botão **Remover**.
- Total calculado automaticamente.

## Estrutura
- `App.js` – navegação (Login → Home)
- `src/Login.js`, `src/Home.js` – telas
- `src/Funcoe.js` – funções (login, adicionar, remover, total...)
- `src/Estilo.js` – estilos

## Como rodar
```bash
npm install
npx expo start        # ou: npm run web
```
