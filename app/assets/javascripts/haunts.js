//Read and load the entire document before beginning
$(document).ready(() => {
	console.log("The document is loaded and ready") 
	console.log("The haunts.js file has loaded")
	// run the function below
	listenForGetHauntsClick();
	createHaunt();
});

//Event listener function for clicking on 'get-ajax-haunts' link
function listenForGetHauntsClick() {
	$('button#get-ajax-haunts').on('click', event => {
		// Prevent the default function of the click event from happening
		event.preventDefault();
		// Run the getHaunts ajax function below
		getHaunts();
	});
}

// Ajax function for getting Haunts and Comments
// The ajax request is a 'promise' to return the data to you
function getHaunts() {
	$.ajax({
		url: 'http://localhost:3000/haunts',
		method: 'get',
		dataType: 'json'
		// When ajax is 'done' returning the data to you, run a function on it
	}).done( response => {
		console.log("Here is the array of Haunts:", response);
		//clear the DOM when someone clicks the button
		document.getElementById('display-ajax-haunts').innerHTML = ""
		// loop through the response
		response.map( haunt => {
			const newHaunt = new Haunt(haunt);
			const newHauntHTML = newHaunt.hauntHTML();
			// display the response on the DOM
			document.getElementById('display-ajax-haunts').innerHTML += newHauntHTML			
				});
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
		// nested resource
		this.comments = haunt.comments
	};
}

// Create a prototype of a Haunt to save on memory, use as many times as you need
Haunt.prototype.hauntHTML = function() {
	// console.log(`Here is a Haunt: ${this.name}`);
	// loop through nested comments for each haunt
	let hauntComments = this.comments.map(comment => {
		return (`
			<p><b>A reviewer said:</b> <i>${comment.content}</i></p>
		`)
	}).join('');
	console.log("Here is a Comment:", hauntComments )
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

// AJAX POST REQUEST

// $(function() {
function createHaunt() {	
  $("#new_haunt.new_haunt").on("submit", function(event){
  	event.preventDefault();
    $.ajax({
      type: "POST",
      // this = new_haunt.new_haunt 
      url: this.action,
      // The serialize() method creates a URL encoded text string by serializing form values.
      data: $(this).serialize(),
      dataType: 'json',
      success: function(response) {
      	document.getElementById('display-ajax-haunts').innerHTML = ""
      	// clear the form after submit
   		$("#new_haunt.new_haunt").each (function() { this.reset(); });
        console.log("Here is the haunt you just submitted", response);
        // reuse the same loop from getHaunts() to display the haunt, as a single haunt
	    const newHaunt = new Haunt(response);
	    const newHauntHTML = newHaunt.hauntHTML();
	    document.getElementById("display-ajax-haunts").innerHTML += newHauntHTML
        	}
		});
    // releases the submit button
    return false;
	});
};
