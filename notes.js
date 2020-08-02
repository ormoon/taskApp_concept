const chalk = require('chalk');
const fs = require('fs');
const filePath = './note.json';


const addNote = function (title, body) {
    var notes = loadNotes();
    var duplicateNotes = notes.filter((data) => {
        return data.title === title;
    })

    // var duplicateNotes = notes.find((note) => note.title === title)

    debugger

    if (duplicateNotes.length > 0) {
        console.log(chalk.red.italic.bold.underline("Note having same title is already created"));
    } else {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.italic.bold("New note has been added"));
    }
}

const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync(filePath, dataJson);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return []
    }

}


const removeNote = function (title) {
    var fileData = loadNotes();
    var check = fileData.filter((info) => {
        return info.title === title;
    });

    // console.log("check >> ",check)
    // console.log("index >>",fileData.indexOf(check[0]))

    var i = fileData.indexOf(check[0]);
    if (i != -1) {
        fileData.splice(i, 1);
        saveNotes(fileData);
        console.log(chalk.green.bold.italic.underline("Data removed successfully!"));
    } else {
        console.log(chalk.red.bold.italic.underline("Note didn't found with given title"));
    }

}


const readNote = (title) => {
    const notes = loadNotes();
    var note = notes.find((data) => data.title === title);
    if (note) {
        console.log(chalk.blue.italic.bold("Title : " + note.title), "\nBody : " + note.body);
    } else {
        console.log(chalk.red.bold("Error! Note not found"));
    }
}

module.exports = {
    addNote,
    removeNote,
    readNote
}

