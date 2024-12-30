import { Cliente } from "./Clientes";

export class PessoaFisica extends Cliente{

   private _nome:string;
   private _cpf:string;
   private _sexo:string;


	constructor(id:number, nome:string, endereco:string, telefone:string, data:Date, tipo:number, cpf: string, sexo: string) {
        super(id, endereco, telefone, data, tipo);
		this._nome = nome;
        this._cpf = cpf;
		this._sexo = sexo;

	}

    public get nome(): string {
		return this._nome;
	}

	public get cpf(): string {
		return this._cpf;
	}

	public get sexo(): string {
		return this._sexo;
	}

	public set cpf(value: string) {
		this._cpf = value;
	}

	public set sexo(value: string) {
		this._sexo = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}


    //Calcular Idade
    public calcularIdade():number{
        const hoje = new Date();
        let idade = hoje.getFullYear() - this.data.getFullYear();
        const mes = hoje.getMonth() - this.data.getMonth();

        if(mes < 0 || (mes === 0 && hoje.getDate() < this.data.getDate())){
            idade--;
        }
        return idade;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Nome do cliente: ${this._nome}`);
        console.log(`CPF do cliente: ${this._cpf}`);
        console.log(`Sexo: ${this._sexo}`);
        console.log(`Idade do cliente: ${this.data}`)
        
    }

}