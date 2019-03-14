$(document).ready(function(){
	$("a.ajax_load_haunts").on("click", function(event){
		$.ajax({
		method: 'GET',
		url: this.href,
		dataType: 'json'
	}).done(function (response){
		console.log("Here is the data:", response)
		response.forEach(function(data){
			$("div.haunts").append(
				"<ul>" + "<b>" + data.name + "</b>" + ", " + data.city + ", " + data.state + "<br>" + data.description + "<ul>");
			
		});

		// $("div.haunts").html(response)
		// $("div.haunts").append('<ol><li>First Haunt</li></ol>');
		



	});
	event.preventDefault();
})


	

	
})

