$(document).ready(() => {
	console.log("The document is loaded and ready") 
	listenForGetHauntsClick();
	createHaunt();
});

function listenForGetHauntsClick() {
	$('button#get-ajax-haunts').on('click', event => {
		event.preventDefault();
		getHaunts();
	});
}

function getHaunts() {
	$.ajax({
		url: 'http://localhost:3000/haunts',
		method: 'get',
		dataType: 'json'
	}).done( haunt => {
		// console.log("Here is the array of Haunts:", response);
		document.getElementById('display-ajax-haunts').innerHTML = ""
		response.map( haunt => {
			const newHaunt = new Haunt(haunt);
			const newHauntHTML = newHaunt.hauntHTML();
			document.getElementById('display-ajax-haunts').innerHTML += newHauntHTML			
		});
	});
}

class Haunt {
	constructor(haunt) {
		this.id = haunt.id
		this.name = haunt.name
		this.description = haunt.description
		this.city = haunt.city
		this.state = haunt.state
		this.comments = haunt.comments
	};
}

Haunt.prototype.hauntHTML = function() {
	const hauntComments = this.comments.map(comment => {
		return (`
			<li class="haunt-comment"><b>A reviewer said:</b> <i>${comment.content}</i></li>
		`)
	}).join('');
		return (`
			<li>
				<p><b>${this.name}</b>, ${this.city}, ${this.state}</p>	
				<p>${this.description}</p>				
				<ul>${hauntComments}</ul>
			</li>
	`) 
};

// AJAX POST REQUEST

function createHaunt() {	
  	$("#new_haunt").on("submit", function(event){
  		event.preventDefault();
    	$.ajax({
	     	type: "POST",
	      	url: this.action,
	      	data: $(this).serialize(),
	      	dataType: 'json',
	      	success: function(response) {
	      		document.getElementById('display-ajax-haunts').innerHTML = ""
	   			$("#new_haunt").each (function() { this.reset(); });
		    	const newHaunt = new Haunt(response);
		    	const newHauntHTML = newHaunt.hauntHTML();
		    	document.getElementById("display-ajax-haunts").innerHTML += newHauntHTML
	        	}
			});
	    return false;
	});
};
