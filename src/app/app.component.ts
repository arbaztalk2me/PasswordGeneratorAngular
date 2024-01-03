import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'randompass';
  length=0;
  password:string=""
  letters:boolean=false;
  digit:boolean=false;
  symbol:boolean=false;

  handleChangeText(event:any){
    let getnum=parseInt(event.target.value);
    if(!isNaN(getnum)){
      this.length=getnum
    }else{
      this.length=0
    }
   
    
  }

  handleLetter(){
    this.letters=!(this.letters)
  }

  handleDigit(){
    this.digit=!(this.digit)
  }
  handleSymbol(){
    this.symbol=!(this.symbol)
  }

  handleSubmit(){
    this.password=""
    let genpass="";
    let alpha="abcdefghijklmnopqrstuvwxyz";
    let dig="1234567890";
    let sym="!@#$%^&*()";
    if(this.letters){
      genpass+=alpha
    }
    if(this.digit){
      genpass+=dig;
    }
    if(this.symbol){
      genpass+=sym
    }
console.log(genpass)
    for(let i=0;i<this.length;i++){
      console.log(Math.floor(Math.random()*genpass.length))
      this.password+=genpass[Math.floor(Math.random()*genpass.length)]
    }


  }


}
