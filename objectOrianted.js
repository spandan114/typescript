//readonly
//static
//public
//private
//protected
class student {
    constructor(fullName, rollno) {
        this.fullName = fullName;
        this.rollno = rollno;
        this.fullName = fullName;
        this.rollno = rollno;
    }
    // setinfo(fullName:string,rollno:string){
    //     this.name=fullName;
    //     this.rollno=rollno
    // }
    getinfo() {
        console.log(`name is ${this.fullName} & rollno ${this.rollno} & ${student.school}`);
    }
}
//    readonly name:string;
//     rollno:string;
student.school = "xyz public school";
class welcome extends student {
    constructor(fullName, rollno) {
        super(fullName, rollno);
    }
    welcomestd() {
        console.log(`welcome ${this.fullName}`);
    }
}
let std1 = new welcome("spandan", "37");
// std1.setinfo("spandan","37")
std1.getinfo();
std1.welcomestd();
