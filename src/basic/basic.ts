const message = "Hello!";
//Accessing the property 'toLowerCase'
//on 'message' and the calling it
message.toLowerCase();
//Calling 'message' 
//message();


const announcement = "Hello World!";
//How quickly can you spot the typos?
//announcement.toLocaleLowercase();
//announcement.toLocaleLowercase();

announcement.toLocaleLowerCase();

const value = Math.random() < 0.5 ? "a" : "b"; // 삼항연산자 true : false
if (value !== "b") {
  // 
} else if (value === "b") {
  // Oops, unreachable
}

function flipCoin() {
    // Meant to be Math.random()
    return Math.random() < 0.5;
}

//1. 추론적 타입 지정
let x = 3;
//x = [0,1,null];  //error

//class Animal{}
//class Rhino extends Animal{
//    hasHorn:boolean = true;
//}
//class Elephant extends Animal{
//    hasHorn:boolean = true;
//}
//class Snake extends Animal{
//    hasHorn:boolean = false;
//}

//let zoo = [new Rhino(), new Elephant(), new Snake()]
//Animal[] 추론 추측, 그러나 다른 타입이 지정됨


//2.명시적 타입 지정(Explict Types)

// This is an industrial-grade general-purpose greeter function:
function greet(person:string, date:Date) {
    console.log(`Hello ${person}, today is ${date}!`);
}
   
greet("Brendan", new Date());