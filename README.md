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
Listar Todos os Clientes
Para listar todos os clientes cadastrados:

typescript
Copiar código
clienteController.listarTodosClientes();
Consultar Cliente por ID
Para consultar um cliente específico pelo seu ID:

typescript
Copiar código
clienteController.consultarClientesPorId(1); // Substitua 1 pelo ID do cliente desejado
Atualizar Cliente
Para atualizar os dados de um cliente:

typescript
Copiar código
clienteController.atualizarCliente(cliente);
Estrutura do Código
A estrutura de pastas do projeto é a seguinte:

bash
Copiar código
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
