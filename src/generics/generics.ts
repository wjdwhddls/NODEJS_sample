// Generics

// Echo Command
// 아래와 같이 각 타입별 메서드를 구현한다면, 너무 많은 메서드를 정의해야 한다
function indentity(arg: number): number{
   return arg;
}
function indentity1(arg: string): string{
   return arg;
}
function indentity2(arg: boolean): boolean{
   return arg;
}


//잘못하여 any타입을 사용한다면, 타입검증의 목적을 달성하기 어려움
// function indentity(arg: any): any{
//     //...
    

//     //
//     return arg;
// }

let arg = 10;
indentity(arg);


// 비효율적인 코드 해결 방법
// Use Generics
function identityWithGenerics<Type>(arg: Type): Type{
    return arg;
}
function identityWithGenerics2<T>(arg: T): T{
    return arg;
}
function identityWithGenerics3<T,U>(arg: T, arg2: U): [T,U] {
    return [arg, arg2];
}
// Type이라는 키워드가 해당 함수 내 동일한 키워드들을 통일시킴
let input = "10";
const result = identityWithGenerics2(input);
console.log("type of input : " + typeof input);
console.log("type of input : " + typeof result);
console.log("result of using generics : " + result);

const result2 = identityWithGenerics3(20,"Hello");
console.log(result2);