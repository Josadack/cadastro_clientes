
export interface Cliente {

    cadastrarCliente(cliente:Cliente):void;
    listarTodosClientes():void;
    consultarClientesPorId(id:number):void;
    atualizarCliente(cliente:Cliente):void;
    deletarCliente(id:number):number;
    
}