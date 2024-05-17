let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

const namesB = names.filter(name => name.startsWith("B") );
console.log(namesB);
// or
const namesBalt = names.filter(name => name.charAt(0) === "B");
console.log(namesBalt);

const namesLength = names.map(name => name.length);
console.log(namesLength);

const avgLength = names.reduce((total, name) => total + name.length, 0) / names.length;
console.log(avgLength);