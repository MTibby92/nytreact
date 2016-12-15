var React = require('react')

var SearchContainer = require('../containers/SearchContainer')
var ResultsContainer = require('../containers/ResultsContainer')
var SavedContainer = require('../containers/SavedContainer')

var Wrapper = React.createClass({
	getInitialState: function() {
		return {
			topic: '',
			start: '',
			end: '',
		}
	},
	// If the component changes (i.e. if a search is entered)...
	componentDidUpdate: function() {

	// Run the query for the address
	
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
						<ResultsContainer />
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