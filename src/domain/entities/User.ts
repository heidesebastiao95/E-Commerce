export class User {
    public name: string;
    public email: string;
    public password: string;
    public role?:string;

    constructor(
        name:string,email:string,
        password:string, role?: string
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}