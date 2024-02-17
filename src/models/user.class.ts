export class User {
    firstName: any;
    lastName: string;
    birthdate: number;
    email: string;
    street: string;
    zipCode: string;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : "";
        this.lastName = obj ? obj.lastName : "";
        this.birthdate = obj ? obj.birthdate : "";
        this.email = obj ? obj.email : "";
        this.street = obj ? obj.street : "";
        this.zipCode = obj ? obj.zipCode : "";
        this.city = obj ? obj.city : "";
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthdate: this.birthdate,
            email: this.email,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
        };
    }

}