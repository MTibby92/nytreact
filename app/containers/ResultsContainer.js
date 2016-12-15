var React = require('react')
var Results = require('../components/Results')

var ResultsContainer = React.createClass({
	render: function() {
		// console.log(this.props.results)
		return (
			<Results results={this.props.results} />
		)
	}
})

module.exports = ResultsContainer