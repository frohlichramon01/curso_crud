import fs from "fs"; //ES6

// const fs = require("fs");
const DB_FILE_PATH = "db"

console.log("[CRUD]");

function create(content:string){
    fs.writeFileSync(DB_FILE_PATH, content)
    return content;
}

create("Hoje eu vou fazer X222 com:crud");