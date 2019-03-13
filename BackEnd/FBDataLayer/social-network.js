function SocialNetwork(name) {
    this.name = name;
    this.users = [];
    this.events = [];

    this.generateUsers = function() {
        for (var index = 0; index < 50; index++) {
            var user = new User(names[getRandomNumber(0, 4)] + "-" + index);
            if (calculatePercent(30)) {
                user.registerToEvent(this.events[getRandomNumber(0, 4)]);
            }
            this.users.push(user);
        }
    }
     
    this.generateEvents = function() {
        for (var index = 0; index < 5; index++) {
            var event = new Event();
            this.events.push(event);
        }
    }
    this.generateEvents();
    this.generateUsers();
}