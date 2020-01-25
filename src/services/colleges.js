import collegeDataService from './college-data'

const collegesService = {}

collegesService.search = function (q) {
	console.log('entro 2');
	// const type = 'school'

	return new Promise((resolve, reject) => {
		console.log('dentro de la promesa');
		collegeDataService.get('/teams')
			// .then(res => res.data)
			.then(res => {
				resolve(res)
			})
	})
}

export default collegesService
