# Sistema de Cadastro de Clientes

Este projeto é um sistema para cadastro e gestão de clientes, permitindo gerenciar informações de **Pessoa Física** e **Pessoa Jurídica**. O sistema é desenvolvido em **TypeScript**, utilizando conceitos de **orientação a objetos** para organizar e manter o código escalável.

---

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)
  - [Exemplos de Uso](#exemplos-de-uso)
- [Estrutura do Código](#estrutura-do-código)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Funcionalidades

### Gerenciamento de Clientes
- Cadastro de clientes do tipo **Pessoa Física**.
- Cadastro de clientes do tipo **Pessoa Jurídica**.
- Listagem de todos os clientes cadastrados.
- Consulta de clientes por **ID**.
- Atualização de dados de clientes.

---

## Tecnologias Utilizadas

- **TypeScript**: Para garantir maior segurança e escalabilidade no código.
- **Node.js**: Ambiente de execução para JavaScript no servidor (se aplicável).

---


Entendi! Pela imagem, parece que a formatação do código e do texto não está sendo renderizada corretamente, o que pode estar gerando confusão. Vou organizar novamente para que fique bem formatado e consistente.

Sistema de Cadastro de Clientes
Este projeto é um sistema para cadastro e gestão de clientes, permitindo gerenciar informações de Pessoa Física e Pessoa Jurídica. O sistema é desenvolvido em TypeScript, utilizando conceitos de orientação a objetos.

Instalação
Siga os passos abaixo para configurar e executar o projeto:

Clone o repositório:

bash
Copiar código
git clone https://github.com/seunome/projeto-cadastro-clientes.git
Acesse a pasta do projeto:

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
Nota: A localização do arquivo index.js pode variar dependendo da estrutura de pastas.

Uso
Exemplos de Cadastro e Gestão de Clientes
Cadastro de Clientes
Cadastro de um cliente Pessoa Física:

typescript
Copiar código
const clienteController = new ClienteController();

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
Cadastro de um cliente Pessoa Jurídica:

typescript
Copiar código
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
typescript
Copiar código
clienteController.listarTodosClientes();
Consultar Cliente por ID
typescript
Copiar código
clienteController.consultarClientesPorId(1); // Substitua "1" pelo ID desejado
Atualizar Cliente
typescript
Copiar código
clienteController.atualizarCliente(clienteAtualizado);
Estrutura do Código
O projeto segue a seguinte estrutura:

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
│   └── ClienteRepository.ts  # Repositório para gerenciar clientes
├── util/
│   └── Menus.ts              # Utilitário para menus e interações
└── index.ts                  # Ponto de entrada do projeto
