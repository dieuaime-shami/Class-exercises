
//  Use a Static Method
// Create a class MathUtils with static methods: add(a, b), subtract(a, b), randomInt(min, max)
// Call the methods without creating an object.

class MathUtils{

  static add(a,b){
    return a+b;
  }
  static subtract(a,b){
    return a-b;
  }
  static randomInt(min,max){
    return Math.floor(Math.random() * (min + max))
  }
}

console.log(MathUtils.add(4,3));
console.log(MathUtils.subtract(4,3));
console.log(MathUtils.randomInt(4,3));