
export abstract class Cliente {
    private _id:number;
    private _endereco:string;
    private _telefone:string;
    private _data:Date;
    private _tipo:number;

    constructor(id:number, endereco:string, telefone:string, data:Date, tipo:number) {
        this._id = id;
        this._endereco = endereco;
        this._telefone = telefone;
        this._data = data;
        this._tipo = tipo;
    }

	public get id(): number {
		return this._id;
	}

	public get endereco(): string {
		return this._endereco;
	}

	public get telefone(): string {
		return this._telefone;
	}

	public get data(): Date {
		return this._data;
	}

    public get tipo(): number {
		return this._tipo;
	} 

	public set id(value: number) {
		this._id = value;
	}

	public set endereco(value: string) {
		this._endereco = value;
	}

	public set telefone(value: string) {
		this._telefone = value;
	}

	public set data(value: Date) {
		this._data = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

    //Metodos Visualizar
    public visualizar():void{
        let tipo:string;
        switch(this._tipo){
            case 1:
                tipo = "Pessoa Física"
                break;
            case 2:
                tipo = "Pessoal Jurídica"
                 default:
                     console.log('Tipo inválido')
        }

        console.log('-----------------------------');
        console.log(       'Dados do Cliente      ');
        console.log('-----------------------------');
        console.log(`ID ${this._id}`);
        console.log(`Endereço: ${this._endereco}`);
        console.log(`Telefone: ${this._telefone}`);
        console.log(`É um Cliente : ${this.tipo}`);
    }

}