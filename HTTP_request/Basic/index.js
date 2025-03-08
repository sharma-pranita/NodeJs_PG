// const math = require("./math");

// console.log(`Add is ${math.add(4,2)}`);

// console.log(`Add is ${math.sub(4,2)}`);

const fs = require("fs");


//Sync
// const write = fs.writeFileSync("./welcome.txt","Welcome to Node.js");


//Async
//  const write = fs.writeFile("./Async.txt","Welcome to Node",(err)=>{
// })

//Sync- read
// const contact = fs.readFileSync("Contact.txt","utf-8");
// console.log(contact);


//Append sync

// fs.appendFileSync("Contact.txt",new Date().getDate().toLocaleString());


//Copy file

// fs.copyFileSync("Contact.txt","Abhinav.txt")

//Delete File
// fs.unlinkSync("welcome.txt");

//Check stat
// console.log(fs.statSync("Contact.txt"));

//Make directory
// fs.mkdirSync("New");
fs.mkdirSync("a/b/c",{recursive:true})