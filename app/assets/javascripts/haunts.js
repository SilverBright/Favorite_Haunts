$(document).ready(() => {
	console.log("The document is loaded and ready") 
	listenForGetHauntsClick();
	listenForSortedHaunts() // get haunt by ajax button
	createHaunt(); // ajax post function
});

function listenForGetHauntsClick() {
	$('button#get-ajax-haunts').on('click', event => {
		event.preventDefault();
		getHaunts();
	});
}

function listenForSortedHaunts() {
	$('button#sort-by-state-then-name').on('click', event => {
		event.preventDefault();
		sortedHaunts();
	});
}

function sortedHaunts() {
	$.ajax({
		url: 'http://localhost:3000/haunts',
		method: 'get',
		dataType: 'json'
	}).done(haunts => {
		// console.log("Here is the array of Haunts:", response);
		document.getElementById('display-ajax-haunts').innerHTML = ""
		//sort by State
		haunts.sort(function(a, b) {
		// console.log(a, b)

		// assign States to variables a & b to use for comparison
		  var stateA = a.state.toUpperCase(); // ignore upper and lowercase 
		  var stateB = b.state.toUpperCase();

		 // assign Names to variables a & b to use for comparison
		  var nameA = a.name.toUpperCase();
		  var nameB = b.name.toUpperCase();

		  //compare State variables
		  if (stateA < stateB) {
		  	// return less than 0 if a is less than b
		    return -1; 
		  }
		  if (stateA > stateB) {
		  	// return greater than 0 if a is greater than b
		    return 1;
		  }

		  //compare Name variables
		  if (nameA < nameB) {
		    return -1;
		  }
		  if (nameA > nameB) {
		    return 1;
		  }

		  // Return 0 if a equals b
		  return 0;
		});

		haunts.map(haunt => {
			const newHaunt = new Haunt(haunt);
			const newHauntHTML = newHaunt.hauntHTML();
			document.getElementById('display-ajax-haunts').innerHTML += newHauntHTML			
		});
	});	
}

function getHaunts() {
	$.ajax({
		url: 'http://localhost:3000/haunts',
		method: 'get',
		dataType: 'json'
	}).done( haunts => {
		// console.log("Here is the array of Haunts:", response);
		document.getElementById('display-ajax-haunts').innerHTML = ""
		haunts.map( haunt => {
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
	      	success: function(haunt) {
	      		document.getElementById('display-ajax-haunts').innerHTML = ""
	   			$("#new_haunt").each (function() { this.reset(); });
		    	const newHaunt = new Haunt(haunt);
		    	const newHauntHTML = newHaunt.hauntHTML();
		    	document.getElementById("display-ajax-haunts").innerHTML += newHauntHTML
	        	}
			});
	    return false;
	});
};
