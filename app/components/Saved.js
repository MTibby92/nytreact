var React = require('react')
var PropTypes = React.PropTypes

var Saved = React.createClass({
	render: function() {
		if (this.props.savedArticles.length == 0) {
			return (
				<div className="panel panel-default">
					<div className="panel-heading text-center">
						<h3 className="panel-title">Saved Container</h3>
					</div>
					<div className="panel-body">
						<div className="well well-sm">
							<div className="row">
								<div className="col-sm-10">This is where a Saved Article would appear</div>
								<div className="col-sm-2">
									<button  
										className="btn btn-sm btn-block btn-warn">Delete</button>
								</div>
							</div>
						</div>
						<div className="well well-sm">
							<div className="row">
								<div className="col-sm-10">This is where a Saved Article would appear</div>
								<div className="col-sm-2">
									<button  
										className="btn btn-sm btn-block btn-warn">Delete</button>
								</div>
							</div>
						</div>
						<div className="well well-sm">
							<div className="row">
								<div className="col-sm-10">This is where a Saved Article would appear</div>
								<div className="col-sm-2">
									<button  
										className="btn btn-sm btn-block btn-warn">Delete</button>
								</div>
							</div>
						</div>
						<div className="well well-sm">
							<div className="row">
								<div className="col-sm-10">This is where a Saved Article would appear</div>
								<div className="col-sm-2">
									<button  
										className="btn btn-sm btn-block btn-warn">Delete</button>
								</div>
							</div>
						</div>
						<div className="well well-sm">
							<div className="row">
								<div className="col-sm-10">This is where a Saved Article would appear</div>
								<div className="col-sm-2">
									<button  
										className="btn btn-sm btn-block btn-warn">Delete</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div className="panel panel-default">
					<div className="panel-heading text-center">
						<h3 className="panel-title">Saved Container</h3>
					</div>
					<div className="panel-body">
						<div className="well well-sm">
							<div className="row">
								<div className="col-sm-10">{this.props.savedArticles[0].title}</div>
								<div className="col-sm-2">
									<button 
										// id="button1" 
										data-title={this.props.savedArticles[0].title}
										data-published={this.props.savedArticles[0].published}
										data-url={this.props.savedArticles[0].url}
										onClick={this.props.onArticleSave} 
										className="btn btn-sm btn-block btn-danger">Delete</button>
								</div>
							</div>
						</div>
						<div className="well well-sm">
							<div className="row">
								<div className="col-sm-10">{this.props.savedArticles[1].title}</div>
								<div className="col-sm-2">
									<button 
										// id="button1" 
										data-title={this.props.savedArticles[1].title}
										data-published={this.props.savedArticles[1].published}
										data-url={this.props.savedArticles[1].url}
										onClick={this.props.onArticleSave} 
										className="btn btn-sm btn-block btn-danger">Delete</button>
								</div>
							</div>
						</div>
						<div className="well well-sm">
							<div className="row">
								<div className="col-sm-10">{this.props.savedArticles[2].title}</div>
								<div className="col-sm-2">
									<button 
										// id="button1" 
										data-title={this.props.savedArticles[2].title}
										data-published={this.props.savedArticles[2].published}
										data-url={this.props.savedArticles[2].url}
										onClick={this.props.onArticleSave} 
										className="btn btn-sm btn-block btn-danger">Delete</button>
								</div>
							</div>
						</div>
						<div className="well well-sm">
							<div className="row">
								<div className="col-sm-10">{this.props.savedArticles[3].title}</div>
								<div className="col-sm-2">
									<button 
										// id="button1" 
										data-title={this.props.savedArticles[3].title}
										data-published={this.props.savedArticles[3].published}
										data-url={this.props.savedArticles[3].url}
										onClick={this.props.onArticleSave} 
										className="btn btn-sm btn-block btn-danger">Delete</button>
								</div>
							</div>
						</div>
						<div className="well well-sm">
							<div className="row">
								<div className="col-sm-10">{this.props.savedArticles[4].title}</div>
								<div className="col-sm-2">
									<button 
										// id="button1" 
										data-title={this.props.savedArticles[4].title}
										data-published={this.props.savedArticles[4].published}
										data-url={this.props.savedArticles[4].url}
										onClick={this.props.onArticleSave} 
										className="btn btn-sm btn-block btn-danger">Delete</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}	
	}
})

module.exports = Saved