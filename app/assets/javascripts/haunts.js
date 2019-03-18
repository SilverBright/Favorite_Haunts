$(document).ready(function(){
	console.log("haunts.js has loaded")
	listenForClick()
})

function listenForClick() {
	$("a.ajax_load_haunts").on('click', function(event) {
		event.preventDefault()
		getHaunts()
	})
}

function getHaunts() {
	$.ajax({
		url: 'http://localhost:3000/haunts',
		method: 'get',
		dataType: 'json'
	}).done(function (response) {
		console.log("Here is an array of Haunts:", response)
		
		response.forEach(function(data){
			$("div.haunts").append(
				"<ul>" + "<b>" + data.name + "</b>" + ", " + data.city + ", " + data.state + "<br>" + data.description +"<ul>");
		
		data.comments.forEach(function(comment){
			$("div.haunts").append(
				"<ul><b>A Reviewer Says: </b> " + "'" + comment.content + "'" + "</ul>" );
				})
			});
		});
	event.preventDefault();
	}



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

// Create an instance of a Haunt (JavaScript Object Model)
// class Haunt {
// 	constructor(object) {
// 		this.id = object.id
// 		this.name = object.name
// 		this.description = object.description
// 		this.city = object.city
// 		this.state = object.state
// 	}
// }
