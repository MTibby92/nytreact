var React = require('react')
var Search = require('../components/Search')
var nytHelper = require('../utils/nytHelper')

var SearchContainer = React.createClass({
	getInitialState: function() {
		return {
			topic: '',
			start: '',
			end: ''
		}
	},
	handleUpdateTopic: function(e) {
		this.setState({
			topic: e.target.value
		})
	},
	handleUpdateStart: function(e) {
		this.setState({
			start: e.target.value
		})
	},
	handleUpdateEnd: function(e) {
		this.setState({
			end: e.target.value
		})
	},
	handleSubmitSearch: function(e) {
		e.preventDefault()
		// caching the username, back button does not show search terms
		// var topic = this.state.topic
		// var start = this.state.start
		// var end = this.state.end
		// this.setState({
		// 	topic: '',
		// 	start: '',
		// 	end: ''
		// })

		this.props.setTerm([this.state.topic, this.state.start, this.state.end])
	},
	render: function() {
		return (
			<Search
			onSubmitSearch={this.handleSubmitSearch}
			onUpdateTopic={this.handleUpdateTopic}
			onUpdateStart={this.handleUpdateStart}
			onUpdateEnd={this.handleUpdateEnd} />
		)
	}
})

module.exports = SearchContainer