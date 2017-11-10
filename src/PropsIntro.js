import React, { Component } from 'react';

class PropsIntro extends Component {
	render() {
		return (
			<div>
				<h3>Props Intro</h3>
					<p>hello</p>
					<p>Props Intro!!!</p>
					<h3>Components accept inputs called props</h3>
					<p>Artist: {this.props.name}</p>
					<p>Album: {this.props.title}</p>
				<hr />
			</div>
		);
	}
}

export default PropsIntro;