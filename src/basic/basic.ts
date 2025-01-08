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
