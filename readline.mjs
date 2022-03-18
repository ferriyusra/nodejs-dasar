import process from 'process'
import readline from 'readline'

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("nama kamu ?", (name) => {
    console.info(`halo ${name}`)
    input.close()
});

