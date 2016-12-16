var React = require('react')
var Saved = require('../components/Saved')

var SavedContainer = React.createClass({
	render: function() {
		return (
			<Saved savedArticles={this.props.savedArticles} />
		)
	}
})

module.exports = SavedContainer