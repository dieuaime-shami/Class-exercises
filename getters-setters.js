class Temperature{
  constructor(celsius){
    this._celsius=celsius;
  }

  get Fahrenheit(){
    console.log(`${this._celsius *1.8 + 32}`) 
  }
  set Fahrenheit(value){
    if(value===" "){
      throw  'Their is not input' 
    }
    this._celsius=value
  }
}

let input= new Temperature(4);
input.Fahrenheit