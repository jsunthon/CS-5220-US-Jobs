$(function() {
	console.log('This script has loaded, autocomplete.js');
	
	$("#searchKey").autocomplete({
		 source: "service/search/jobs",
		 minLength: 2
	});
});