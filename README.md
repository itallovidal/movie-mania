# 🎬 movieMania

Bem-vindo ao **movieMania**! Este projeto foi construído com React, TypeScript e Vite para proporcionar uma experiência perfeita para os entusiastas de filmes. Aproveite a substituição de módulos a quente (HMR) e regras de lint robustas para garantir a qualidade do código.

## 🚀 Início Rápido

Comece a usar o movieMania rapidamente!

1. **Clone o repositório:**
    ```sh
    git clone https://github.com/droidmarx/movieMania.git
    cd movieMania
    ```

2. **Instale as dependências:**
    ```sh
    npm install
    ```

3. **Execute o servidor de desenvolvimento:**
    ```sh
    npm run dev
    ```

4. **Construa para produção:**
    ```sh
    npm run build
    ```

## 🛠 Funcionalidades

- **React + TypeScript:** Aproveite o poder da segurança de tipos com TypeScript.
- **Vite:** Desfrute de HMR instantâneo e builds super rápidos.
- **Configuração ESLint:** Pré-configurado com regras recomendadas de ESLint para React e TypeScript.

## 🔧 Configuração do ESLint

Para uma aplicação pronta para produção, recomendamos expandir a configuração do ESLint para habilitar regras de lint conscientes de tipo:

1. **Configure `parserOptions`:**

    ```js
    export default {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
    }
    ```

2. **Atualize `extends`:**

    - Substitua `plugin:@typescript-eslint/recommended` por `plugin:@typescript-eslint/recommended-type-checked` ou `plugin:@typescript-eslint/strict-type-checked`.
    - Opcionalmente, adicione `plugin:@typescript-eslint/stylistic-type-checked`.
    - Instale [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) e adicione `plugin:react/recommended` & `plugin:react/jsx-runtime`.

## 📚 Saiba Mais

- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do React](https://reactjs.org/)
- [Documentação do TypeScript](https://www.typescriptlang.org/)
- [Documentação do ESLint](https://eslint.org/)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📜 Licença

Este projeto está licenciado sob a Licença MIT.

---

Boa codificação! 🎉

Feito com ❤️ por [Italo Vidal](https://github.com/itallovidal).
contribuição de [Guilherme Marx](https://github.com/droidmarx).
