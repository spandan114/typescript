//single obj
let single = {
    id: 1,
    name: "spandan",
    email: "spandanj685@gmail.com",
};
let multiple = [
    {
        id: 1,
        name: "spandan",
        email: "spandanj685@gmail.com",
        isNew: true
    },
    {
        id: 2,
        name: "spandan",
        email: "spandanj685@gmail.com",
        isNew: true
    }
];
//interface in function
const adduser = (user) => {
    multiple.push(user);
};
adduser({
    id: 3,
    name: "spandan",
    email: "spandanj685@gmail.com",
    isNew: true
});
console.log(multiple);
