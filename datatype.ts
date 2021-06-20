//DATA TYPE
//boolian
let isDilogOpen: boolean = true;
console.log(isDilogOpen)
//number
let marks: number = 10;
console.log(marks)
//string
let fullName: string = `spandan joshi ${marks}`;
console.log(fullName)
//object
let user:object = {
    name:"spandan",
    age: 21
}
console.log(user)
//array
let arraystr: string[] = ["1","2"];
let arraynum: number[] = [1,2,3];
let arrayany: any[] = [1,"2",3];
let arrgenric: Array<string> = ["1","2"]

//tuppel
let userarr:[string,number] = ["spandan",10]
console.log(userarr);

let userarrobj:[object] = [{name:"spandan"}]

//void
function sayhii():void{
    console.log("hii")
}
sayhii()

//any
let anydata: any = ["a",1,{"name":"spandan"}]

//undefined & null

let a:undefined = undefined;
let b:null = null;

//unknown

let z : unknown = "spandan"
