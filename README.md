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
 Recompile ts file automatically
 ```
 tsc filename.ts -w
```

## Type in TS

We can define spacific data type in typescript but we cant do same thing in JS
we can declare variable using let , var or const 

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
similarly for pbjects also you cant add other type of dataType
```
let human = {
    name:'spandan',
    age: 19,
    sex:'male'
}

human.age = 20;
human.age = 'sj';
```
