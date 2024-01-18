/* • Crie uma classe de uma abstração;

• Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;

• Crie pelo menos três instâncias de objetos;

• No repositório do curso crie uma branch chamada oo_js e armazene o código do exercício.

• Envie o link do repositório através da plataforma.  */

function Animal(especie, nomeCietifico, pesoAproximado, tamanhoAproximado, estimativaDeVida, habitatNatual ){
    this.especie = especie;
    this.nomeCietifico = nomeCietifico;
    this.pesoAproximado = pesoAproximado;
    this.tamanhoAproximado = tamanhoAproximado;
    this.estimativaDeVida = estimativaDeVida;
    this.habitatNatual = habitatNatual;
}

function Repteis (especie, nomeCietifico, pesoAproximado, tamanhoAproximado, estimativaDeVida, habitatNatual){
    
    Animal.call(this, especie, nomeCietifico, pesoAproximado, tamanhoAproximado, estimativaDeVida, habitatNatual);

}

function Mamiferos (especie, nomeCietifico, pesoAproximado, tamanhoAproximado, estimativaDeVida, habitatNatual){
    
    Animal.call(this, especie,  nomeCietifico, pesoAproximado, tamanhoAproximado, estimativaDeVida, habitatNatual);

}

const mambaNegra = new Repteis ("Serpente", "Dendroaspis polylepis", 1.6, 2.5, "11 anos", "Savanas e nas colinas rochosas" );
console.log(mambaNegra);

const jacareAcu = new Repteis("Jacaré", "Melanosuchus niger", 300.0, 2.8, "80 anos", "Rios pouco movimentados, lagos ou igarapés");
console.log(jacareAcu);

const tartarugaMestica = new Repteis ("Tartaruga", "Caretta caretta", 160.0, 1.3, "47 a 67 anos", "Águas costeiras, ilhas ou baías");
console.log(tartarugaMestica);


const tigreSiberiano = new Mamiferos("Tigre", "Panthera tigris tigris", 423.0, 3.7, "10 a 15 anos", "Florestas de coníferas");
console.log(tigreSiberiano);

const panda = new Mamiferos("Urso", "Ailuropoda melanoleuca", 120.0, 1.0, "20 anos", "Florestas de bambu");
console.log(panda);

const gorilaOcidental = new Mamiferos("Gorila", "Gorilla gorilla", 160.0, 1.6, "30 a 40 anos", "Áreas tropicais e subtropicais da África Central");
console.log(gorilaOcidental);

