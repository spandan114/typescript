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
