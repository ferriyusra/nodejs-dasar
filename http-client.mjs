import https from 'https'

const endpoint = "https://hookb.in/aB0jdkxOyaUXQ9kkE3oW"
const request = https.request(endpoint, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`recieve data ${data.toString()}`)
    })
});

const body = JSON.stringify({
    firstName: "feri",
    lastName: "yusra"
})

request.write(body);
request.end();