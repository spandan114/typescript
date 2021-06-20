//readonly
//static
//public
//private
//protected


class student{
//    readonly name:string;
//     rollno:string;
    
    static school:string = "xyz public school"

    constructor(public fullName:string, readonly rollno:string){
        this.fullName=fullName;
        this.rollno=rollno
    }

    // setinfo(fullName:string,rollno:string){
    //     this.name=fullName;
    //     this.rollno=rollno
    // }

    getinfo(){
        console.log(`name is ${this.fullName} & rollno ${this.rollno} & ${student.school}`)
    }
}

class welcome extends student{
    constructor(fullName:string, rollno:string){
        super(fullName,rollno)
    }
    
    welcomestd(){
        console.log(`welcome ${this.fullName}`)
    }
}

let std1 = new welcome("spandan","37");

// std1.setinfo("spandan","37")
std1.getinfo()
std1.welcomestd()