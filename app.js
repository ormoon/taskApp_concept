
const callnote = require('./callNote');
var fs = require('fs');

var chalk = require('chalk');
var yargs = require('yargs');




// function write() {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./text.txt', "Hi! I'm from Nepal", (err, done) => {
//             if (!err) {
//                 resolve("Over-writting the content in the file is success\n")
//                 append();
//             } else {
//                 reject("Error during writing to the file => ", err)
//             }
//         })
//     })
// }

// write() //write is task so we handle it through promise and other task should be handle either by promise or call back
//     .then(resolve => {
//         console.log(resolve)
//     })
//     .catch(reject => {
//         console.log(reject)
//     })




// //other fs operation are rename for renaming, readFile for reading file, appendFile for appending content to the file and unlink for deleting file




// console.log(chalk.blue.bold("Welcome Arjun, use chalk modules for coloring the text in node"));

// console.log("argument vector value =>" + process.argv)
// console.log("argument passed through terminal =>" + process.argv[2])//present data as a array


// //all the custimization yargs task should be done at the top

// yargs.version('1.1.0');//customizing yargs version

// //customizing yargs
// yargs.command({
//     command: "add",
//     describe: "Adding new note",
//     handler: () => console.log(chalk.green.bold.italic("New note has been added successfully"))
// })

// yargs.command({
//     command: 'remove',
//     describe: 'removing a note',
//     handler: () => console.log(chalk.red.bold("Note has been deleted successfully!"))
// })

// yargs.command({
//     command: 'read',
//     describe: "reading a note",
//     builder: {
//         title: {
//             describe: 'No title',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: (argv) => console.log(chalk.bgCyan('Note has been read successfully '), argv)
// })

// yargs.command({
//     command: 'list',
//     describe: 'Listing all the notes',
//     handler: () => console.log(chalk.yellow.inverse("The notes that you created are:..."))
// })



// if (yargs.ships > 3 && yargs.distance < 53.5) {
//     console.log(yargs.argv)
//     console.log('Plunder more riffiwobbles!')
// } else {
//     console.log('Retreat from the xupptumblers!')
// }


// yargs.command({
//     command: 'buy',
//     describe: 'Add book to the cart',
//     builder: {
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         },
//         body: {
//             describe: 'Note body',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: (argv) => {
//         console.log(chalk.italic.bold.underline.rgb(87, 45, 20)('Book has been successfully added to the cart\n '), "Title : " + argv.title, "\n Body : " + argv.body)
//     }
// })



// // console.log(yargs.argv)//present data as a object or
// yargs.parse()


// console.log("------------------------------------------------------------------------");
// //json
// const book = {
//     title: "DSA",
//     author: "unknown"
// };
// console.log("JSON format => ", book);
// var str = JSON.stringify(book);
// console.log("String format => ", str);
// console.log("Convert string to json object => ", JSON.parse(str));
// console.log("Title :", book.title)


// console.log("-------------------------------")

// function readFile(filePath, name, age) {
//     fs.readFile(filePath, 'UTF-8', (err, data) => {
//         if (!err) {
//             let jsonData = JSON.parse(data)
//             console.log(jsonData);
//             jsonData.name = name;
//             jsonData.age = age;
//             let jsonStr = JSON.stringify(jsonData);
//             console.log(jsonStr);
//             fs.writeFile(filePath, jsonStr, (err, done) => {
//                 if (!err) {
//                     console.log(chalk.green.italic.bold("Data has been updated successfully"));
//                 } else {
//                     console.error("Error during writing data to the file");
//                 }
//             })

//         } else {
//             console.error("File doesn't exists")
//         }
//     })
// }

// readFile('./data.json', 'ormoon', 23);

// const event = {
//     name: 'Birthday party',
//     printGuest: function () {
//         console.log("Welcome to the " + this.name);
//     }
// }

// event.printGuest();


// const event = {
//     name: 'Birthday party',
//     printGuest: () => {
//         console.log("Welcome to the " + this.name);
//     }
// }

// event.printGuest();


const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    // getTasksToDo() {
    //     const tasksToDo = this.tasks.filter((data) => {
    //         return data.completed === false
    //     })
    //     return tasksToDo;
    // }
    //OR
    getTasksToDo() {
        return this.tasks.filter((data) => { return data.completed === false })
    }
}

console.log(tasks.getTasksToDo());
