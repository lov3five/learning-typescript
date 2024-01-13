/* 
    Declare a variable: 
    + Explicit type annotation(định nghĩa kiểu dữ liệu)
    let <variable-name>: <type-annotation> = value
    const <variable-name>: <type-annotation> = value 

    + Implicit type annotation (type inference)
    let <variable-name> = value
    const <variable-name> = value


*/
let firstName: string = "Tran";
let lastName: string = "Luong";
//console.log(`Hello ${firstName} ${lastName}`);

interface IUser {
    firstName: string;
    lastName: string;
}

const user: IUser = {
    firstName: "Tran",
    lastName: "Naker",
};
//console.log(`Hello ${user.firstName} ${user.lastName}`);

/* 
    private: chỉ có thể truy cập trong class
    protected: chỉ có thể truy cập trong class và các class kế thừa
    public: có thể truy cập ở bất cứ đâu
    constructor: hàm khởi tạo
*/
class UserAccount {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    private getFullNamePrivate(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public getFullNamePublic(): string {
        return this.getFullNamePrivate();
    }
}

let user1 = new UserAccount("Tran", "Class");
console.log(`Hello ${user1.getFullNamePublic()}`);

// Generics là một cách để tạo ra các thành phần có thể làm việc với nhiều kiểu dữ liệu khác nhau mà không phải thêm nhiều code.
