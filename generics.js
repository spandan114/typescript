//single type
function myfunction(xyz) {
    return xyz;
}
let gen = myfunction("spandan");
console.log(gen);
//multi type
const multiType = (name, rollno) => {
    console.log(name, rollno);
};
multiType("spandan", 37);
//generics in oops
class student {
    constructor(fullname, rollno) {
        this.fullname = fullname;
        this.rollno = rollno;
    }
    showinfo() {
        console.log(this.fullname, this.rollno);
    }
}
const student1 = new student("spandan", 37);
student1.showinfo();
let studentinfo = {
    name: "spandan",
    roll: 37
};
