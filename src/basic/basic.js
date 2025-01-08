var message = "Hello!";
//Accessing the property 'toLowerCase'
//on 'message' and the calling it
message.toLowerCase();
//Calling 'message' 
//message();
var announcement = "Hello World!";
//How quickly can you spot the typos?
//announcement.toLocaleLowercase();
//announcement.toLocaleLowercase();
announcement.toLocaleLowerCase();
var value = Math.random() < 0.5 ? "a" : "b"; // 삼항연산자 true : false
if (value !== "b") {
    // 
}
else if (value === "b") {
    // Oops, unreachable
}
function flipCoin() {
    // Meant to be Math.random()
    return Math.random() < 0.5;
}
