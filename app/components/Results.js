var React = require('react')
var PropTypes = React.PropTypes

var Results = React.createClass({
	propTypes: {

	},
	render: function() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading text-center">
					<h3 className="panel-title">Results</h3>
				</div>
				<div className="panel-body">
					<div className="well well-sm">Test Result 1</div>
					<div className="well well-sm">Test Result 2</div>
					<div className="well well-sm">Test Result 3</div>
				</div>
			</div>
		)
	}
})

module.exports = Results