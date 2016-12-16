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
				<div className="row">
					<div className="col-sm-12">
						<div className="panel panel-default">
							<div className="panel-heading text-center">
								<h3 className="panel-title">Results</h3>
							</div>
							<div className="panel-body">
								<div className="well well-sm">
									<div className="row">
										<div className="col-sm-10">Result 1</div>
										<div className="col-sm-2">
											<button onClick={this.props.onArticleSave} className="btn btn-sm btn-block btn-primary">Save</button>
										</div>
									</div>
								</div>
								<div className="well well-sm">
									<div className="row">
										<div className="col-sm-10">Result 2</div>
										<div className="col-sm-2">
											<button className="btn btn-sm btn-block btn-primary">Save</button>
										</div>
									</div>
								</div>
								<div className="well well-sm">
									<div className="row">
										<div className="col-sm-10">Result 3</div>
										<div className="col-sm-2">
											<button className="btn btn-sm btn-block btn-primary">Save</button>
										</div>
									</div>
								</div>
								<div className="well well-sm">
									<div className="row">
										<div className="col-sm-10">Result 4</div>
										<div className="col-sm-2">
											<button className="btn btn-sm btn-block btn-primary">Save</button>
										</div>
									</div>
								</div>
								<div className="well well-sm">
									<div className="row">
										<div className="col-sm-10">Result 5</div>
										<div className="col-sm-2">
											<button className="btn btn-sm btn-block btn-primary">Save</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div className="row">
					<div className="col-sm-12">
						<div className="panel panel-default">
							<div className="panel-heading text-center">
								<h3 className="panel-title">Results</h3>
							</div>
							<div className="panel-body">
								<div className="well well-sm">
									<div className="row">
										<div className="col-sm-10">{this.props.results[0].headline.main}</div>
										<div className="col-sm-2">
											<button 
												id="button1" 
												data-title={this.props.results[0].headline.main}
												data-published={this.props.results[0].pub_date}
												data-url={this.props.results[0].web_url}
												onClick={this.props.onArticleSave} 
												className="btn btn-sm btn-block btn-primary">Save</button>
										</div>
									</div>
								</div>
								<div className="well well-sm">
									<div className="row">
										<div className="col-sm-10">{this.props.results[1].headline.main}</div>
										<div className="col-sm-2">
											<button className="btn btn-sm btn-block btn-primary">Save</button>
										</div>
									</div>
								</div>
								<div className="well well-sm">
									<div className="row">
										<div className="col-sm-10">{this.props.results[2].headline.main}</div>
										<div className="col-sm-2">
											<button className="btn btn-sm btn-block btn-primary">Save</button>
										</div>
									</div>
								</div>
								<div className="well well-sm">
									<div className="row">
										<div className="col-sm-10">{this.props.results[3].headline.main}</div>
										<div className="col-sm-2">
											<button className="btn btn-sm btn-block btn-primary">Save</button>
										</div>
									</div>
								</div>
								<div className="well well-sm">
									<div className="row">
										<div className="col-sm-10">{this.props.results[4].headline.main}</div>
										<div className="col-sm-2">
											<button className="btn btn-sm btn-block btn-primary">Save</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
})

module.exports = Results