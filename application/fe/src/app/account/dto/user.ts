export class User {
    public id: number;

    constructor(
        public email: string,
        public plainPassword: string,
        public firstname: string,
        public lastname: string
    ) {}
}