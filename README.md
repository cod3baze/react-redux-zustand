# Tratamento de estados com reduz & zustand

> React + TypeScript + Vite

`npm create vite@latest [project-name]`: inicia o projeto com **vitest**

`yarn add @reduxjs/toolkit`: kit de desenvolvimento do _Redux_

` yarn add react-redux`: integração do **react** com o _Redux_

**Store**: é o estado global, toda aplicação vai ter acesso a ele.

**Reducer**: São as informações que vão ser compartilhadas nos components da aplicação

**Slice**: fatias/partes de estados

**actions**: ações/porta de entrada que podem alterar as informações dos estados

**createAsyncThunk**: (action) ações assíncronas

**useSelector**: para buscar informações do estado

**dispatch**: disparar ações que vão realizar alterações no estado.

```ts
  extraReducers(builder) {
    builder.addCase(loadCourse.fulfilled, function(state, action){}); // executa uma função quando for *Fulfilled*
  },
```

## Zustand

`yarn add zustand`: lib completa com todas as funções do **zustand**

**create**: cria o _store_ da aplicação

> o seu retorno determina as informações do store que vão ser compartilhadas na aplicação

**(get)=> {}**: serve para buscar uma informação que está salva no store
**(set)=> {}**: serve para atualizar alguma informação do store
