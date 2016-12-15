var axios = require('axios')

var apiKey = '88d7c2379a9c422e80de64853cd243b3'
var queryString = 'http://api.nytimes.com/svc/search/v2/articlesearch.json'

var helpers = {
	getResults: function(params) {
		if (params[0].length > 0 && params[1].length == 0 && params[2].length == 0) {
			console.log('1')
			queryString += '?' + $.param({
				'api-key': apiKey,
				'q': params[0],
				'page': 0
			})
			return axios.get(queryString)
		} else if (params[0].length == 0 && params[1].length > 0 && params[2].length == 0) {
			console.log('2')
			queryString += '?' + $.param({
				'api-key': apiKey,
				'begin_date': params[1] + '0101',
				'page': 0
			})
			return axios.get(queryString)
		} else if (params[0].length == 0 && params[1].length == 0 && params[2].length > 0) {
			console.log('3')
			queryString += '?' + $.param({
				'api-key': apiKey,
				'end_date': params[2] + '1231',
				'page': 0
			})
			return axios.get(queryString)
		} else if (params[0].length > 0 && params[1].length > 0 && params[2].length == 0) {
			console.log('4')
			queryString += '?' + $.param({
				'api-key': apiKey,
				'q': params[0],
				'begin_date': params[1] + '0101',
				'page': 0
			})
			return axios.get(queryString)
		} else if (params[0].length > 0 && params[1].length == 0 && params[2].length > 0) {
			console.log('5')
			queryString += '?' + $.param({
				'api-key': apiKey,
				'q': params[0],
				'end_date': params[2] + '1231',
				'page': 0
			})
			return axios.get(queryString)
		} else if (params[0].length == 0 && params[1].length > 0 && params[2].length > 0) {
			console.log('6')
			queryString += '?' + $.param({
				'api-key': apiKey,
				'begin_date': params[1] + '0101',
				'end_date': params[2] + '1231',
				'page': 0
			})
			return axios.get(queryString)
		} else {
			console.log('default')
			queryString += '?' + $.param({
				'api-key': apiKey,
				'q': params[0],
				'begin_date': params[1] + '0101',
				'end_date': params[2] + '1231',
				'page': 0
			})
			return axios.get(queryString)
		}
	}
}

module.exports = helpers