$(function () {
	console.log('haunts.js is loaded')
	listenForClick()
});

function listenForClick() {
	$('button#haunts-data').on('click', function (event) {
		event.preventDefault()
		getHaunts()
	});
}

function getHaunts() {
	$.ajax({
		url: 'http://localhost:3000/haunts',
		method: 'get',
		dataType: 'json'
		}).done(function (data) {
			console.log("The data is:", data)
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