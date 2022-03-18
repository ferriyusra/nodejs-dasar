import util from 'util';

const firstName = "feri";
const lastName = "yusra";
console.info(util.format("nama : %s %s", firstName, lastName));

const person = {
    firstName: "feri",
    lastName: "f"
}

console.info(util.format("Person : %j", person));
