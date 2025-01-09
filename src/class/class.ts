//Class 이용  --> 붕어빵 틀

class Robot { //Members
    //Property 또는 Field(속성, 필드)
    private name: string;
    private model: string;
    protected status: string = "Active";

    //Constructor(생성자)
    constructor(name: string, model: string){
        this.name = name;
        this.model = model;
    };

    //Getter for name
    public getName():string{
        return this.name;        
    }
    //Getter for name
    public getModel():string{
        return this.model;        
    }
    //Method(행동)
    performTask(task: string){
        console.log(`${this.name} is performing ${task}`);
    }
    ;
    updateStatus(newStatus: string){
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}`)
    };
}

// Create Instance of the Robot class;
let r1 = new Robot("R2-fd", "opeinf");
let r2 = new Robot("R3-fd", "opeinffewwe");
let r3 = new Robot("R4-fd", "opeinffae");

// Accessing fields and Calling methods
console.log(r1.getName);
console.log(r2.getModel);
//console.log(r3.status);

r1.performTask("Charging");
r2.performTask("Explorering");
r3.updateStatus("On Repair");

// No-args Constructor
class Pet{
    category: string = "Cat";
    name: string = "Chu";

    //기본 생성자
    //constructor(){}
}

let p1 = new Pet();
console.log(p1.name);

class User{
    //[필드 부분]
    username: string; //타입만을 표기하는 경우
    email: string;
    job: string = "Student"; //기본값을 주는 경우

    //[생성자 부분]
    constructor(username: string, email: string){
        this.username = username; //매개변수로 초기화
        this.email = email;
    }

    //[메서드 부분]
    study(): void{
        console.log(`${this.username} is studying`);
    }
}

//[객체 생성] (new 키워드와 arguments 입력)
let user1 = new User("홍길동", "hong@afdsf.co.kr");
let user2 = new User("김철수", "kim@afdsf.co.kr");

//[객체의 사용,접근] (. 도트연산자 사용)
//1. 인스턴스 자체 접근
console.log(user1) //출력: User{username: '홍길동', email: '...'}
//2. 인스턴스의 세부 필드 접근
console.log(user2.username); //출력: 김철수
//3. 메서드 호출
user1.study();
user2.study();

//클래스의 상속
class CleaningRobot extends Robot { //Members
    //Property 또는 Field(속성, 필드)
    cleaningSchedule: string[];

    //Constructor(생성자)
    constructor(name: string, model: string, cleaningSchedule: string[]){
        super(name,model)
        this.cleaningSchedule = cleaningSchedule;
    };

    //Method(행동)
    override performTask() {
        console.log(`${this.getName()} is cleaning according to the schedule ${this.cleaningSchedule.join(",")}.`);
    }

}
class CookingRobot { //Members
    //Property 또는 Field(속성, 필드)
    name: string;
    model: string;
    availableMenus: string[];
    status: string = "Active";

    //Constructor(생성자)
    constructor(name: string, model: string, cleaningSchedule: string[]){
        this.name = name;
        this.model = model;
        this.availableMenus = cleaningSchedule;
    };
    //Method(행동)
    performTask(task: string){
        console.log(`${this.name} is performing ${task}`);
    }
    ;
    updateStatus(newStatus: string){
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}`)
    };
    performCleaning(){
        console.log(`${this.name} is cooking according to the menus ${this.availableMenus.join(",")}.`);
    }

}

// 접근 제어자 Visivility Modifier / Access Modifier
// public   - protected - private
// (default)
//public : 모든 클래스에서 접근 가능(기본값)
//protected : 같은 클래스와 자식 클래스에서 접근 가능
//private : 해당 클래스 내에서만 접근 가능

let c1 = new CleaningRobot("ABC", "Prime", ["Sun","Mon"]);
console.log(c1.cleaningSchedule);
c1.performTask()
console.log(c1.getName())


// Interface
interface UserDTO{
    id: number;
    name: string;
    email: string;
    createAt: Date;
}

// API 응답 형태를 정의하는 경우엔
interface ApiResponse{
    success: boolean;
    data: UserDTO;
    message?: string;
}