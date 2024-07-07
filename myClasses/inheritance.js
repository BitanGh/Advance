class user {
    constructor (username){
        this.username = username;
    }


}

class admin extends user{
    constructor(username, role){
        super(username);
        this.role = role;}

        print(){
            console.log(`Username is ${this.username}`);
            console.log(`Role is ${this.role}`);
        }
}

const user1 = new admin("Bitan","Co-leader")
user1.print()