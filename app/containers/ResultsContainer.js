var React = require('react')
var Results = require('../components/Results')

var ResultsContainer = React.createClass({
	handleArticleSave: function(e) {
		e.preventDefault()
		console.log(e.target)
		console.log(e.target.getAttribute('data-title'))
		console.log(e.target.getAttribute('data-published'))
		console.log(e.target.getAttribute('data-url'))

		var obj = {
			title: e.target.getAttribute('data-title'),
			published: e.target.getAttribute('data-published'),
			url: e.target.getAttribute('data-url')
		}

		this.props.saveArticle(obj)
		// this.setState({
		// 	topic: '',
		// 	start: '',
		// 	end: ''
		// })
	},
	render: function() {
		// console.log(this.props.results)
		return (
			<Results results={this.props.results} onArticleSave={this.handleArticleSave} />
		)
	}
})

module.exports = ResultsContainer