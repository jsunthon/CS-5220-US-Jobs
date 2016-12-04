package usjobs.web.service;

import java.util.List;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import usjobs.model.dao.JobPostingDao;

@RestController
public class SearchService {
	private static final Logger logger = Logger.getLogger(SearchService.class);
	
	@Autowired
	JobPostingDao jobPostingDao;
	
	/**
	 * Autocomplete suggestions for jobs
	 */
	@RequestMapping(value = "/service/search/jobs", method = RequestMethod.GET)
	public List<String> suggestJobs(@RequestParam String term) {
		return jobPostingDao.searchJobNoFTS(term);
	}
}
