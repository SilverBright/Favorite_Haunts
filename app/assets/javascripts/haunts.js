//Read and load the entire document first
$(document).ready(() => {
	console.log("The document is loaded and ready") 
	console.log("The haunts.js file has loaded")
	listenForGetHauntsClick()
	// listenForSubmitButton()
})

//Event listener for clicking on 'display-ajax-haunts' link
function listenForGetHauntsClick() {
	$('button#get-ajax-haunts').on('click', event => {
		// Prevent the default function of the click event from happening
		event.preventDefault()
		// Display the ajax response on the haunts index page
		// history.pushState(null, null, "haunts")
		// Run the getHaunts ajax function below
		getHaunts()
	})
}

// Ajax function for getting Haunts and Comments
// The ajax request is a 'promise' to return the data to you
function getHaunts() {
	$.ajax({
		url: 'http://localhost:3000/haunts',
		// url: this.url
		method: 'get',
		dataType: 'json'
		// When ajax is 'done' returning the data to you, run a function on it
	}).done( response => {
		console.log("Here is the array of Haunts:", response)
		// loop through the response
		response.map( haunt => {
			const newHaunt = new Haunt(haunt);
			const newHauntHTML = newHaunt.hauntHTML()
			document.getElementById('display-ajax-haunts').innerHTML += newHauntHTML			
				})
			});
		}

// Create an instance of a Haunt using a construtor function (JavaScript Object Model)
class Haunt {
	constructor(haunt) {
		this.id = haunt.id
		this.name = haunt.name
		this.description = haunt.description
		this.city = haunt.city
		this.state = haunt.state
		this.comments = haunt.comments
	}

	// static newHauntForm = function() {
	// return (`
	// 	<strong>New Ajax Haunt Form</strong>
	// 		<form>
	// 			Name: <input id='submit_ajax_haunt' type='text' name='name'></input><br>
	// 			Description: <input type='text' description='description'></input><br>
	// 			City: <input type='text' city='city'></input><br>
	// 			State: <input type='text' state='state'></input><br>
	// 			<input type='submit' />
	// 		</form>
	// 	`)
	// }
}

// Create a prototype of a Haunt to use as many times as you need
Haunt.prototype.hauntHTML = function() {
	// console.log(`Here is a Haunt: ${this.name}`);
	let hauntComments = this.comments.map(comment => {
		return (`
			<p><b>A reviewer said:</b> <i>${comment.content}</i></p>
		`)
	}).join('')
	// console.log("Here is a Comment:", hauntComments )
		return (`
			<div>
				<ol>
					</li>${this.id}: <b>${this.name}</b>, ${this.city}, ${this.state}</li>
					<br>
					</li>${this.description}</li>
					<br>
					<ul>${hauntComments}</ul>
				</ol>
		</div>
	`) 

};

// AJAX POST 


$(function(){
  $("#new_haunt.new_haunt").on("submit", function(event){
  	event.preventDefault();
  	// event.stopPropagation()
    $.ajax({
      type: "POST",
      // url: $(this).attr('action'),
      url: this.action,
      data: $(this).serialize(),
      // dataType: 'json',
      success: function(response) {
        console.log(response)
        	}
		})
	});
});


// $(document).on("click","#new-ajax-haunt", function(event){
//   $("div#new_form").show()
//   event.preventDefault()
//   console.log("You clicked the 'add a haunt' button")
// });


// Display all Haunts under "div.haunts"
		// response.forEach(function(data){
		// 	$("div.haunts").append(
		// 		"<ul>" + "<b>" + data.name + "</b>" + ", " + data.city + ", " + data.state + "<br>" + data.description +"<ul>");
		
		// // Display all the nested Comments for Haunts
		// data.comments.forEach(function(comment){
		// 	$("div.haunts").append(
		// 		"<ul><b>A Reviewer Says: </b> " + "'" + comment.content + "'" + "</ul>" );				
				// })
			// console.log ("You are now on the HAUNTS#INDEX PAGE")
			// });
		// }
	// 	});
// }


