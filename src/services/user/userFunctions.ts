import { argon2i } from "argon2-ffi";

enum UserRole {
  user,
  manager,
  administrator,
  developer,
  superuser,
}

export class User {
  username: string;
  password: string;
  email: string;
  role: UserRole;
  title: string;
  avartarURL: string;
  firstname: string;
  lastname: string;

  constructor(useroptions: {
    username: string;
    password: string;
    email: string;
    role?: UserRole;
    firstname?: string;
    lastname?: string;
    title?: string;
  }) {
    this.username = useroptions.username;
    this.password = hash(useroptions.password);
    this.email = useroptions.email;
    this.role = useroptions.role;
    this.firstname = useroptions.firstname;
    this.lastname = useroptions.lastname;
    this.title = useroptions.title;
  }
}

function hash(password: string): string {
  return `Hashed_${password}`;
}

const user = new User({
  username: "castlenthesky",
  password: "password",
  email: "whatever@gmail.com",
});
console.info(user);
