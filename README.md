# Sistema de Cadastro de Clientes e Produtos  

Este projeto é um sistema de cadastro de clientes e produtos, permitindo a gestão de clientes do tipo Pessoa Física e Pessoa Jurídica, bem como produtos eletrônicos e software. O sistema é desenvolvido em TypeScript e utiliza conceitos de orientação a objetos.  

## Índice  

- [Funcionalidades](#funcionalidades)  
- [Tecnologias Utilizadas](#tecnologias-utilizadas)  
- [Instalação](#instalação)  
- [Uso](#uso)  
- [Estrutura do Código](#estrutura-do-código)  
- [Contribuição](#contribuição)  
- [Licença](#licença)  

## Funcionalidades  

- Cadastro de clientes:  
  - Cadastro de Pessoa Física.  
  - Cadastro de Pessoa Jurídica.  
  - Listagem de todos os clientes cadastrados.  
  - Consulta de clientes por ID.  
  - Atualização de dados de clientes.  

- Cadastro de produtos:  
  - Eletrônicos (e.g., smartphones, notebooks).  
  - Softwares (e.g., aplicativos com licenciamento).  
  
- Funcionalidades básicas para listar produtos e visualizar detalhes.  

## Tecnologias Utilizadas  

- **TypeScript**: Linguagem de programação utilizada para garantir um código mais seguro e robusto.  
- **Node.js**: (Se aplicável) Ambiente de execução para JavaScript no servidor.  

## Instalação  

Para executar este projeto em sua máquina, siga os passos abaixo:  

1. **Clone o repositório**:  

   ```bash  
   git clone https://github.com/seunome/projeto-cadastro-clientes-produtos.git

2. Navegue até a pasta do projeto:

cd projeto-cadastro-clientes-produtos

3. Instale as dependências (caso haja):
npm install


4. Compile o código TypeScript:
tsc

5. Execute o projeto:
node dist/index.js


Observação: A localização do arquivo pode variar dependendo da sua estrutura de pastas.


Uso
Aqui estão alguns exemplos de como utilizar o sistema para cadastrar clientes:

Cadastro de Clientes
const clienteController = new ClienteController();  

// Cadastrar um cliente Pessoa Física  
clienteController.cadastrarCliente(  
    new PessoaFisica(clienteController.gerarId(), "João Silva", "Rua das Flores, 123", "11987654321", new Date(1990, 4, 15), 1, "123.456.789-00", "M")  
);


Listar Todos os Clientes
Para listar todos os clientes cadastrados, chame o método:
clienteController.listarTodosClientes();

Consultar Cliente por ID
Para consultar um cliente específico pelo seu ID:
clienteController.consultarClientesPorId(1); // Substitua 1 pelo ID do cliente desejado


Atualizar Cliente
Para atualizar os dados de um cliente:
clienteController.atualizarCliente(cliente);


Estrutura do Código
A estrutura do projeto é a seguinte:

src/  
├── controller/  
│   └── ClienteController.ts      # Controlador que gerencia clientes  
├── model/  
│   ├── Clientes.ts                # Classe base de Cliente  
│   ├── PessoaFisica.ts            # Classe para Pessoa Física  
│   └── PessoaJuridica.ts          # Classe para Pessoa Jurídica  
├── repository/  
│   └── ClienteRepository.ts        # Repositório que gerencia a lista de clientes  
├── util/  
│   └── Menus.ts                   # Utilitário para menus e interações  
└── index.ts                       # Ponto de entrada do projeto