const objA = {
	name : "John"
}

const objB = objA;

objB.name = "Moshe";

console.log(objA.name); //?? // by reference

