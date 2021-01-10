function Produto(nome, preco, desc = 0.15){
    this.nome = nome;
    this.preco = preco;
    this.desc = desc;

    this.precoFinal = function(){
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Caneta', 8.59)
console.log(p1.nome)

const p2 = new Produto('Geladeira', 2345.98)
console.log(p2.preco)
console.log(p2.precoFinal())
