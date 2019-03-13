function User(name) {
    this.name = name;
    this.profilePic = new Photo(true);
    this.aboutMe = new Story();
    this.album = [];
    this.stories = [];
    this.myEvents = [];

    this.registerToEvent = function (target) {
        this.myEvents.push(target);
        target.registerUser(this);
    }

    this.addFriend = function() {
        // to be defined at a later class
    }

    this.generateAlbum = function() {
        for (var index = 0; index < 10; index++) {
            var image = new Photo();
            this.album.push(image);
        }
    }
    this.generateAlbum();

    this.generateStories = function() {
        for (var index = 0; index < 5; index++) {
            var story = new Story();
            this.stories.push(story);
        }
    }
    this.generateStories();
}