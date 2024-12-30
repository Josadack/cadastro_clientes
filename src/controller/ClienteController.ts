import { Cliente } from "../model/Clientes";
import { ClienteRepository } from "../repository/ClienteRepository"

export  class ClienteController implements ClienteRepository{

    private listaCliente = new Array<Cliente>();

    public id:number= 0;


    cadastrarCliente(cliente: Cliente): void {
        this.listaCliente.push(cliente);
        console.log("Cliente cadastro com sucesso!");
    }


    listarTodosClientes(): void {
        this.listaCliente.forEach(clientes => clientes.visualizar());
    }


    consultarClientesPorId(id: number): void {
        const buscaCliente = this.buscarNoArray(id);

        if(buscaCliente !== null){
           buscaCliente.visualizar();
        }else{
            console.log("\n Cliente não encontrado!")
        }
    }


    atualizarCliente(cliente: Cliente ): void {
        const buscaCliente = this.buscarNoArray(cliente.id);

        if(buscaCliente !== null){
            this.listaCliente[this.listaCliente.indexOf(buscaCliente)] = cliente;
            console.log(`Cliente foi Atulizado com sucesso!`);
        
       }else{
        console.log("\nProduto não encontrada")
       }
    }


    deletarCliente(id: number): void {
        const buscaCliente = this.buscarNoArray(id);

        if(buscaCliente !== null){
            this.listaCliente.splice(this.listaCliente.indexOf(buscaCliente), 1);
            console.log(`Cliente foi Atulizado com sucesso!`);
        
       }else{
        console.log("\nProduto não encontrada")
       }
    }


    //Métodos Auxiliares
    public gerarId():number{
       return ++ this.id;
    }

    public buscarNoArray(id: number): Cliente | null{
        for(let cliente of this.listaCliente){
            if(cliente.id === id)
                return cliente;
        }
        return null;
    }
}