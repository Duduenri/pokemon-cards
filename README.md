# Pokémon Cards Project

Este projeto foi desenvolvido como parte de um desafio técnico para uma vaga de desenvolvedor front-end. O objetivo é criar uma página que lista cartas de Pokémon com paginação e permite a busca por nome.

## Tecnologias Utilizadas

- **ReactJS**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **TailwindCSS**: Framework de CSS para estilização.
- **Vite**: Ferramenta de build rápida para projetos front-end.

## Funcionalidades

- **Listagem de Cartas de Pokémon**: Exibe uma lista de cartas com imagem e nome, com responsividade para mobile.
- **Pesquisa por Nome**: Campo de pesquisa para buscar cartas por nome, com debounce de 2 segundos.
- **Paginação**: Navegação entre páginas de resultados.
- **Pesquisa de Cartas Raras**: Página dedicada para pesquisar apenas cartas raras.

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/pokemon-cards.git
   cd pokemon-cards
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o projeto**:
   ```bash
   npm run dev
   ```

4. **Abra o navegador** e acesse:
   ```
   http://localhost:3000
   ```

## Decisões Técnicas

- **ReactJS com TypeScript**: Escolhi ReactJS pela sua popularidade e facilidade de uso. TypeScript foi utilizado para garantir maior segurança e qualidade no código.
- **TailwindCSS**: Utilizado para estilização rápida e eficiente, permitindo um design responsivo sem a necessidade de escrever muito CSS.
- **Vite**: Ferramenta de build escolhida pela sua rapidez e simplicidade na configuração de projetos React.
- **Debounce na Pesquisa**: Implementado um debounce de 2 segundos no componente `SearchBar` para otimizar as buscas e evitar requisições excessivas à API.
- **Paginação**: A paginação foi implementada nos componentes `PokemonList` e `RarePokemonList` para melhorar a experiência do usuário ao navegar por muitas cartas.
- **Componentização**: A aplicação foi dividida em componentes reutilizáveis como `SearchBar`, `Pagination`, `PokemonList`, `RarePokemonList` e `NavigationMenu` para facilitar a manutenção e a escalabilidade do projeto.
- **Fetch API**: Utilizada para realizar requisições à API do Pokémon TCG, com tratamento de erros e estados de carregamento para melhorar a robustez da aplicação.
- **React Router**: Utilizado para navegação entre páginas, permitindo a criação de rotas para listar todas as cartas e para listar apenas cartas raras.

## Estrutura do Projeto

- **src/components**: Contém todos os componentes React utilizados no projeto.
- **src/assets**: Contém os arquivos de imagem e outros recursos estáticos.
- **src/App.tsx**: Componente principal que renderiza a aplicação.

