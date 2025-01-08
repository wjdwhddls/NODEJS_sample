//The primitives
const str:string = "Hello";  // string - 문자열, ""로 감싸서 표현
const num:number = 10;       // number - 숫자,  int,double 등 세부 타입은 없음
const bool:boolean = true;    // boolean - 논리,  true,false

console.log(str.length); // 5
console.log(str.toUpperCase()); // HELLO

//String, Number, Boolean 는 타입 명시법과 다르니 주의
const wrapperStr = new String(num); //강제 형변환