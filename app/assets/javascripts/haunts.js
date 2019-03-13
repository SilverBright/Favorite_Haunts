//the document (our index page) needs to be fully loaded before we can display our ajax results
$(document).ready(function(){
	$("a.ajax_load_haunts ").on("click", function(event) {
	alert("You clicked this link")
	event.preventDefault();
	})
})






$(function () {
	console.log('haunts.js is loaded')
	listenForClick()
});

//hijack the click event for <button id='haunts-data'> on haunts.html.erb so you can insert an ajax request
function listenForClick() {
	$('button#haunts-data').on('click', function (event) {
		//stop the default function of that click, which would cause the browser to reload
		event.preventDefault()
		//this is the name of the ajax request created below
		getHaunts()
	});
}

//This is the ajax request
function getHaunts() {
	$.ajax({
		url: 'http://localhost:3000/haunts',
		method: 'get',
		dataType: 'json'
		}).done(function (data) {
			console.log("Here are all the Haunt JSON objects:", data)
		}
	)}


	

// class Haunt {
// 	constructor(obj) {
// 		this.id = obj.id
// 		this.name = obj.name
// 		this.city = obj.city
// 		this.state = obj.state
// 		this.description = obj.description
// 	}
// }