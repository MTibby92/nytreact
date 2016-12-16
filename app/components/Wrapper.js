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
			searchResults: [],
			article: {
				title: '',
				published: '',
				url: ''
			},
			savedArticles: []
		}
	},
	componentDidMount: function() {
		nytHelper.getSaved().then(function(response) {
			console.log(response.data)
			if (response.data !== this.state.savedArticles) {
				console.log('SAVED:', response.data)
				// this.setState({
				// 	savedArticles: response.data
				// })
			}
		}.bind(this))
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
					if (results.data.response.docs !== this.state.searchResults) {
						console.log('RESULTS', results.data.response.docs)
						this.setState({
							searchResults: results.data.response.docs
						})
					}
				}.bind(this))
		}

		if (prevState.article.title == this.state.article.title) {
			console.log('No need to rerun after component update')
		} else {
			console.log('Component updated because Article save button was clicked')
			nytHelper.postSaved(this.state.article)
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
	saveArticle: function(article) {
		this.setState({
			saveClick: true,
			article: {
				title: article.title,
				published: article.published,
				url: article.url
			}
		})
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
						<ResultsContainer results={this.state.searchResults} saveArticle={this.saveArticle} />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2">
						<SavedContainer savedArticles={this.state.savedArticles} />
					</div>
				</div>								
			</div>
		)
	}
})

module.exports = Wrapper