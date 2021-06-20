<p align="center">
<img src="https://miro.medium.com/max/276/1*7QwRdAxb9Q8wejjQJiFJsQ.png" >
</p>

# Typescript

  Install typescript cli
```
npm install -g typescript
```
Compile Typescript
```
tsc filename.ts
```
 Watch ts file 
 ```
 tsc filename.ts --watch or tsc filename.ts -w
```
Target Version 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020'
```
tsc filename.ts --target es2020 --watch
```
Change output file name
```
tsc filename.ts --target es2020 --outfile site.js --watch
```
Change directry name
```
tsc filename.ts --target es2020 --outDir dist --watch
```
## Data type in TS

We can define spacific data type in typescript but we cant do same thing in JS
we can declare variable using let , var or const 
- Boolean
- Number
- String
- Object
- Array
- Tuple
- Void
```
let age = 30;
let isBlack = true

let age = '30'  // error
let isBlack = 'true'  // error
```
We cant change type in TS. Here we cant change age as a character or we cant change isBlack in any other data type

```
const circ = (diameter) =>{
    return diameter * Math.PI
}
console.log(circ('hello')) // Here we pass any type of data but that dosen't make any sence . we cant calculate diameter of str
----------------------------------
const circ = (diameter:number) =>{
    return diameter * Math.PI
}
console.log(circ(243))  // But here we can pass only numbers
```
## Objects & Array in TS

If you declare a array with same datatype then you cant push another datatype in that array
```
let names = ['spandan' , 'aman' ,'shankar' ,'lala'];  //only char
let numbers = [5,6,3,4,62];                           // only num
let mixed = ['spandan' , 3 ,'shankar',4 ,'lala'];     // mixed

names.push('rehan');
mixed.push(3);

 name.push(4); // Error
```
similarly for objects also you cant add other type of dataType
```
let human = {
    name:'spandan',
    age: 19,
    sex:'male'
}

human.age = 20;
human.age = 'sj';
```
## Explicit Type in TS
We know that define dataType is important in typescript . so Explicitly we define Datatype of a variable 

```
let age: number;  // you can't change datatType of age again
let character:string;
let isLogedin: boolean;
let human: string[] = [];  //only string
let mixed: (string!number!biilian)[] = [];  //only string
```
## Dinamic (any) Type in TS

```
let age : any;
age = "spandan";
console.log(age);
```
## Better Workflow
Initialize TS configuration
``` 
tsc --init 
```
- rootDir // input files where TS file pesent
-outDir   // output files 
- "include":["Folder name"]  // add this in end of tsconfic
It means exicute those ts file which is inside Specifiedfolder

## Function

```
let greet:Function;

greet = () =>{
    console.log("hello")
}
greet();
```
Optional parameter
```
const add = (a:number,b:number,c?: number | string) => {
    console.log(a+b);
    console.log(c);
}
add(5,8)
```
### Function Signatures
```
let greet: (a:string,b:string) =>void;
greet = (name : string,greetings:string) =>{
    console.log(`${name} says ${greetings}`)
}
greet("spandan","hello");

let calc: (n1:number, n2:number) =>number; 
calc = (num1:number,num2:number)=>{
    return num1+num2;
}
calc(1,6);
```

