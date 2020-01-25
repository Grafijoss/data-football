import collegeDataService from './college-data'

const collegesService = {}

collegesService.getAll = function (q) {
	return collegeDataService.get('/teams')
		.then(res => res.data)
}

export default collegesService
