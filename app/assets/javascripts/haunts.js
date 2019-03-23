//Read and load the entire document first
$(document).ready(() => {
	console.log("The document is loaded and ready") 
	console.log("The haunts.js file has loaded")
	listenForGetHauntsClick()
})

//Event listener for clicking on 'get-ajax-haunts' link
function listenForGetHauntsClick() {
	$('button#get-ajax-haunts').on('click', event => {
		// Prevent the default function of the click event from happening
		event.preventDefault()
		// Run the getHaunts ajax function below
		getHaunts()
	})
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
		console.log("Here is the array of Haunts:", response)
		//clear the DOM when someone clicks the button
		document.getElementById('display-ajax-haunts').innerHTML = ""
		// loop through the response
		response.map( haunt => {
			const newHaunt = new Haunt(haunt);
			const newHauntHTML = newHaunt.hauntHTML()
			// display the response on the DOM
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
    $.ajax({
      type: "POST",
      url: this.action,
      data: $(this).serialize(),
      dataType: 'json',
      success: function(response) {
   		$("#new_haunt.new_haunt").each (function() { this.reset(); });
        console.log("Here is the haunt you just submitted", response)
        // reuse the same loop from getHaunts() to display the haunt
	    const newHaunt = new Haunt(response)
	    const newHauntHTML = newHaunt.hauntHTML()
	    document.getElementById("display-ajax-haunts").innerHTML += newHauntHTML
        	}
		})
    // releases the button
    return false;
	});
});
