function setusername(username){
    this.username = username;
    console.log("Called");
}
function createuser(username, age){
    setusername.call(this, username);
    this.age = age;
    return this;
}

const user = createuser("Bitan",20);
console.log(user);