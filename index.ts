let firstName: string = "Tran"
let lastName: string = "Luong"
console.log(`Hello ${firstName} ${lastName}`);

interface IUser {
    firstName: string,
    lastName: string
}

const user: IUser = {
    firstName: "Tran",
    lastName: "Luong"
}

console.log(`Hello ${user.firstName} ${user.lastName}`);