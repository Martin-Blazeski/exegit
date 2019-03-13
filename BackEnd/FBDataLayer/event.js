function Event() {
    this.registeredUsers = [];
    this.name = "Event bla bla";

    this.registerUser = function(target) {
        this.registeredUsers.push(target);
    }
}