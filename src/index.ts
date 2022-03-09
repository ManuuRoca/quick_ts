import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Insert your first name: ', (firstName) => {
    rl.question('Insert your last name: ', (lastName) => {
        console.log(`${firstName} ${lastName}`);
    });
});
