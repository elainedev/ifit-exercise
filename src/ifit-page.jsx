class IFitPage extends React.Component {
	
	constructor(props) {
		super(props);

		this.windowWidthBreakpoints = {
	      tablet: 760,
	      phone: 480,
	    };

		this.state = {
			windowWidth: document.body.clientWidth,
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
		});

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

		this.setState({isHeaderVisible})
	}


	render() {
		const {windowWidth, isHeaderVisible} = this.state;
		const showCompactNav = windowWidth < this.windowWidthBreakpoints.tablet;
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
				<ReviewsContainer isCardFullScreen={isPhoneSize} />
				<ActivitiesSection />
				<EquipmentSection />
				<Footer isPhoneSize={isPhoneSize} />
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

class ReviewsContainerOld extends React.Component {

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
				queue.push(<ReviewCard key={`${reviewer}-${i}`} reviewer={reviewer} reviewText={this.reviews[reviewer]} isCardFullScreen={this.props.isCardFullScreen} />)
			}
		}
		return queue;
	}

	updateSlideQueue(direction) {
		let slideUnit = this.state.cardWidth + 22;
		direction === "right" ? slideUnit = 0 - slideUnit : slideUnit;
		this.setState({slideDistance: this.state.slideDistance += slideUnit})
	}

	render() {
		const queue = this.reviewQueue;

		return (
			<div className={`reviews-container ${this.props.isCardFullScreen ? 'full-screen' : ''}`}>
				<div className="sliding-container" 
					style={{transform: `translateX(${this.state.slideDistance}px)`, transition:'transform 1s'}}>
				
					{this.buildReviewQueue()}
					
				</div>
				<button className="arrow-icon right" onClick={() => this.updateSlideQueue('right')}>
					<img src="icons/right_arrow.png" />
				</button>
				<button className="arrow-icon left" onClick={() => this.updateSlideQueue('left')}>
					<img src="icons/left_arrow.png" />
				</button>
			</div>
		)
	} 
}

class ReviewsContainer extends React.Component {

	constructor(props) {
		super(props);
		this.reviews = {
			"mashable": '"Breathes new life into a tired, old running routine."',
			"gear-junkie": '"You focus on putting in the work, and the technology handles the rest."',
			"wired": '"Literally transports you from home to wherever you choose to run."',
		}
		this.state = {
			increment: 0,
		}
	}	
	

	buildReviewQueue() {
		const queue = [];
		let index = 0;
		let holdTransition = false;
		for (let j = 0; j <= 1; j++) {
			for (reviewer in this.reviews) {
				let i = (index + this.state.increment) % 6;
				if (i === 0) {
					holdTransition: true;
				}
				queue.push(
					<ReviewCard
						key={index} 
						i={i} 
						reviewer={reviewer}
						reviewText={this.reviews[reviewer]}
						holdTransition={holdTransition}
						isCardFullScreen={this.props.isCardFullScreen} />)
				console.log(index, this.state.increment)
				index++;
			}
		}
		return queue;
	}

	
	updateSlideQueue(direction) {
		const incrementUnit = direction === "slideRight" ? 1 : -1;
		this.setState({
			increment: this.state.increment + incrementUnit,
		})
	}
	
	render() {
		const queue = this.reviewQueue;

		return (
			<div className="reviews-container">
				{this.buildReviewQueue()}
					
				<button className="arrow-icon right" onClick={() => this.updateSlideQueue("slideRight")}>
					<img src="icons/right_arrow.png" />
				</button>
				<button className="arrow-icon left" onClick={() => this.updateSlideQueue("slideLeft")}>
					<img src="icons/left_arrow.png" />
				</button>
			</div>
		)
	} 
}

class ReviewCard extends React.Component {
	
	generateStyle

	render() {
		// console.log(this.props.i)


		const {i, reviewText, reviewer, holdTransition} = this.props;
		return (
			<div className="review-card" 
				style={{width: "31%", transform: `translateX(${103.2 * i}%)`}}>
				<img className="review-logo" src={`logos/${reviewer}-logo.svg`}/>
				<div className="review-text">{reviewText + i}</div>
			</div>
		)
	}

}


function ActivitiesSection() {
	const activitiesData = {
		0 : {
			text: "Lake Inniscarra, Ireland--Pyramid",
			time: '30:53',
			distance: '6,248 M'
		},
		1 : {
			text: "Performance Series",
			workouts: 9
		},
		2 : {
			text: "Slow Pulls and Fast Intervals",
			time: '44:13',
			distance: '9,948 M'
		},
		3 : {
			text: "20 Mintues to Toned",
			workouts: 12,
		},
		4 : {
			text: "Charles Race, Boston, Massachusetts",
			time: '36:22',
			distance: '8,648 M'
		},
		5 : {
			text: "Full-Body HIIT Series",
			workouts: 12
		},
		6 : {
			text: "Kafue River, Zambia--Power Stroke Pyramid",
			time: '22:22',
			distance: '4,660 M'
		},
		7 : {
			text: "Shred & Burn Series",
			 workouts: 16
		}
	}
	return (
		<div className="activities-section">
			<ul>
				{Object.keys(activitiesData).map((activity, i) => 
					<li key={i}>
						<div className="img-wrap">
							<img src={`img/grid${i}.png`} />
							{activitiesData[i].hasOwnProperty("workouts") ?
								<div className="workout-overlay">
									<div className="workout-number">{activitiesData[i].workouts}</div>
									<div>WORKOUTS</div>
									<img src="icons/icn_playlist.svg" />
								</div>
								: null
							}
						</div>
						<div className="description-wrap">
							<img className="instructor-img" src={`img/instructor${i}.png`} />
							<div>{activitiesData[i].text}</div>
							
							{activitiesData[i].hasOwnProperty("time") ?
								<div className="stats-container">
									<img className="metrics-icon" src="icons/timer_icon.png" />
									{activitiesData[i].time}
									<img className="metrics-icon" src="icons/distance_icon.png" />
									{activitiesData[i].distance}
								</div>
								: null
							}
							<div className="details">VIEW DETAILS</div>
						</div>
					</li>
				)}
			</ul>
		</div>
	)
}

class EquipmentSection extends React.Component {
	
	constructor(props) {
		super(props);
		this.equipmentList = ["treadmills", "bikes", "ellipticals", "strength"];
		this.state = {
			fadeInEquipment: false,
			equipmentTopPosition: null
		}
		this.handleScroll = this.handleScroll.bind(this);
	}
	

	componentDidMount() {
		const equipmentBlock = document.getElementById('scroll-to-equipment');

		this.setState({
			equipmentTopPosition: equipmentBlock.getBoundingClientRect().top

		});

		window.addEventListener('scroll', this.handleScroll);

	}

	handleScroll() {
		// const currentScrollPos = window.pageYOffset;
		const fadeInEquipment = window.innerHeight - this.state.equipmentTopPosition <= 0;
		this.setState({fadeInEquipment})
	}

	render() {
		return (
			<div className="equipment-section">
				<div className="equipment-question">Interested in our exciting iFit-enabled equipment?</div>
				<ul id="scroll-to-equipment" className={this.state.fadeInEquipment ? "fade-in" : "default"}>
					{
						this.equipmentList.map(equipment => 
							<li key={equipment}>
								<img src={`img/equipment-${equipment}.png`} />
								<div className="equipment-caption">{equipment}</div>
							</li>	
						)
					}
				</ul>
			</div>
		)
	}
}

class Footer extends React.Component {

	constructor(props) {
		super(props);
		this.mediaList = ["youtube", "pinterest", "facebook", "twitter", "instagram"];
	}

	render() {
		return (
			<div className={`footer ${this.props.isPhoneSize ? "phone-size" : ""}`}>
				<div className="menu-container">
					<ul>
						<li>Company</li>
						<li>About</li>
						<li>Contact Us</li>
						<li>Careers</li>
					</ul>
					<ul>
						<li>Account</li>
						<li>Log In</li>
						<li>Create Account</li>
					</ul>
					<ul>
						<li>Support</li>
						<li>Help Center</li>
						<li>Accessibility</li>
					</ul>

				</div>
				<div className="social-container">
					{this.mediaList.map(media => 
						<div role="button" className="outer-gradient" key={media}>
							<div className="inner">
								<img src={`icons/${media}.png`} />
							</div>
						</div>
					)}
				</div>
				<div className="bottom-bar">
					<ul>
						<li>iFit.com All Rights Reserved.</li>
						<li>Privacy Policy</li>
						<li>Terms of Use</li>
					</ul>
					<select className="language-menu">
						<option value="English">English</option>
						<option value="French">French</option>
						<option value="Spanish">Spanish</option>
						<option value="Italian">Italian</option>
						<option value="Portuguese">Portuguese</option>
					</select>
				</div>
			</div>
		)
	}
}

const domContainer = document.querySelector("#ifit-page");
ReactDOM.render(<IFitPage />, domContainer);