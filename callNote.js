const notes = require('./notes');
const yargs = require('yargs');



yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: "This is the body of the note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
})



yargs.command({
    command: 'remove',
    describe: 'for removing note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})


yargs.command({
    command: 'read',
    describe: 'Read a particular note',
    builder: {
        title: {
            describe: 'This is the title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})


yargs.parse();
