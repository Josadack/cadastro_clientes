import { Cliente } from "./Clientes";

export class PessoaJuridica extends Cliente{

   private _razaoSocial:string;
   private _cnpj:string;
   private _inscricaoEstadual:string;


	constructor(id:number, endereco:string, telefone:string, data:Date, tipo:number ,razaoSocial: string, cnpj: string, inscricaoEstadual: string) {
		super(id, endereco, telefone, data, tipo)
        this._razaoSocial = razaoSocial;
		this._cnpj = cnpj;
		this._inscricaoEstadual = inscricaoEstadual;
	}


	public get razaoSocial(): string {
		return this._razaoSocial;
	}

	public get cnpj(): string {
		return this._cnpj;
	}

	public get inscricaoEstadual(): string {
		return this._inscricaoEstadual;
	}

	public set razaoSocial(value: string) {
		this._razaoSocial = value;
	}

	public set cnpj(value: string) {
		this._cnpj = value;
	}

	public set inscricaoEstadual(value: string) {
		this._inscricaoEstadual = value;
	}

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
        console.log(`Razão Social do cliente: ${this._razaoSocial}`);  
        console.log(`CNPJ do cliente: ${this._cnpj}`);  
        console.log(`Inscrição Estadual: ${this._inscricaoEstadual}`);  
        console.log(`Data de abertura do CNPJ: ${this.data}`);
        
    }

}