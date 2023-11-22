const myArr = [0,5,0,4,6,1,8,]
const myHero = ["mom","dad","sis"]
const AmyArr2 = new Array (1,2,3,4,5)

console.log(myArr[1]);

myArr.push(6)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.shift()
console.log(myArr)

myArr.unshift(9)
console.log(myArr)

console.log(myArr.includes(9));
console.log(myArr.indexOf(6));

const newArr = myArr.join()

console.log(myArr)
console.log(newArr);

console.log("A", myArr);
const myn1 = myArr.slice(2,5)
console.log(myn1);
console.log("B", myArr);