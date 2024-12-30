import readlinesync = require('readline-sync')

export function main(){

    let opcao: number;

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

                keyPress();
                break;

            case 2:
                console.log("\nListar Todos os Clientes");
                
                keyPress();
                break;

            case 3:
                console.log("\n\nConsultar Cliente por ID\n\n");

                keyPress();
                break;

            case 4:
                console.log("\n\nAtualizar dados do Cliente\n\n");
                
                keyPress();
                break;

            case 5:
                console.log("\nDeletar Cliente\n\n");
                
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