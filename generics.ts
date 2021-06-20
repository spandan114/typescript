//single type
function myfunction<Type>(xyz:Type):Type{
    return xyz
}

let gen = myfunction<string>("spandan")
console.log(gen)

//multi type

const multiType = <S,N>(name:S,rollno:N) =>{
console.log(name,rollno)
}

multiType<string,number>("spandan",37)

//generics in oops

class student<t1,t2>{
    fullname:t1;
    rollno:t2;

    constructor(fullname:t1,rollno:t2){
        this.fullname=fullname
        this.rollno=rollno
    }

    showinfo():void{
        console.log(this.fullname,this.rollno)
    }

}

const student1 = new student<string,number>("spandan",37)

student1.showinfo()

//generic in interface

interface info<t1,t2>{
    name:t1,
    roll:t2
}

let studentinfo:info<string,number> = {
    name:"spandan",
    roll:37
}