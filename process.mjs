import process from 'process';

process.addListener('exit', (exitCode) => {
    console.info(`nodejs exit with code ${exitCode}`);
})

console.info(process.version)
console.table(process.argv)
console.table(process.report)

process.exit(1)
console.info("hello")