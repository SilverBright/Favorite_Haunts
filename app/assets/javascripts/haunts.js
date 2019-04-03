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
		  const stateA = a.state.toUpperCase(); // ignore upper and lowercase 
		  const stateB = b.state.toUpperCase();

		  //compare State variables
		  if (stateA < stateB) {
		  	// return less than 0 if a is less than b
		    return -1; 
		  }
		  if (stateA > stateB) {
		  	// return greater than 0 if a is greater than b
		    return 1;
		  }

		  // assign Names to variables a & b to use for comparison
		  const nameA = a.name.toUpperCase();
		  const nameB = b.name.toUpperCase();

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
		console.log("Here is the array of Haunts:", haunts);
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
		this.users = haunt.users
		this.comments = haunt.comments
	};
}

Haunt.prototype.hauntHTML = function() {
	const hauntUsers = this.users.map(user => {
		return (`
			<li class="haunt-user">${user.email}said:</li>
			`)
		});

	const hauntComments = this.comments.map(comment => {
		return (`
			<li class="haunt-comment"><b><i>${comment.content}</i></li>
		`)
	}).join('');
		return (`
			<li>
				<p><b>${this.name}</b>, ${this.city}, ${this.state}</p>	
				<p>${this.description}</p>	
				<ul>${hauntUsers}</ul>
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
