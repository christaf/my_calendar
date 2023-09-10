class User {
    id: string;
    email: string;
    displayName: string;

    constructor(id: string, email: string, displayName: string) {
        this.id = id;
        this.email = email;
        this.displayName = displayName;
    }

    // Getter methods
    getId(): string {
        return this.id;
    }

    getEmail(): string {
        return this.email;
    }

    getDisplayName(): string {
        return this.displayName;
    }

    // Setter methods
    setDisplayName(newName: string): void {
        this.displayName = newName;
    }

}

export default User;