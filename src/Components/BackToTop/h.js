/** React components for scrolling back to the top of the page **/
class ColoredContainer extends React.Component {
	render() {
		let containerStyle = {
			backgroundColor: this.props.color
		};
		return <div className="container" style={containerStyle} />;
	}
}

class ScrollApp extends React.Component {
	constructor() {
		super();

		this.state = {
			colors: ['#044747', '#079191', '#38adad', '#90e3e3', '#d5f7f7']
		};
	}

	render() {
		return (
			<div className="long">
				{this.state.colors.map(function(color) {
					return <ColoredContainer color={color} />;
				})}
				<ScrollButton scrollStepInPx="50" delayInMs="16.66" />
			</div>
		);
	}
}
/*
 * Render the ScrollApp component into the div with the id 'app'
 */
React.render(<ScrollApp />, document.getElementById('app'));
