// Pure JS (Vanilia JS) : Object only -> Protype-based programming

// object
let robot = { //Members
    //Property(속성)
    name: "R2-D2",
    model: "AstroMech",
    status: "Active",

    //Method(행동)
    performTask: function(task: string){
        console.log(`${this.name} is performing ${task}`);
    },
    updateStatus: function(newStatus: string){
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}`)
    }
}

let robot2 = { //Members
    //Property(속성)
    name: "A2-D2",
    model: "Asefdf",
    status: "Active",

    //Method(행동)
    performTask: function(task: string){
        console.log(`${this.name} is performing ${task}`);
    },
}

let robot3 = { //Members
    //Property(속성)
    name: "A1-D2",
    model: "Ad-22",
    status: "Active",

    //Method(행동)
    performTask: function(task: string){
        console.log(`${this.name} is performing ${task}`);
    },
}

// usage with "." dot operator
console.log(robot.name) // Accessing Property
robot.performTask("Getting ready to move") //Calling Method

// 추가와 수정에 비효율적**