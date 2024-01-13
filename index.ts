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
    static: thuộc tính tĩnh
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
//console.log(`Hello ${user1.getFullNamePublic()}`);

class Caculator {
  static sum(a: number, b: number): number {
    return a + b;
  }

  static mul(a: number, b: number): number {
    return a * b;
  }

  static div(a: number, b: number): number {
    return a / b;
  }

  static sub(a: number, b: number): number {
    return a - b;
  }
}

let sum = Caculator.sum(1, 2);

//console.log(sum);

function wrapInArray(obj: string[] | string) {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}

//console.log(wrapInArray("hello"));

/* 
    Generics:
    Generics cung cấp các biến cho các loại. Một ví dụ phổ biến là một mảng. 
    Một mảng không có generics có thể chứa bất cứ thứ gì. 
    Một mảng có Generics có thể mô tả các giá trị mà mảng chứa.
*/

// type StringArray = string[]
type StringArray = Array<string>
let stringArray: StringArray = ['a', 'b']
console.log(stringArray);


// type NumberArray = number[]
type NumberArray = Array<number>
let numberArray: NumberArray = [2,3,4,6]

// type ObjectWithNameArray = {name: string}[]
type ObjectWithNameArray = Array<{ name: string }>
let objWithNameArray: ObjectWithNameArray = [
  {name: 'Luong'},
  {name: 'GitHub'}
]


