$(document).ready(function(){
	$("a.ajax_load_haunts").on("click", function(event){
		$.ajax({
		method: 'GET',
		url: this.href,
		dataType: 'json'
	}).done(function (response){
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
	})
})


// $(document).ready(function(){
// 	$("a.ajax_load_a_haunt").on("click"), function(event){
// 		$.ajax({
// 			method: 'get',
// 			url: this.href,
// 			dataType: 'json'
// 		}).done(function (response){
// 			console.log("Here is a haunt:", response)

// 		})
// 		event.preventDefault();
// 	}
	
// })

