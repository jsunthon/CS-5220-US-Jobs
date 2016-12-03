$(function() {
	
	/**
	 * Configures the search box to auto complete for job postings
	 */
	$("#searchKey").autocomplete({
		 source: "service/search/jobs",
		 minLength: 1
	});
	
	/**
	 * When search type is job postings, enable the autocomplete
	 * but otherwise disable
	 */
	$("#searchType").change(function() {
		var searchType = $(this).val();
		if (searchType == 'Job Postings') {
			console.log('job postings');
			$("#searchKey").autocomplete("enable");
		} else {
			$("#searchKey").autocomplete("disable");
		}
	});	
});