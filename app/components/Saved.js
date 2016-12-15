var React = require('react')
var PropTypes = React.PropTypes

var Saved = React.createClass({
	render: function() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading text-center">
					<h3 className="panel-title">Saved Container</h3>
				</div>
				<div className="panel-body">
					Panel content
				</div>
			</div>
		)
	}
})

module.exports = Saved