// function sum(num1:number,num2:number):void{
//     console.log(num1+num2)
// }
// const sum = function(num1:number,num2:number):void{
//     console.log(num1+num2)
// }
// const sum = (num1:number,num2:number):void =>{
//     console.log(num1+num2)
// }
// sum(1,2);
//set optional parameter = lastname?:string
//set default parameter = lastname="spandan"
function welcome(firstname, message, lastname = "joshi") {
    console.log(`${message} ${firstname + " " + lastname}`);
}
welcome("spandan", "welcome");
//rest operator
const marksfunc = (name, ...marks) => {
    console.log(name);
    console.log(marks.join(","));
};
marksfunc("spandan", 10, 20, 30, 40);
