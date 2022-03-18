import dns from "dns/promises";

const address = await dns.lookup("https://jak-stik.ac.id/")
console.info(address.address)
console.info(address.family)
