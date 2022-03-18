function samplePromise(){
    return Promise.resolve("feri")
}

const name = await samplePromise();
console.info(name)
