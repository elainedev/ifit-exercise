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
		<div className="main-nav-bar">
			<div className="ifit-brand-wrap absolute">
				<img className="brand-logo" src="logos/ifit-coach-logo.svg" />
			</div>
			<div className="main-nav-wrap">
				<div className="item">Exercise</div>
				<div className="item">Nutrition</div>
				<div className="item">Activity</div>
				<div className="item">Sleep</div>
			</div>
			<div className="sign-up-button absolute">
				Sign Up
			</div> 
		</div>
	)
}

const domContainer = document.querySelector("#ifit-page");
ReactDOM.render(<IFitPage />, domContainer);