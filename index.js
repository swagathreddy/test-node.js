import fs from "fs";
import http from "http";
import {dirname} from "path";
import { fileURLToPath } from "url";
import path from "path";

const PORT=5000;
const hostname="localhost";
//fs module
const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);
const filepath=path.join(__dirname,"index.html")
const home=fs.readFileSync(filepath,()=>{
    console.log(home);
});
//path module
// const a = path.extname("test2/index.js");
// console.log(a)
// const b=path.basename("/a/dev/test2");
// console.log(b)

//os module
// console.log(os.freemem());
// console.log(os.hostname());

//Third party module- pokemon module
// console.log(pokemon.random());

//basic routing and creating server
const server=http.createServer((req,res)=>{
//requests some kind of url and in response we are getting that webpage
if(req.url==="/"){
    return res.end(home);
}
else if(req.url==="/about"){
    return res.end("<h1>About Page</h1>");
}
else{
    res.end("<h1>Page not Found</h1>")
}
});

//listening is letting us know is server working or not
server.listen(PORT,hostname,()=>{
    console.log(`server is working, http://${hostname}:${PORT}`);
});
