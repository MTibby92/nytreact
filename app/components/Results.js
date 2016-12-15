var React = require('react')
var PropTypes = React.PropTypes

var Results = React.createClass({
	propTypes: {
		results: PropTypes.array.isRequired
	},
	render: function() {
		// console.log(this.props.results)
		// console.log(this.props)

		if (this.props.results.length == 0) {
			return (
				<div className="panel panel-default">
				<div className="panel-heading text-center">
					<h3 className="panel-title">Results</h3>
				</div>
				<div className="panel-body">
					<div className="well well-sm">Result 1</div>
					<div className="well well-sm">Result 2</div>
					<div className="well well-sm">Result 3</div>
					<div className="well well-sm">Result 4</div>
					<div className="well well-sm">Result 5</div>
				</div>
			</div>
			)
		} else {
			return (
				<div className="panel panel-default">
					<div className="panel-heading text-center">
						<h3 className="panel-title">Results</h3>
					</div>
					<div className="panel-body">
						<div className="well well-sm">{this.props.results[0].headline.main}</div>
						<div className="well well-sm">{this.props.results[1].headline.main}</div>
						<div className="well well-sm">{this.props.results[2].headline.main}</div>
						<div className="well well-sm">{this.props.results[3].headline.main}</div>
						<div className="well well-sm">{this.props.results[4].headline.main}</div>
					</div>
				</div>
			)
		}
	}
})

module.exports = Results