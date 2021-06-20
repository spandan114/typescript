let isOpen: false = false;
let fullname: string = "spandan";
let mark: number = 20;

let xyz: string | number = 100;
console.log(xyz);
function sayhello(fullname: string | number) {
  console.log(fullname);
}

sayhello("spandan");

const El = document.getElementById("demo");

let setWidth = (width: number | string) => {
  if (typeof width === "number") {
    El.style.width = width + "px";
  } 
  if(typeof width === "string") {
    El.style.width = width;
  }
};

let setHeight = (height: number | string)=>{
  if (typeof height === "number") {
    El.style.height = height + "px";
  }
  if(typeof height === "string"){
    El.style.height = height;
  }
}


setWidth("100vh")
setHeight("50vh")