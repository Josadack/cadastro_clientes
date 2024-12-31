# Sistema de Cadastro de Clientes

Este projeto é um sistema para cadastro e gestão de clientes, permitindo gerenciar informações de **Pessoa Física** e **Pessoa Jurídica**. O sistema é desenvolvido em **TypeScript**, utilizando conceitos de **orientação a objetos** para garantir escalabilidade e organização do código.

---

## Instalação

Siga os passos abaixo para configurar e executar o projeto:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seunome/projeto-cadastro-clientes.git
   ```

2. **Acesse a pasta do projeto**:
   ```bash
   cd projeto-cadastro-clientes
   ```

3. **Instale as dependências**:
   ```bash
   npm install
   ```

4. **Compile o código TypeScript**:
   ```bash
   tsc
   ```

5. **Execute o projeto**:
   ```bash
   node dist/index.js
   ```

> **Nota:** A localização do arquivo `index.js` pode variar dependendo da estrutura de pastas.

---

## Uso

Aqui estão alguns exemplos de como utilizar o sistema para cadastrar e gerenciar clientes:

### Cadastro de Clientes

#### Pessoa Física
```typescript
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
```

#### Pessoa Jurídica
```typescript
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
```

### Listar Todos os Clientes
```typescript
clienteController.listarTodosClientes();
```

### Consultar Cliente por ID
```typescript
clienteController.consultarClientesPorId(1); // Substitua "1" pelo ID desejado
```

### Atualizar Cliente
```typescript
clienteController.atualizarCliente(clienteAtualizado);
```

---

## Estrutura do Código

O projeto segue a seguinte estrutura de pastas:

```
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
```

---

## Tecnologias Utilizadas

- **TypeScript**: Para maior segurança e robustez no código.
- **Node.js**: Ambiente de execução JavaScript.

---

## Licença

Este projeto está licenciado sob a [LICENÇA MIT](LICENSE).


