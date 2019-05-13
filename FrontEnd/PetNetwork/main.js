window.onload = function () {


    var quickAddBtn = document.getElementById('QuickAdd');

        var newPic = document.getElementById('img-input');

    var AddBtnphoto = document.getElementById('add-img');
    
        var imgDivPhoto = document.querySelector('.photos-add');
        var src = document.getElementById('newPic');
       
       



        quickAddBtn.addEventListener("click", function () {
    // display the form div
    newPic.style.display = "block";
    });

    AddBtnphoto.addEventListener("click", addImg);
    imgDivPhoto.addEventListener("click", removeEntryPhoto);

        var photoRepo = [];


   function Newphoto(src) {
    this.src = src;
   
    }

    function removeEntryPhoto(e) {
		// Remove an entry from the addressbook
		if (e.target.classList.contains('delbtn')) {
			var remID = e.target.getAttribute('data-id');
			photoRepo.splice(remID, 1);
			localStorage['addbook/img'] = JSON.stringify(photoRepo);
            showImg();
		}
	}

      function addImg() {
     
        // format the input into a valid JSON structure
        var obj = new Newphoto(src.value);
        photoRepo.push(obj);
        localStorage['addbook/img'] = JSON.stringify(photoRepo);
        newPic.style.display = "none";
        clearForm();
        showImg();
        
    }
   
    function clearForm() {
		var formFields = document.querySelectorAll('.formFields');
		for (var i in formFields) {
			formFields[i].value = '';
		}
	}



   function showImg() {
    if (localStorage['addbook/img'] === undefined) {
        localStorage['addbook/img'] = '';
    } else {
        photoRepo = JSON.parse(localStorage['addbook/img']);
        // Loop over the array addressBook and insert into the page
        imgDivPhoto.innerHTML = '';
        for (var n in photoRepo) {
            
            var str = '<div class="new-img '+n+'">';
                str += '<img class="myImg" data-id=" '+ n +'"  src='+ photoRepo[n].src+' alt="Nice Photo">';
                str += '<h4 data-id=" '+ n +'" class="delbtn ' +n+'">X</h4>';
                str+= '</div>';
               
        
            imgDivPhoto.innerHTML += str;

        }

        

    }
   
   }
   showImg();

//    var slideDiv = document.getElementById("slide");


//    function addToSlide (){
//     if (localStorage['addbook'] === undefined) {
//         localStorage['addbook'] = '';
//     } else {
//         imgRepo = JSON.parse(localStorage['addbook']);
//         // Loop over the array addressBook and insert into the page
//         //slideDiv.innerHTML = '';
//         for (var n in imgRepo) {
//             var str = '<div class="mySlides fade">';
//            str+= '<div class="numbertext">'+n+' / '+imgRepo.length+'</div>';
//            str+='<img src='+ imgRepo[n].src+' style="width:100%">';
//             str+='<div class="text">Caption Text</div>';
//             str+= '</div>';
        
//             slideDiv.innerHTML += str;

//         }

//     }
   
    
//    }

//    addToSlide();

// 

var AddBtn = document.getElementById('submitPost');
    
var postDiv = document.querySelector('.post-container');
var newpost = document.getElementById('post');






//     quickAddBtn.addEventListener("click", function () {
// // display the form div
// newPic.style.display = "block";
// });

AddBtn.addEventListener("click", addPost);
postDiv.addEventListener("click", removeEntry);

var postRepo = [];


function Post(newpost) {
this.newpost= newpost;


}

function removeEntry(e) {
// Remove an entry from the addressbook
if (e.target.classList.contains('dellbtn')) {
    var remID = e.target.getAttribute('data-id');
    postRepo.splice(remID, 1);
    localStorage['addbook/posts'] = JSON.stringify(postRepo);
    showPost();
}
}

function addPost() {

// format the input into a valid JSON structure
var obj = new Post(newpost.value);
postRepo.push(obj);
localStorage['addbook/posts'] = JSON.stringify(postRepo);
newPic.style.display = "none";
clearForm();
showPost();

}

function clearForm() {
var formFields = document.querySelectorAll('.formFields');
for (var i in formFields) {
    formFields[i].value = '';
}
}



function showPost() {
if (localStorage['addbook/posts'] === undefined) {
localStorage['addbook/posts'] = '';
} else {
postRepo = JSON.parse(localStorage['addbook/posts']);
// Loop over the array addressBook and insert into the page
postDiv.innerHTML = '';
for (var n in postRepo) {
    
    var str = '<div class="new-post '+n+'">';
        str += '<h3 data-id=" '+ n +'">' +postRepo[n].newpost+ '</h3>';
        str += '<h4 data-id=" '+ n +'" class="dellbtn ' +n+'">X</h4>';
        str += '<img id= "like" src="https://freeiconshop.com/wp-content/uploads/edd/like-flat.png"></img>';
        str+= '</div>';
       

    postDiv.innerHTML += str;

}



}

}

showPost();


function modal(e) {
    // Remove an entry from the addressbook
    if (e.target.classList.contains('myImg')) {
        var remID = e.target.getAttribute('data-id');
        modal.style.display = "block";
        modalImg.src = remID.src;
        captionText.innerHTML = this.alt;
    }
    }












// var img = document.querySelectorAll('.myImg');
var img = document.querySelector('.myImg');
img.addEventListener("click", modal);
// Get the modal
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function мodal (){
// Get the image and insert it inside the modal - use its "alt" text as a caption


img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
}
мodal ();
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


}