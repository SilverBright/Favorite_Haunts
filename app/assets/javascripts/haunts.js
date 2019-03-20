//Read and load the entire document first
$(document).ready(() => {
	console.log("The document is loaded and ready") 
	console.log("The haunts.js file has loaded")
	listenForClick()
})

//Event listener for clicking on 'ajax_load_haunts' link
// The ajax request is a 'promise' to return the data to you
function listenForClick() {
	$('button#ajax-haunts-button').on('click', (event) => {
		// Prevent the default function of the click event from happening
		event.preventDefault()
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
	}).done((response) => {
		console.log("Here is the array of Haunts:", response)
		// loop through the response
		response.map(haunt => {
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
			});
		}
	// 	});
// }


// Create an instance of a Haunt using a construtor function (JavaScript Object Model)
class Haunt {
	constructor(object) {
		this.id = object.id
		this.name = object.name
		this.description = object.description
		this.city = object.city
		this.state = object.state
		this.comments = object.comments

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
			<div class='haunts'>
			<h3>${this.name}</h3>
			<p>${this.city}, ${this.state}</p>
			<p>${this.description}</p>
			<ul>${hauntComments}</ul>
		</div>
	`) 
};
