import { LightningElement } from "lwc";

export default class App extends LightningElement {

    nome;
    peso;
    altura;
    resultado;

  

    handleOnChangeNome(event){
        
        this.nome = event.detail.value;
        console.log('Nome: ' + this.nome);
    }

  
    handleOnChangePeso(event){
      this.peso = event.detail.value;
      console.log('Peso: ' + this.peso);
    }

   
    handleOnChangeAltura(event){
      this.altura = event.detail.value;
      console.log('Altura: ' + this.altura);
    }
  calculaImc(){
this.resultado = parseInt(this.peso) / parseInt(this.altura);
console.log('IMC:' + this.resultado);
}

}

