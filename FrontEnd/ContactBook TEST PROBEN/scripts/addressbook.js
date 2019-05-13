window.onload = function () {

	// Buttons
	var quickAddBtn = document.getElementById('QuickAdd');
	var quickAddFormDiv = document.querySelector('.quickaddForm')
	var cancelBtn = document.getElementById('Cancel');
	var AddBtn = document.getElementById('Add');
	// Form Fields
	var fullname = document.getElementById('fullname');
	var phone = document.getElementById('phone');
	var address = document.getElementById('address');
	var city = document.getElementById('city');
	var email = document.getElementById('email');
	// Divs etc.
	var self = this;
	var addBookDiv = document.querySelector('.img-wrap');

	quickAddBtn.addEventListener("click", function () {
		// display the form div
		quickAddFormDiv.style.display = "block";
	});

	cancelBtn.addEventListener("click", function () {
		quickAddFormDiv.style.display = "none";
	});

	AddBtn.addEventListener("click", addToBook);



	addBookDiv.addEventListener("click", removeEntry);



	// Storage Array
	var addressBook = [];

	//localStorage['addbook'] = '[{"fullname":"Martin","email":"Martin@mail.com","phone":"93828292","address":"something","city":"Skopje"}]';

	function Contact(fullname, phone, address, city, email) {
		this.fullname = fullname;
		this.phone = phone;
		this.address = address;
		this.city = city;
		this.email = email;
	}

	function addToBook() {
		var isNull = fullname.value != '' && phone.value != '' && address.value != '' && city.value != '' && email.value != '';
		if (isNull) {
			// format the input into a valid JSON structure
			var obj = new Contact(fullname.value, phone.value, address.value, city.value, email.value);
			addressBook.push(obj);
			localStorage['addbook'] = JSON.stringify(addressBook);
			quickAddFormDiv.style.display = "none";
			clearForm();
			showAddressBook();
			modalRead();
			
		}
	}

	function removeEntry(e) {
		// Remove an entry from the addressbook
		if (e.target.classList.contains('delbutton')) {
			var remID = e.target.getAttribute('data-id');
			addressBook.splice(remID, 1);
			localStorage['addbook'] = JSON.stringify(addressBook);
			showAddressBook();
			modalRead();
		}
	}


	function clearForm() {
		var formFields = document.querySelectorAll('.formFields');
		for (var i in formFields) {
			formFields[i].value = '';
		}
	}


	// When the user clicks anywhere outside of the modal, close it


	function showAddressBook() {
		if (localStorage['addbook'] === undefined) {
			localStorage['addbook'] = '';
		} else {
			addressBook = JSON.parse(localStorage['addbook']);
			// Loop over the array addressBook and insert into the page
			addBookDiv.innerHTML = '';
			for (var n in addressBook) {
				var str = '<div class="entry">';
				str += '<div class="name">Name:<p class = "pName">' + n + "  " + addressBook[n].fullname + '</p></div>';
				str += '<div class="email">Mail:<p>' + addressBook[n].email + '</p></div>';
				str += '<div class="phone">Phone:<p>' + addressBook[n].phone + '</p></div>';
				str += '<div class="address">Address:<p>' + addressBook[n].address + '</p></div>';
				str += '<div class="city">City:<p>' + addressBook[n].city + '</p></div>';
				str += '<div id="readBtn" class="read"><a href="#" class="readbutton" data-id="' + n + '">Read</a></div>';
				str += '<div class="update"><a href="#" class="updbutton" data-id="' + n + '">Update</a></div>';
				str += '<div class="del"><a href="#" class="delbutton" data-id="' + n + '">Delete</a></div>';
				str += '</div>';
				addBookDiv.innerHTML += str;




			}



		}
	}

	showAddressBook();

	function modalRead() {

		window.onclick = function (event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}


		// Get the modal
		var modal = document.getElementById('id01');
		const btns = document.querySelectorAll('a[class^=readbutton]')

		btns.forEach(btn => {

			btn.addEventListener('click', viewEntry => {

				if (localStorage['addbook'] === undefined) {
					localStorage['addbook'] = '';
				} else {
					var n = $(viewEntry.target).attr("data-id");
					addressBook = JSON.parse(localStorage['addbook']);
					modal.style.display = "block";
					console.log(addressBook)
					document.getElementById('modalName').innerHTML = addressBook[n].fullname;
					document.getElementById('modalPhone').innerHTML = addressBook[n].phone;
					document.getElementById('modalAddress').innerHTML = addressBook[n].address;
					document.getElementById('modalCity').innerHTML = addressBook[n].city;
					document.getElementById('modalEmail').innerHTML = addressBook[n].email;
				}

			});

		});

	}
	modalRead();





}



