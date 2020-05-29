class IFitPage extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {

		return (
			<div>
				<UpperNavBar />
				<MainNavBar />
			</div>
		)
	}

}


function UpperNavBar() {
	return (
		<div className="top-nav-bar">
			<div className="item">Blog</div>
			<div className="item">Nourish</div>
			<div className="item">Shop</div>
		</div>
	);
}

function MainNavBar(props) {
	return (
		<div></div>
	)
}

const domContainer = document.querySelector("#ifit-page");
ReactDOM.render(<IFitPage />, domContainer);