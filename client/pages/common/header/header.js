(function() {
	'use strict';

	var React = require('react');

	var Header = React.createClass({
		render: function() {
			return (
				<nav className="navbar navbar-default">
					<nav className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li>
								<a href="#"><i className="fa fa-home fa-lg"></i></a>
							</li>
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">
									<i className="fa fa-eye fa-lg"></i> 
									<span className="caret"></span>
								</a>
								<ul className="dropdown-menu">
									<li>
										<a href="#">Collections</a>
									</li>
								</ul>
							</li>
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">
									<i className="fa fa-cogs fa-lg"></i> 
									<span className="caret"></span>
								</a>
								<ul className="dropdown-menu">
									<li>
										<a href="#" target="_blank">Settings</a>
									</li>
								</ul>
							</li>
						</ul>

						<ul className="nav navbar-nav">
							<li>
								<form className="navbar-form navbar-right">
									<div className="input-group">
										<input type="text" className="form-control" placeholder="Search for..." />
										<span className="input-group-btn">
											<button type="submit" className="btn btn-default"><i className="fa fa-search fa-lg"></i></button>
										</span>
									</div>
								</form>
							</li>
						</ul>

					  	<ul className="nav navbar-nav navbar-right">
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">
									<i className="fa fa-connectdevelop fa-lg"></i>
									<span className="caret"></span>
								</a>
								<ul className="dropdown-menu">
									<li>
										<a href="#" target="_blank">API Explorer</a>
									</li>
									<li className="divider"></li>
									<li>
										<a href="#" target="_blank">Take a Tour</a>
									</li>
									<li>
										<a href="#" target="_blank">Documentation</a>
									</li>
								</ul>
							</li>
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">Help <span className="caret"></span></a>
								<ul className="dropdown-menu">
									<li>
										<a href="https://github.com/hegdeashwin/daikon" target="_blank">Github Home Page</a>
									</li>
									<li>
										<a href="#" target="_blank">Gitbook Page</a>
									</li>
									<li className="divider"></li>
									<li>
										<a href="https://github.com/hegdeashwin/daikon/releases" target="_blank">Release Page</a>
									</li>
									<li>
										<a href="https://github.com/hegdeashwin/daikon/milestones" target="_blank">Milestones</a>
									</li>
									<li className="divider"></li>
									<li>
										<a href="https://github.com/hegdeashwin/daikon/issues" target="_blank">Issues Page</a>
									</li>
									<li>
										<a href="https://github.com/hegdeashwin/daikon/pulls" target="_blank">Open Pull Requests</a>
									</li>
									<li className="divider"></li>
									<li>
										<a href="https://github.com/hegdeashwin/daikon" target="_blank">About daikon</a>
									</li>
								</ul>
							</li>
					  	</ul>
					</nav>
				</nav>
			);
		}
	});

	module.exports = Header;
})();