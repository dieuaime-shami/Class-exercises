
// Fields: name, #password
// Add a method checkPassword(pw) that checks if it matches #password.
// Show how private fields can’t be accessed directly outside the class.

class User{
  name;
  #password;
  constructor(name,password){
    this.name=name;
    this.#password=password;
  }

  CheckPassword(pw){
    return this.#password === pw;
  }
}

let per= new User("Shami","cooking");
console.log(per.name); // Shami
console.log(per.password);//undefined
console.log(per.CheckPassword("cooking"))// true
console.log(per.CheckPassword("cookings"))// false
