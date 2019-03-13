$(function(){
	$("a.ajax_load_haunts ").on("click", function(event) {
	event.preventDefault();
		$.ajax({
		method: 'get',
		url: this.href,
		dataType: 'json'
	}).done(function (response) {
		// $("div.haunts").html(response)
		debugger

		});
	
	})
})

