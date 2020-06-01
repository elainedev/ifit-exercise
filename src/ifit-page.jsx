class IFitPage extends React.Component {
	
	constructor(props) {
		super(props);

		this.windowWidthBreakpoints = {
	      tablet: 760,
	      phone: 576,
	    };

		this.state = {
			windowWidth: document.body.clientWidth,
			heroBottomPosition: null,
			isHeaderVisible: true,
		};
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		const heroSection = document.getElementById("hero-section");
		const header = document.getElementById('header');
		const headerHeight = header.clientHeight;

		this.setState({
			heroBottomPosition: heroSection.clientHeight + headerHeight,
		})

		window.addEventListener('resize', () => {
			this.setState({
				windowWidth: document.body.clientWidth,
				heroBottomPosition: heroSection.clientHeight + headerHeight
			});
		});

		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		const currentScrollPos = window.pageYOffset;
		const isHeaderVisible = currentScrollPos < this.state.heroBottomPosition;

		this.setState({
			isHeaderVisible
		})
	}


	render() {
		const {windowWidth, isHeaderVisible} = this.state;
		const showCompactNav = this.state.windowWidth < this.windowWidthBreakpoints.tablet;
		const isPhoneSize = windowWidth < this.windowWidthBreakpoints.phone;

		return (
			<div className="ifit-page">
				<header id="header" className={isHeaderVisible ? "header-fixed" : "header-none"}>
					{showCompactNav ? <CompactNavBar /> :
					<div>
						<UpperNavBar />
						<MainNavBar />
					</div>
					}
				</header>
				<HeroImageSection isBelowCompactNav={showCompactNav} tallerImage={isPhoneSize} />
				<ReviewsContainer />
					
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

function MainNavBar() {
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
			<button className="sign-up-btn absolute">
				Sign Up
			</button> 
		</div>
	)
}

class CompactNavBar extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			showMenu : false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			showMenu : ! this.state.showMenu
		})
	}

	render() {
		return (
			<div className="compact-nav-bar">
				<img className="brand-logo" src="logos/ifit-coach-logo.svg" />
				<div role="button" className="menu-btn" onClick={this.handleClick}>MENU</div>
				{this.state.showMenu ? 
					<div className="menu">
						<ul>
							<li><a href="/">Exercise</a></li>
							<li><a href="/">Nutrition</a></li>
							<li><a href="/">Activity</a></li>
							<li><a href="/">Sleep</a></li>
							<hr />
							<li><a href="/">Blog</a></li>
							<li><a href="/">Nourish</a></li>
							<li><a href="/">Shop</a></li>
							<li>
								<button role="button" className="sign-up-btn">Sign Up</button>
							</li>
						</ul>
					</div> : null
				}
			</div>
		)
	}
	
}

function HeroImageSection(props) {
	return (
		<div className={`hero-section ${props.isBelowCompactNav ? "margin50" : "margin90"} ${props.tallerImage ? "taller" : null}`} id="hero-section">
			<div className="darken-bg"/>
			<div className="hero-text">The best personal training,<br/>right in your own home</div>
			<button className="join-btn">JOIN IFIT COACH</button>
		</div>
	)
}

class ReviewsContainer extends React.Component {

	constructor(props) {
		super(props);
		this.reviews = {
			"mashable": '"Breathes new life into a tired, old running routine."',
			"gear-junkie": '"You focus on putting in the work, and the technology handles the rest."',
			"wired": '"Literally transports you from home to wherever you choose to run."',
		}
		this.reviewQueue = this.buildReviewQueue();
		this.state = {
			cardWidth: null,
			slideDistance: 0,
		}
		this.updateSlideQueue = this.updateSlideQueue.bind(this);
	}

	componentDidMount() {
		const reviewCard = document.querySelector('.review-card');
		this.setState({cardWidth : reviewCard.offsetWidth});

		window.addEventListener('resize', () => {
			this.setState({cardWidth : reviewCard.clientWidth});
		});
	}
	

	buildReviewQueue() {
		const queue = [];
		for (let i = 0; i <= 1; i++) {
			for (reviewer in this.reviews) {
				queue.push(<ReviewCard key={`${reviewer}-${i}`} reviewer={reviewer} reviewText={this.reviews[reviewer] + i} />)
			}
		}
		return queue;
	}

	scrollReviewQueue() {

	}

	updateSlideQueue() {
		this.setState({slideDistance: this.state.slideDistance -= (this.state.cardWidth + 22)})
	}

	render() {
		const queue = this.reviewQueue;

		// console.log('fml', this.state.cardWidth, slideDistance)
		return (
			<div className="reviews-container">
				<div className="sliding-container" 
					style={{transform: `translateX(${this.state.slideDistance}px)`, transition:'transform 2s'}}>
				
					{this.buildReviewQueue()}
					
				</div>
				<button className="arrow-icon right" onClick={this.updateSlideQueue}>
					<img src="icons/right_arrow.png" />
				</button>
			</div>
		)
	} 
}

function ReviewCard(props) {
	return (
		<div className="review-card">
			<img className="review-logo" src={`logos/${props.reviewer}-logo.svg`}/>
			<div className="review-text">{props.reviewText}</div>
		</div>
	)
}

const domContainer = document.querySelector("#ifit-page");
ReactDOM.render(<IFitPage />, domContainer);