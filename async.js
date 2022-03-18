function samplePromise(){
    return Promise.resolve("feri")
}

async function run(){
    const name = await samplePromise();
    console.info(name)
}

run()
