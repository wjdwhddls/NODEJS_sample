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

// 간단 테스트 패턴 연습
function identityWithGenerics1<Type>(arg: Type): Type{
    return arg;
}

function isNumber(value: any){
    return typeof value === 'number' && !isNaN(value);
}
function isString(value: any){
    return typeof value === 'string' ;
}

// given = 테스트에 필요한 초기 데이터를 설정 ->Mock 모의객체를 만들어서 사용하게 된다
const testValue1: number = 20;
const testValue2: string = "Hi";
const testValue3: number[] = [1,20];

// when1 = 테스트를 실행하는 부분
const numberIdentity = identityWithGenerics1(testValue1);

// then1 = 결과를 검증하고 출력하는 부분
console.log(`Input type is : ${typeof testValue1}`);
console.log(`Output type is : ${typeof numberIdentity}`);
console.log(`Is number : ${isNumber(numberIdentity)}`);  //true

// when2 = 테스트를 실행하는 부분
const stringIdentity = identityWithGenerics1(testValue3);

// then2 = 결과를 검증하고 출력하는 부분
console.log(`Input type is : ${typeof testValue2}`);
console.log(`Output type is : ${typeof stringIdentity}`);
console.log(`Is stirng : ${isString(stringIdentity)}`);  //true

// when3 = 테스트를 실행하는 부분
const arrayIdentity = identityWithGenerics1(testValue3);

// then3 = 결과를 검증하고 출력하는 부분
console.log(`Input type is : ${typeof testValue3}`);
console.log(`Output type is : ${typeof arrayIdentity}`);
console.log(`Is stirng : ${Array.isArray(arrayIdentity)}`); //true