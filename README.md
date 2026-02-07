# SyntaxWear: Loja de E-commerce Moderna

Este projeto é uma loja de e-commerce moderna chamada **SyntaxWear**, desenvolvida para oferecer uma experiência de compra online eficiente e agradável. Construída com tecnologias web de ponta, a aplicação se destaca por sua arquitetura robusta, roteamento baseado em sistema de arquivos e gerenciamento de estado global para o carrinho de compras.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superconjunto tipado do JavaScript que melhora a manutenibilidade e a escalabilidade do código.
- **Vite**: Ferramenta de build frontend que oferece uma experiência de desenvolvimento extremamente rápida.
- **TanStack Router**: Gerenciamento de roteamento declarativo e baseado em sistema de arquivos para aplicações React.
- **Tailwind CSS**: Framework CSS utilitário que permite construir designs personalizados rapidamente.
- **Context API (React)**: Para gerenciamento de estado global, especificamente para o carrinho de compras.
- **React Hook Form**: Gerenciamento de formulários.
- **Zod**: Validação de schemas.
- **ESLint**: Ferramenta para linting do código.

## Funcionalidades Principais

- Navegação intuitiva por produtos e categorias.
- Gerenciamento de carrinho de compras com estado global.
- Páginas de detalhes de produtos dinâmicas.
- Layout responsivo para diversas telas (desktop, tablet, mobile).
- Autenticação (login/registro).

## Estrutura do Projeto

O projeto segue uma estrutura organizada para facilitar o desenvolvimento e a manutenção:

- `src/components`: Componentes React reutilizáveis.
- `src/pages`: Páginas da aplicação, com roteamento definido pelo TanStack Router.
- `src/contexts`: Provedores de contexto React para gerenciamento de estado global.
- `src/styles`: Arquivos de estilo globais (principalmente Tailwind CSS).
- `src/assets`: Recursos estáticos como imagens e fontes.
- `src/utils`: Funções utilitárias diversas.

## Como Rodar o Projeto

Siga os passos abaixo para configurar e rodar a aplicação em seu ambiente local.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) (que inclui o npm) instalado em sua máquina.

### Instalação

Clone este repositório:

```bash
  git clone https://github.com/seu-usuario/syntax-wear-app.git
  cd syntax-wear-app
```

Instale as dependências do projeto:

```bash
  npm install
```

### Executando a Aplicação em Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará acessível em `http://localhost:5173` (ou em outra porta disponível).

### Construindo a Aplicação para Produção

Para gerar uma build otimizada da aplicação para produção:

```bash
npm run build
```

Os arquivos estáticos da build serão gerados no diretório `dist/`.

### Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run lint`: Executa o linter para verificar a qualidade do código.
- `npm run preview`: Inicia um servidor para visualizar a build de produção.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.
