class username {
    constructor (username){
        this.username = username;
    }

    print(){
        console.log(`Username is ${this.username}`);
    }
}

const user = new username("Bitan")
user.print()