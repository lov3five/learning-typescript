let firstName2: string = 'Tran'
let lastName2: string = 'Luong'
let fullName: string = firstName2 + ' ' + lastName2
//console.log(fullName);

// Number
let age: number = 22

// Boolean
let isMale: boolean = true

// Print method like Python 😎
const print2 = (input: any) : any => {
    console.log(input)
}
//print2(isMale)

// Array
const numberArray: (number)[] = [1,2,3,4,5]
//numberArray.push('6') // Error: this is type number

numberArray.push(6)
console.log(numberArray);

numberArray = [6,7,8,9,10]; // Error: Assignment to constant variable.
