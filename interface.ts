//blueprint of object (similar like mongoose model) 
//use for validating object
interface User{
    id:number;
    name:string;
    email:string;
    isNew?:boolean;
}

//single obj
let single:User = {
    id:1,
    name:"spandan",
    email:"spandanj685@gmail.com",
}

let multiple:User[] =[
    {
        id:1,
        name:"spandan",
        email:"spandanj685@gmail.com",
        isNew:true
    },
    {
        id:2,
        name:"spandan",
        email:"spandanj685@gmail.com",
        isNew:true
    }
]

//interface in function

const adduser = (user:User) =>{
    multiple.push(user)
}

adduser(
    {
        id:3,
        name:"spandan",
        email:"spandanj685@gmail.com",
        isNew:true
    }
)

console.log(multiple)