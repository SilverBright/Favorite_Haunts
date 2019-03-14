$(document).ready(function(){
	$("a.ajax_load_haunts").on("click", function(event){
		event.preventDefault();
	})
})

$.ajax({
	method: 'GET',
	url: this.href,
	dataType: 'json'
}).done(function (response){
	console.log("the response is:", response )
	// $("div.haunts-json").append(response)
})
