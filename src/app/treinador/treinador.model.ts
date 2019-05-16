export class Treinador{
 
    
    private nome : string;
    public getNome() : string {
        return this.nome;
    }
    public setNome(n : string) {
        this.nome = n;
    }
    
    private idade : number;
    public getIdade() : number {
        return this.idade;
    }
    public setIdade(v : number) {
        this.idade = v;
    }
    

    constructor(nome : string,idade: number){
        this.setNome(nome);
        this.setIdade(idade);
    }

 
    
}