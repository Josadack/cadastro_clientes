Sistema de Cadastro de Clientes
Este projeto é um sistema para cadastro e gestão de clientes, permitindo gerenciar informações de Pessoa Física e Pessoa Jurídica. O sistema é desenvolvido em TypeScript, utilizando conceitos de orientação a objetos para organizar e manter o código escalável.

Índice
Funcionalidades
Tecnologias Utilizadas
Instalação
Uso
Exemplos de Uso
Estrutura do Código
Contribuição
Licença
Funcionalidades
Gerenciamento de Clientes
Cadastro de clientes do tipo Pessoa Física.
Cadastro de clientes do tipo Pessoa Jurídica.
Listagem de todos os clientes cadastrados.
Consulta de clientes por ID.
Atualização de dados de clientes.
Tecnologias Utilizadas
TypeScript: Para garantir maior segurança e escalabilidade no código.
Node.js: Ambiente de execução para JavaScript no servidor (se aplicável).
Instalação
Siga os passos abaixo para configurar e executar o projeto:

Clone o repositório:

bash
Copiar código
git clone https://github.com/seunome/projeto-cadastro-clientes.git
Navegue até a pasta do projeto:

bash
Copiar código
cd projeto-cadastro-clientes
Instale as dependências:

bash
Copiar código
npm install
Compile o código TypeScript:

bash
Copiar código
tsc
Execute o projeto:

bash
Copiar código
node dist/index.js
Nota: A localização do arquivo index.js pode variar conforme a estrutura de pastas.

Uso
Exemplos de Uso
Cadastro de Clientes
typescript
Copiar código
const clienteController = new ClienteController();

// Cadastrar um cliente Pessoa Física
clienteController.cadastrarCliente(
  new PessoaFisica(
    clienteController.gerarId(),
    "João Silva",
    "Rua das Flores, 123",
    "11987654321",
    new Date(1990, 4, 15),
    1,
    "123.456.789-00",
    "M"
  )
);

// Cadastrar um cliente Pessoa Jurídica
clienteController.cadastrarCliente(
  new PessoaJuridica(
    clienteController.gerarId(),
    "Empresa X",
    "Avenida Principal, 456",
    "1123456789",
    "00.123.456/0001-89",
    100
  )
);
Listar Todos os Clientes
Para listar todos os clientes cadastrados:

typescript
Copiar código
clienteController.listarTodosClientes();
Consultar Cliente por ID
Para consultar um cliente específico pelo ID:

typescript
Copiar código
clienteController.consultarClientesPorId(1); // Substitua 1 pelo ID do cliente desejado
Atualizar Cliente
Para atualizar os dados de um cliente:

typescript
Copiar código
clienteController.atualizarCliente(clienteAtualizado);

Estrutura do Código
A estrutura do projeto é organizada da seguinte forma:
src/
├── controller/
│   └── ClienteController.ts  # Controlador para gerenciar clientes
├── model/
│   ├── Clientes.ts           # Classe base para Cliente
│   ├── PessoaFisica.ts       # Classe para Pessoa Física
│   └── PessoaJuridica.ts     # Classe para Pessoa Jurídica
├── repository/
│   └── ClienteRepository.ts  # Repositório para gerenciar a lista de clientes
├── util/
│   └── Menus.ts              # Utilitário para menus e interações
└── index.ts                  # Ponto de entrada do projeto


