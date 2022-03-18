import {URL} from 'url';

const p = new URL("https://jak-stik.ac.id/")

console.info(p.toString())
console.info(p.href)
console.info(p.protocol)
console.info(p.host)