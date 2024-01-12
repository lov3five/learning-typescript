let firstName: string = "Tran"
let lastName: string = "Luong"
//console.log(`Hello ${firstName} ${lastName}`);

interface IUser {
    firstName: string,
    lastName: string
}

const user: IUser = {
    firstName: "Tran",
    lastName: "Naker"
}
//console.log(`Hello ${user.firstName} ${user.lastName}`);

class UserAccount {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    private getFullNamePrivate(): string {
        return `${this.firstName} ${this.lastName}`
    }
    
    public getFullNamePublic(): string {
        return this.getFullNamePrivate()
    }
}


let user1 = new UserAccount("Tran", "Class")
console.log(`Hello ${user1.getFullNamePublic()}`);
