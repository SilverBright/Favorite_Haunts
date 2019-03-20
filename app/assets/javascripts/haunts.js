//Read and load the entire document first
$(document).ready(() => {
	console.log("The document is loaded and ready") 
	console.log("The haunts.js file has loaded")
	listenForClick()
})

//Event listener for clicking on 'display-ajax-haunts' link
// The ajax request is a 'promise' to return the data to you
function listenForClick() {
	$('button#display-ajax-haunts').on('click', event => {
		// Prevent the default function of the click event from happening
		event.preventDefault()
		// Display the ajax response on the haunts index page
		history.pushState(null, null, "haunts")
		// Run the getHaunts ajax function below
		getHaunts()
	})
}

// Ajax function for getting Haunts and Comments
function getHaunts() {
	$.ajax({
		url: 'http://localhost:3000/haunts',
		method: 'get',
		dataType: 'json'
		// When ajax is 'done' returning the data to you, run a function on it
	}).done( response => {
		console.log("Here is the array of Haunts:", response)
		// loop through the response
		response.map( haunt => {
			const newHaunt = new Haunt(haunt);
			const newHauntHTML = newHaunt.hauntHTML()
			document.getElementById('haunts').innerHTML += newHauntHTML

		// Display all Haunts under "div.haunts"
		// response.forEach(function(data){
		// 	$("div.haunts").append(
		// 		"<ul>" + "<b>" + data.name + "</b>" + ", " + data.city + ", " + data.state + "<br>" + data.description +"<ul>");
		
		// // Display all the nested Comments for Haunts
		// data.comments.forEach(function(comment){
		// 	$("div.haunts").append(
		// 		"<ul><b>A Reviewer Says: </b> " + "'" + comment.content + "'" + "</ul>" );				
				})
			console.log ("You are now on the HAUNTS#INDEX PAGE")
			});
		}
	// 	});
// }


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
	// Add a clickable <a href> with the .id of the haunt title that redirects to the show page
		return (`
			<div class='haunts'>
			<a href="haunts/${this.id}"><h3>${this.name}</h3></a>
			<p>${this.city}, ${this.state}</p>
			<p>${this.description}</p>
			<ul>${hauntComments}</ul>
		</div>
	`) 

};

