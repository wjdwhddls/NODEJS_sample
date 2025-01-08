var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//1. 추론적 타입 지정
var x = 3;
//x = [0,1,null];  //error
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasHorn = true;
        return _this;
    }
    return Rhino;
}(Animal));
var Elephant = /** @class */ (function (_super) {
    __extends(Elephant, _super);
    function Elephant() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasHorn = true;
        return _this;
    }
    return Elephant;
}(Animal));
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasHorn = false;
        return _this;
    }
    return Snake;
}(Animal));
var zoo = [new Rhino(), new Elephant(), new Snake()];
//Animal[] 추론 추측, 그러나 다른 타입이 지정됨
//2.명시적 타입 지정(Explict Types)
// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date, "!"));
}
greet("Brendan", new Date());
