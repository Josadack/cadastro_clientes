import { Cliente } from "../model/Clientes";

export interface ClienteRepository {

    cadastrarCliente(cliente:Cliente):void;
    listarTodosClientes():void;
    consultarClientesPorId(id:number):void;
    atualizarCliente(cliente:Cliente):void;
    deletarCliente(id:number):void;
    
}