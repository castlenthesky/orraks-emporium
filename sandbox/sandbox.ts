import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

// Make a request for a user with a given ID
instance
  .get("/material/random")
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// interface IUserOptions {
//   firstname?: string;
//   lastname?: string;
//   age?: number;
// }

// class User {
//   firstname: string;
//   lastname: string;
//   age: number;
//   constructor(userOptions?: IUserOptions) {
//     // Set default values and overwrite with user arguments
//     let args = {
//       firstname: "Richard",
//       lastname: "Hastly",
//       age: randbetween(6, 99),
//       ...userOptions,
//     };

//     // Instantiate the user
//     this.firstname = args.firstname;
//     this.lastname = args.lastname;
//     this.age = args.age;
//   }
// }

// let newUser = new User();

// console.info(newUser);

// function randbetween(min: number, max: number): number {
//   // min and max included
//   return ~~(Math.random() * (max - min + 1) + min);
// }
