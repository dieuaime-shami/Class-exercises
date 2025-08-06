
class Book{
  constructor(title,author,pages){
    this.title=title;
    this.author=author;
    this.pages=pages;
  }

  describe(){
    console.log(`Title: ${this.title}, Author:${this.author}, Pages:${this.pages}`)
  }
}

let book1= new Book("Hard-work","Shami",34);
book1.describe();
let book2= new Book("Smart-work","Great",200);
book2.describe();