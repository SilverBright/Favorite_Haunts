$(document).ready(function(){
	$("a.ajax_load_haunts").on("click", function(event){
		$.ajax({
		method: 'GET',
		url: this.href,
		dataType: 'json'
	}).done(function (response){
		console.log("Here is the response:", response)
		
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
	})
})
