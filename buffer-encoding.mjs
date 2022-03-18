const buffer = Buffer.from("ferri", "utf8");
console.info(buffer.toString())
console.info(buffer.toString("hex"))
console.info(buffer.toString("base64"))

const bufferBase64 = Buffer.from("ZmVycmk=", "base64");
console.info(bufferBase64.toString())