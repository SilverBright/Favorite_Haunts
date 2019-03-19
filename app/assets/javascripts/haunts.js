//Read and load the entire document first
$(document).ready(function(){
	console.log("The document is loaded and ready") 
	console.log("The haunts.js file has loaded")
	listenForClick()
})

//Event listener for clicking on 'ajax_load_haunts' link
// The ajax request is a 'promise' to return the data to you
function listenForClick() {
	$('button#ajax-haunts-button').on('click', function(event) {
		// Stop the button from automatically clicking
		event.preventDefault()
		// Run the getHaunts ajax function below
		getHaunts()
	})
}

// Ajax function for getting Haunts and Comments
function getHaunts() {
	$.ajax({
		url: 'http://localhost:3000/haunts',
		// url: this.href,
		method: 'get',
		dataType: 'json'
		// When ajax is 'done' returning the data to you, run a function on it
	}).done(function (response) {
		console.log("Here is the array of Haunts:", response)
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


// Create an instance of a Haunt (JavaScript Object Model)
class Haunt {
	constructor(object) {
		this.id = object.id
		this.name = object.name
		this.description = object.description
		this.city = object.city
		this.state = object.state
	}
}


Haunt.prototype.hauntHTML = function() {
	console.log(`Here is a Haunt: ${this.name}`);
	// let hauntObjects = this.haunts.forEach(haunt => {
		return (`
			<div class='haunts'>
			<h3>${this.name}</h3>
		</div>
			`)
	// }) 
};









// Load the document
// $(document).ready(function(){
// 	$("a.ajax_load_haunts").on("click", function(event){
// 		$.ajax({
// 		method: 'GET',
// 		url: this.href,
// 		dataType: 'json'
// 	}).done(function (response){
// 		console.log("Here is an array of Haunts:", response)
		
// 		response.forEach(function(data){
// 			$("div.haunts").append(
// 				"<ul>" + "<b>" + data.name + "</b>" + ", " + data.city + ", " + data.state + "<br>" + data.description +"<ul>");
		
// 		data.comments.forEach(function(comment){
// 			$("div.haunts").append(
// 				"<ul><b>A Reviewer Says: </b> " + "'" + comment.content + "'" + "</ul>" );
// 				})
// 			});
// 		});
// 	event.preventDefault();
// 	})
// })
