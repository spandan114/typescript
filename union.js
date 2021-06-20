let isOpen = false;
let fullname = "spandan";
let mark = 20;
let xyz = 100;
console.log(xyz);
function sayhello(fullname) {
    console.log(fullname);
}
sayhello("spandan");
const El = document.getElementById("demo");
let setWidth = (width) => {
    if (typeof width === "number") {
        El.style.width = width + "px";
    }
    if (typeof width === "string") {
        El.style.width = width;
    }
};
let setHeight = (height) => {
    if (typeof height === "number") {
        El.style.height = height + "px";
    }
    if (typeof height === "string") {
        El.style.height = height;
    }
};
setWidth("100vh");
setHeight("50vh");
