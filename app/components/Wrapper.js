var React = require('react')

var SearchContainer = require('../containers/SearchContainer')
var ResultsContainer = require('../containers/ResultsContainer')
var SavedContainer = require('../containers/SavedContainer')

var nytHelper = require('../utils/nytHelper')

var Wrapper = React.createClass({
	getInitialState: function() {
		return {
			topic: '',
			start: '',
			end: '',
			results: []
		}
	},
	// If the component changes (i.e. if a search is entered)...
	componentDidUpdate: function(prevProps, prevState) {

		// Run the query for the address
		if (prevState.topic == this.state.topic && prevState.start == this.state.start && prevState.end == this.state.end) {
			console.log('No need to rerun after component update')
		} else {
			console.log('Component did update because of search submit')
			// console.log('PREV PROPS', prevProps)
			// console.log('PREV STATE', prevState)
			nytHelper.getResults([this.state.topic, this.state.start, this.state.end])
				.then(function(results) {
					if (results.data.response.docs !== this.state.results) {
						console.log('RESULTS', results.data.response.docs)
						this.setState({
							results: results.data.response.docs
						})
					}
				}.bind(this))
		}
	},
	// This function allows childrens to update the parent.
	setTerms: function(terms) {
		this.setState({
			topic: terms[0],
			start: terms[1],
			end: terms[2]
		});
	},
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2">
						<SearchContainer setTerms={this.setTerms} />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2">
						<ResultsContainer results={this.state.results} />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2">
						<SavedContainer />
					</div>
				</div>								
			</div>
		)
	}
})

module.exports = Wrapper