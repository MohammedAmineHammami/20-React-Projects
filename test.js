const obj = {};
const toggel = { ...obj, ["name"]: !obj["name"] };
console.log(toggel.name);
