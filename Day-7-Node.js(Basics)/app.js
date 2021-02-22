const path = require("path")
const fs = require("fs")
const os = require("os")
const { uptime } = require("process")
const url = require("url")
const http = require("http")


// ! PATH
//* Basefile name
// console.log(path.basename(__filename))

//* Directory Name
// console.log(path.dirname(__filename))

//* File Extension
// console.log(path.extname(__filename))

//* Create a path object
// console.log(path.parse(__filename))

//* Creating a path (absolute address)
// console.log(path.join(__dirname,"test","hello.html"))

// ! FS 

//* Create folder
// fs.mkdir(path.join(__dirname,"assets"),{},err=>{
//     if (err) throw err
//     console.log("Folder created!")
// })

//* Create and write to a file
// fs.writeFile(path.join(__dirname,"/assets","hello.txt"),"Hello World", err=>{
//     if (err) throw err
//     console.log("Text File created!")
// })

//* Append into a File
// fs.appendFile(path.join(__dirname,"/assets","hello.txt"),"We are learning Node.js",err=>{
//     if (err) throw err
//     console.log("File appended successfully!")
// })

//* Read a file
// fs.readFile(path.join(__dirname,"/assets","hello.txt"),"utf-8",(err,data)=>{
//     if (err) throw err
//     console.log(data)
// })

//* Rename a file
// fs.rename(path.join(__dirname,"/assets","hello.txt"),path.join(__dirname,"/assets","intro.txt"),err=>{
//     if(err) throw err;
//     console.log("File renamed successfully.")
// })


//* Deleting a file
// fs.unlink(path.join(__dirname,"/assets","intro.txt"),err=>{
//     if(err) throw err
//     console.log("File deleted!")
// })

//* Remove directory
// fs.rmdir(path.join(__dirname,"assets"), err=>{
//     if(err) throw err
//     console.log("Folder deleted!")
// })

//! OS

//* Check platform
// console.log(os.platform())

//* CPU Architecture
// console.log(os.arch())

//* CPU Infos
// console.log(os.cpus())

//* Free memory
// console.log(os.freemem())

//* Total Memory
// console.log(os.totalmem())

//* Home dir
// console.log(os.homedir())

//* Uptime
// console.log(uptime())

//! URL
const myurl = new URL("http://mywebsite.com/index.html?id=100&status=active")

//* Serialized URL
// console.log(myurl.href)

//* Root domain
// console.log(myurl.host)

//* Hostname
// console.log(myurl.hostname)

//* Pathname
// console.log(myurl.pathname)

//* Serialized Queries
// console.log(myurl.search)

//* Parameter object
// console.log(myurl.searchParams)

//* Add parameters
// myurl.searchParams.append("role","student")
// console.log(myurl.searchParams)

//* Looping through the parameters
// myurl.searchParams.forEach((value,name)=>{
//     console.log(`${name} -> ${value}`)
// })

//! HTTP

//* Create Server
// http.createServer((req,res)=>{
//     res.write("Welcome to Node.js");
//     res.end()
// }).listen(5000, ()=>{
//     console.log("Server running...")
// })