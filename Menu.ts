import readlinesync = require('readline-sync')
import { PessoaFisica } from './src/model/PessoaFisica';
import { ClienteController } from './src/controller/ClienteController';
import { PessoaJuridica } from './src/model/Pessoajuridica';

export function main(){

    let opcao, tipo, id: number;
    let nome, cnpj, telefone, endereco, cpf, sexo, inscricaoEstadual, razaoSocial:string;


    const tipoCliente = ['Pessoa Fisica', 'Pessoal Juridica']

    const clientes = new ClienteController();
    
    // Cadastrando clientes Pessoa Física  
    clientes.cadastrarCliente(new PessoaFisica(clientes.gerarId(), "João Silva", "Rua das Flores, 123", "11987654321", new Date(1990, 4, 15), 1, "123.456.789-00", "M"));    
    
    clientes.cadastrarCliente(new PessoaFisica(clientes.gerarId(), "Maria Oliveira", "Av. Brasil, 456", "11991234567", new Date(1985, 1, 20), 1, "987.654.321-00", "F"));  
    
    clientes.cadastrarCliente(new PessoaFisica(clientes.gerarId(), "Carlos Silva", "Praça da Paz, 789", "11993456789", new Date(1995, 7, 5), 1, "000.111.222-33", "M"));  
    
    // Cadastrando clientes Pessoa Jurídica  
    clientes.cadastrarCliente(new PessoaJuridica(clientes.gerarId(),  "Rua das Acácias, 321", "11345678901", new Date(2010, 3, 1), 2, "Empresa A LTDA","12.345.678/0001-90", "123456789"));  
    
    clientes.cadastrarCliente(new PessoaJuridica(clientes.gerarId(),"Av. das Nações, 654", "11456789012", new Date(2015, 9, 10), 2, "Empresa B S/A",  "98.765.432/0001-01", "987654321"));  
    
    clientes.cadastrarCliente(new PessoaJuridica(clientes.gerarId(), "Travessa dos Cactos, 111", "11789012345", new Date(2012, 6, 25), 2, "Negócios C CNPJ", "11.222.333/0001-02", "112233445")  );



    while(true){

        console.log("\n********************************************")
        console.log("                                     ")                             
        console.log("             CADASTRO DE CLIENTES 🧾            ")
        console.log("                                    ")
        console.log("*********************************************")
        console.log("                                     ")
        console.log("         1 - Cradastrar Clientes              ")
        console.log("         2 - Listar Todos os Clientes             ")
        console.log("         3 - Consultar Cliente por ID            ")
        console.log("         4 - Atualizar Dados do Cliente            ")
        console.log("         5 - Deletar Cliente                       ")
        console.log("         0 - Sair                       ")
        console.log("")
        console.log("Entre com a opção desejada: ")
        opcao =   readlinesync.questionInt('')  

        if(opcao === 0){
            about();
            process.exit();
        }

        switch(opcao){
            case 1:
                console.log("\n\nCadastrar Cliente\n");

                tipo = readlinesync.keyInSelect(tipoCliente,"", {cancel:false}) + 1;

                switch(tipo){
                    case 1:
                        console.log("Digite o nome: ");
                        nome = readlinesync.question('');
                        console.log("Informe o CPF:")
                        cpf = readlinesync.question('')
                        console.log("Informe o Telefone:")
                        telefone = readlinesync.question('')
                        console.log("Informe o Endereço:")
                        endereco = readlinesync.question('')
                        console.log("Informe o Sexo[M/F]:")
                        sexo = readlinesync.question('')
                      
                        const dataNascimentoString = readlinesync.question("Informe sua data de nascimento [dia/mes/ano]: ");  
                        const [dia, mes, ano] = dataNascimentoString.split('/').map(Number);  
                        const dataNascimento = new Date(ano, mes - 1, dia); // Criando a data  

                        if (isNaN(dataNascimento.getTime())) {  
                            console.log("Data de nascimento inválida. Tente novamente.");  
                            return;  
                        } 
                        clientes.cadastrarCliente(new PessoaFisica(clientes.gerarId(), nome, endereco, telefone, dataNascimento, tipo, cpf, sexo))


                        break;
                    case 2:
                        console.log("Digite a razão Social: ");
                        razaoSocial = readlinesync.question('');
                        console.log("Informe o CNPJ:")
                        cnpj = readlinesync.question('')
                        console.log("Informe o Telefone:")
                        telefone = readlinesync.question('')
                        console.log("Informe o Endereço:")
                        endereco = readlinesync.question('')
                        console.log("Informe a Inscrição Estadual:")
                        inscricaoEstadual = readlinesync.question('')

                        const dataAberturaString = readlinesync.question("Data de abertura do CNPJ [dia/mes/ano]: ");  
                        const [diaPJ, mesPJ, anoPJ] = dataAberturaString.split('/').map(Number);  
                        const dataAbertura = new Date(anoPJ, mesPJ - 1, diaPJ); // Criando a data  

                        if (isNaN(dataAbertura.getTime())) {  
                            console.log("Data de abertura do CNPJ inválida. Tente novamente.");  
                            return;  
                        }  
                        clientes.cadastrarCliente(new PessoaJuridica(clientes.gerarId(), endereco, telefone, dataAbertura, tipo, razaoSocial,cnpj, inscricaoEstadual))


                }

                keyPress();
                break;

            case 2:
                console.log("\nListar Todos os Clientes");
                clientes.listarTodosClientes();

                keyPress();
                break;

            case 3:
                console.log("\n\nConsultar Cliente por ID\n\n");

                console.log('Digite o ID do Cliente: ')
                id = readlinesync.questionInt('')
    
                clientes.consultarClientesPorId(id);

                keyPress();
                break;

            case 4:
                console.log("\n\nAtualizar dados do Cliente\n\n");

                console.log("Digite o ID do Cliente: ");
                id = readlinesync.questionInt('');

                let cliente = clientes.buscarNoArray(id);
                
                if(cliente !== null){

                    console.log(`Editar o Cliente `)

                    tipo = cliente.tipo;
                    switch(tipo){
                        case 1: 
                        console.log("Atualizar o nome: ");
                        nome = readlinesync.question('');
                        console.log("Atualizar o CPF:")
                        cpf = readlinesync.question('')
                        console.log("Atualizar o Telefone:")
                        telefone = readlinesync.question('')
                        console.log("Atualizar o Endereço:")
                        endereco = readlinesync.question('')
                        console.log("Atualizar o Sexo[M/F]:")
                        sexo = readlinesync.question('')
                      
                        const dataNascimentoString = readlinesync.question("Atualiza data de nascimento [dia/mes/ano]: ");  
                        const [dia, mes, ano] = dataNascimentoString.split('/').map(Number);  
                        const dataNascimento = new Date(ano, mes - 1, dia); // Criando a data  

                        if (isNaN(dataNascimento.getTime())) {  
                            console.log("Data de nascimento inválida. Tente novamente.");  
                            return;  
                        } 
                      case 2: 
                      console.log("Atualiza a razão Social: ");
                      razaoSocial = readlinesync.question('');
                      console.log("Atualizar o CNPJ:")
                      cnpj = readlinesync.question('')
                      console.log("Atulizar o Telefone:")
                      telefone = readlinesync.question('')
                      console.log("Atualizar o Endereço:")
                      endereco = readlinesync.question('')
                      console.log("Atualizar a Inscrição Estadual:")
                      inscricaoEstadual = readlinesync.question('')

                      const dataAberturaString = readlinesync.question("Atualizar da abertura do CNPJ [dia/mes/ano]: ");  
                      const [diaPJ, mesPJ, anoPJ] = dataAberturaString.split('/').map(Number);  
                      const dataAbertura = new Date(anoPJ, mesPJ - 1, diaPJ); // Criando a data  

                      if (isNaN(dataAbertura.getTime())) {  
                          console.log("Data de abertura do CNPJ inválida. Tente novamente.");  
                          return;  
                      }  
                      clientes.cadastrarCliente(new PessoaJuridica(clientes.gerarId(), endereco, telefone, dataAbertura, tipo, razaoSocial,cnpj, inscricaoEstadual))
                    }
                }
                
                keyPress();
                break;

            case 5:
                console.log("\nDeletar Cliente\n\n");

                console.log("Digite o ID do Produto: ");
                id = readlinesync.questionInt('');
    
                clientes.deletarCliente(id) 
                
                keyPress();
                break;
        }
    }


}
/* Função com os dados da pessoa desenvolvedora */
export function about(): void{

    console.log("************************************************")
    console.log(" Desenvolvido por: ")
    console.log("Josadaque Ferreira ")
    console.log("github.com/josadack ")
    console.log("************************************************")
}

function keyPress(): void {
    console.log("");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
 
main();