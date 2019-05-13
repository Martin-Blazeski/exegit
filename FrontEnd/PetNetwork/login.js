var modal = document.getElementById('id01');
var signIn = document.getElementById('green');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

    signIn.addEventListener("click", function () {
    // display the form div
    modal.style.display = "block";
    
    });


    // function modalRead() {

    


    // Get the modal
    
   
    

    // btns.forEach(btn => {

    //     btn.addEventListener('click', viewEntry => {

    //         if (localStorage['addbook'] === undefined) {
    //             localStorage['addbook'] = '';
    //         } else {
    //             var n = $(viewEntry.target).attr("data-id");
    //             addressBook = JSON.parse(localStorage['addbook']);
    //             modal.style.display = "block";
    //             console.log(addressBook)
    //             document.getElementById('modalName').innerHTML = addressBook[n].fullname;
    //             document.getElementById('modalPhone').innerHTML = addressBook[n].phone;
    //             document.getElementById('modalAddress').innerHTML = addressBook[n].address;
    //             document.getElementById('modalCity').innerHTML = addressBook[n].city;
    //             document.getElementById('modalEmail').innerHTML = addressBook[n].email;
    //         }

    //     });

    // });

    // }
    // modalRead();

// Create a registration system



// Create a registration system
var objPeople = [
	
	{
		username: 'martin',
		password: '12345678'
	}
]




// login functionality
function login() {
	// retreive data from username and store in username variable
	var username = document.getElementById('inputName').value
	// retreive data from password and store in password variable
    var password = document.getElementById('inputPass').value

    
    

	// loop through all the user pbjects and confrim if the username and password are correct
	for(var i = 0; i < objPeople.length; i++) {
		// check to 
        if(username == objPeople[i].username && password == objPeople[i].password)
         {
            window.location.replace("signin.html");
            
            
   
			console.log(username + ' is logged in!!!')
			// stop the statement if result is found true - this was a return in the video, break is best practice here
			break
		} else {
			// error if username and password don't match
			console.log('incorrect username or password')
		}
    }
  
} 
login();


// register functionality
function registerUser() {
	// store new users username
	var registerUsername = document.getElementById('newUsername').value
	// store new users password
	var registerPassword = document.getElementById('newPassword').value
	// store new user data in an object
	var newUser = {
		username: registerUsername,
		password: registerPassword
	}
	// loop throught people array to see if the username is taken, or password to short
	for(var i = 0; i < objPeople.length; i++) {
		// check if new username is equal to any already created usernames
		if(registerUser == objPeople[i].username) {
			// alert user that the username is take
			alert('That username is alreat in user, please choose another')
			// stop the statement if result is found true
			break
		// check if new password is 8 characters or more
		} else if (registerPassword.length < 8) {
			// alert user that the password is to short
			alert('That is to short, include 8 or more characters')
			// stop the statement if result is found true
			break
		}
	}
	// push new object to the people array
	objPeople.push(newUser)
	// console the updated people array
	console.log(objPeople)
}










}



