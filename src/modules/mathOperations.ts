//4 basic operating functions
function add(a: number, b: number): number{
    return a + b;
}
function substract(a: number, b: number): number{
    return a - b;
}
function multiply(a: number, b: number): number{
    return a * b;
}
function divide(a: number, b: number): number{
    return a / b;
}
export function divide2(a: number, b: number): number{
    return a / b;
}

 export {add, substract, multiply, divide};    //함수앞에 export를 작성하는 것이랑 같다.
