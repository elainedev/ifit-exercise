var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IFitPage = function (_React$Component) {
	_inherits(IFitPage, _React$Component);

	function IFitPage(props) {
		_classCallCheck(this, IFitPage);

		var _this = _possibleConstructorReturn(this, (IFitPage.__proto__ || Object.getPrototypeOf(IFitPage)).call(this, props));

		_this.windowWidthBreakpoints = {
			tablet: 760,
			phone: 480
		};

		_this.state = {
			windowWidth: document.body.clientWidth,
			isHeaderVisible: true
		};
		_this.handleScroll = _this.handleScroll.bind(_this);
		return _this;
	}

	_createClass(IFitPage, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var heroSection = document.getElementById("hero-section");
			var header = document.getElementById('header');
			var headerHeight = header.clientHeight;

			this.setState({
				heroBottomPosition: heroSection.clientHeight + headerHeight
			});

			window.addEventListener('resize', function () {
				_this2.setState({
					windowWidth: document.body.clientWidth,
					heroBottomPosition: heroSection.clientHeight + headerHeight
				});
			});

			window.addEventListener('scroll', this.handleScroll);
		}
	}, {
		key: 'handleScroll',
		value: function handleScroll() {
			var currentScrollPos = window.pageYOffset;
			var isHeaderVisible = currentScrollPos < this.state.heroBottomPosition;

			this.setState({ isHeaderVisible: isHeaderVisible });
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    windowWidth = _state.windowWidth,
			    isHeaderVisible = _state.isHeaderVisible;

			var isTabletSize = windowWidth < this.windowWidthBreakpoints.tablet;
			var showCompactNav = isTabletSize;
			var isPhoneSize = windowWidth < this.windowWidthBreakpoints.phone;

			return React.createElement(
				'div',
				{ className: 'ifit-page' },
				React.createElement(
					'header',
					{ id: 'header', className: isHeaderVisible ? "header-fixed" : "header-none" },
					showCompactNav ? React.createElement(CompactNavBar, null) : React.createElement(
						'div',
						null,
						React.createElement(UpperNavBar, null),
						React.createElement(MainNavBar, null)
					)
				),
				React.createElement(HeroImageSection, { isBelowCompactNav: showCompactNav, tallerImage: isPhoneSize }),
				React.createElement(ReviewsContainer, { isCardFullScreen: isPhoneSize, isCardHalfScreen: isTabletSize }),
				React.createElement(ActivitiesSection, { isSmallerScreen: isTabletSize }),
				React.createElement(EquipmentSection, null),
				React.createElement(Footer, { isPhoneSize: isPhoneSize })
			);
		}
	}]);

	return IFitPage;
}(React.Component);

function UpperNavBar() {
	return React.createElement(
		'div',
		{ className: 'top-nav-bar' },
		React.createElement(
			'div',
			{ className: 'item' },
			'Blog'
		),
		React.createElement(
			'div',
			{ className: 'item' },
			'Nourish'
		),
		React.createElement(
			'div',
			{ className: 'item' },
			'Shop'
		)
	);
}

function MainNavBar() {
	return React.createElement(
		'div',
		{ className: 'main-nav-bar' },
		React.createElement(
			'div',
			{ className: 'ifit-brand-wrap absolute' },
			React.createElement('img', { className: 'brand-logo', src: 'logos/ifit-coach-logo.svg' })
		),
		React.createElement(
			'div',
			{ className: 'main-nav-wrap' },
			React.createElement(
				'div',
				{ className: 'item' },
				'Exercise'
			),
			React.createElement(
				'div',
				{ className: 'item' },
				'Nutrition'
			),
			React.createElement(
				'div',
				{ className: 'item' },
				'Activity'
			),
			React.createElement(
				'div',
				{ className: 'item' },
				'Sleep'
			)
		),
		React.createElement(
			'button',
			{ className: 'sign-up-btn absolute' },
			'Sign Up'
		)
	);
}

var CompactNavBar = function (_React$Component2) {
	_inherits(CompactNavBar, _React$Component2);

	function CompactNavBar(props) {
		_classCallCheck(this, CompactNavBar);

		var _this3 = _possibleConstructorReturn(this, (CompactNavBar.__proto__ || Object.getPrototypeOf(CompactNavBar)).call(this, props));

		_this3.state = {
			showMenu: false
		};
		_this3.handleClick = _this3.handleClick.bind(_this3);
		return _this3;
	}

	_createClass(CompactNavBar, [{
		key: 'handleClick',
		value: function handleClick() {
			this.setState({
				showMenu: !this.state.showMenu
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'compact-nav-bar' },
				React.createElement('img', { className: 'brand-logo', src: 'logos/ifit-coach-logo.svg' }),
				React.createElement(
					'div',
					{ role: 'button', className: 'menu-btn', onClick: this.handleClick },
					'MENU'
				),
				this.state.showMenu ? React.createElement(
					'div',
					{ className: 'menu' },
					React.createElement(
						'ul',
						null,
						React.createElement(
							'li',
							null,
							React.createElement(
								'a',
								{ href: '/' },
								'Exercise'
							)
						),
						React.createElement(
							'li',
							null,
							React.createElement(
								'a',
								{ href: '/' },
								'Nutrition'
							)
						),
						React.createElement(
							'li',
							null,
							React.createElement(
								'a',
								{ href: '/' },
								'Activity'
							)
						),
						React.createElement(
							'li',
							null,
							React.createElement(
								'a',
								{ href: '/' },
								'Sleep'
							)
						),
						React.createElement('hr', null),
						React.createElement(
							'li',
							null,
							React.createElement(
								'a',
								{ href: '/' },
								'Blog'
							)
						),
						React.createElement(
							'li',
							null,
							React.createElement(
								'a',
								{ href: '/' },
								'Nourish'
							)
						),
						React.createElement(
							'li',
							null,
							React.createElement(
								'a',
								{ href: '/' },
								'Shop'
							)
						),
						React.createElement(
							'li',
							null,
							React.createElement(
								'button',
								{ role: 'button', className: 'sign-up-btn' },
								'Sign Up'
							)
						)
					)
				) : null
			);
		}
	}]);

	return CompactNavBar;
}(React.Component);

function HeroImageSection(props) {
	return React.createElement(
		'div',
		{ className: 'hero-section ' + (props.isBelowCompactNav ? "margin50" : "margin90") + ' ' + (props.tallerImage ? "taller" : null), id: 'hero-section' },
		React.createElement('div', { className: 'darken-bg' }),
		React.createElement(
			'div',
			{ className: 'hero-text' },
			'The best personal training,',
			React.createElement('br', null),
			'right in your own home'
		),
		React.createElement(
			'button',
			{ className: 'join-btn' },
			'JOIN IFIT COACH'
		)
	);
}

var ReviewsContainer = function (_React$Component3) {
	_inherits(ReviewsContainer, _React$Component3);

	function ReviewsContainer(props) {
		_classCallCheck(this, ReviewsContainer);

		var _this4 = _possibleConstructorReturn(this, (ReviewsContainer.__proto__ || Object.getPrototypeOf(ReviewsContainer)).call(this, props));

		_this4.delaySliding = null;

		_this4.reviews = {
			"mashable": '"Breathes new life into a tired, old running routine."',
			"gear-junkie": '"You focus on putting in the work, and the technology handles the rest."',
			"wired": '"Literally transports you from home to wherever you choose to run."'
		};
		_this4.state = {
			increment: 0
		};
		_this4.updateSlideQueue = _this4.updateSlideQueue.bind(_this4);
		return _this4;
	}

	_createClass(ReviewsContainer, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.autoSlideFunction();
		}
	}, {
		key: 'autoSlideFunction',
		value: function autoSlideFunction() {
			var _this5 = this;

			this.autoSlide = setInterval(function () {
				return _this5.updateSlideQueue('right');
			}, 4500);
		}
	}, {
		key: 'buildReviewQueue',
		value: function buildReviewQueue() {
			var queue = [];
			var _state2 = this.state,
			    increment = _state2.increment,
			    direction = _state2.direction;
			var _props = this.props,
			    isCardFullScreen = _props.isCardFullScreen,
			    isCardHalfScreen = _props.isCardHalfScreen;

			var length = Object.keys(this.reviews).length * 3;
			var index = 0;

			for (var j = 0; j <= 2; j++) {
				for (reviewer in this.reviews) {

					var iUnit = index + increment;
					var i = (increment >= 0 ? iUnit : iUnit - length * increment) % length;

					queue.push(React.createElement(ReviewCard, {
						key: index,
						i: i,
						reviewer: reviewer,
						reviewText: this.reviews[reviewer],
						holdTransition: direction === "right" ? i === 0 : i === 8,
						isCardFullScreen: isCardFullScreen,
						isCardHalfScreen: isCardHalfScreen
					}));
					index++;
				}
			}
			return queue;
		}
	}, {
		key: 'updateSlideQueue',
		value: function updateSlideQueue(direction, clicked) {
			var _this6 = this;

			var incrementUnit = direction === "right" ? 1 : -1;
			this.setState({
				increment: this.state.increment + incrementUnit,
				direction: direction
			});

			if (clicked) {
				clearTimeout(this.delaySliding); // clear timeout from previous click
				clearInterval(this.autoSlide);
				this.delaySliding = setTimeout(function () {
					return _this6.autoSlideFunction();
				}, 2000);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this7 = this;

			var queue = this.reviewQueue;

			return React.createElement(
				'div',
				{ className: 'reviews-container' },
				this.buildReviewQueue(),
				React.createElement(
					'button',
					{ className: 'arrow-icon right', onClick: function onClick() {
							return _this7.updateSlideQueue("right", true);
						} },
					React.createElement('img', { src: 'icons/right_arrow.png' })
				),
				React.createElement(
					'button',
					{ className: 'arrow-icon left', onClick: function onClick() {
							return _this7.updateSlideQueue("left", true);
						} },
					React.createElement('img', { src: 'icons/left_arrow.png' })
				)
			);
		}
	}]);

	return ReviewsContainer;
}(React.Component);

var ReviewCard = function (_React$Component4) {
	_inherits(ReviewCard, _React$Component4);

	function ReviewCard() {
		_classCallCheck(this, ReviewCard);

		return _possibleConstructorReturn(this, (ReviewCard.__proto__ || Object.getPrototypeOf(ReviewCard)).apply(this, arguments));
	}

	_createClass(ReviewCard, [{
		key: 'generateWidth',
		value: function generateWidth() {
			if (this.props.isCardFullScreen) {
				return "90%";
			} else if (this.props.isCardHalfScreen) {
				return "45%";
			} else {
				return "31%";
			}
		}
	}, {
		key: 'generateLeftShift',
		value: function generateLeftShift() {
			if (this.props.isCardFullScreen) {
				return "-89%";
			} else if (this.props.isCardHalfScreen) {
				return "-89.5%";
			} else {
				return "-62.5%";
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    i = _props2.i,
			    reviewText = _props2.reviewText,
			    reviewer = _props2.reviewer,
			    holdTransition = _props2.holdTransition;


			return React.createElement(
				'div',
				{ className: 'review-card',
					style: {
						width: this.generateWidth(),
						left: this.generateLeftShift(),
						transform: 'translateX(' + 103.2 * i + '%)',
						transitionProperty: '' + (holdTransition ? "none" : "")
					} },
				React.createElement('img', { className: 'review-logo', src: 'logos/' + reviewer + '-logo.svg' }),
				React.createElement(
					'div',
					{ className: 'review-text' },
					reviewText
				)
			);
		}
	}]);

	return ReviewCard;
}(React.Component);

function ActivitiesSection(props) {
	var activitiesData = {
		0: {
			text: "Lake Inniscarra, Ireland--Pyramid",
			time: '30:53',
			distance: '6,248 M'
		},
		1: {
			text: "Performance Series",
			workouts: 9
		},
		2: {
			text: "Slow Pulls and Fast Intervals",
			time: '44:13',
			distance: '9,948 M'
		},
		3: {
			text: "20 Mintues to Toned",
			workouts: 12
		},
		4: {
			text: "Charles Race, Boston, Massachusetts",
			time: '36:22',
			distance: '8,648 M'
		},
		5: {
			text: "Full-Body HIIT Series",
			workouts: 12
		},
		6: {
			text: "Kafue River, Zambia--Power Stroke Pyramid",
			time: '22:22',
			distance: '4,660 M'
		},
		7: {
			text: "Shred & Burn Series",
			workouts: 16
		}
	};
	return React.createElement(
		'div',
		{ className: 'activities-section' },
		React.createElement(
			'ul',
			{ className: props.isSmallerScreen ? "smaller-screen" : "" },
			Object.keys(activitiesData).map(function (activity, i) {
				return React.createElement(
					'li',
					{ key: i },
					React.createElement(
						'div',
						{ className: 'img-wrap' },
						React.createElement('img', { src: 'img/grid' + i + '.png' }),
						activitiesData[i].hasOwnProperty("workouts") ? React.createElement(
							'div',
							{ className: 'workout-overlay' },
							React.createElement(
								'div',
								{ className: 'workout-number' },
								activitiesData[i].workouts
							),
							React.createElement(
								'div',
								null,
								'WORKOUTS'
							),
							React.createElement('img', { src: 'icons/icn_playlist.svg' })
						) : null
					),
					React.createElement(
						'div',
						{ className: 'description-wrap' },
						React.createElement('img', { className: 'instructor-img', src: 'img/instructor' + i + '.png' }),
						React.createElement(
							'div',
							null,
							activitiesData[i].text
						),
						activitiesData[i].hasOwnProperty("time") ? React.createElement(
							'div',
							{ className: 'stats-container' },
							React.createElement('img', { className: 'metrics-icon', src: 'icons/timer_icon.png' }),
							activitiesData[i].time,
							React.createElement('img', { className: 'metrics-icon', src: 'icons/distance_icon.png' }),
							activitiesData[i].distance
						) : null,
						React.createElement(
							'div',
							{ className: 'details' },
							'VIEW DETAILS'
						)
					)
				);
			})
		)
	);
}

var EquipmentSection = function (_React$Component5) {
	_inherits(EquipmentSection, _React$Component5);

	function EquipmentSection(props) {
		_classCallCheck(this, EquipmentSection);

		var _this9 = _possibleConstructorReturn(this, (EquipmentSection.__proto__ || Object.getPrototypeOf(EquipmentSection)).call(this, props));

		_this9.equipmentList = ["treadmills", "bikes", "ellipticals", "strength"];
		_this9.state = {
			fadeInEquipment: false
		};
		_this9.handleScroll = _this9.handleScroll.bind(_this9);
		return _this9;
	}

	_createClass(EquipmentSection, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.addEventListener('scroll', this.handleScroll);
		}
	}, {
		key: 'handleScroll',
		value: function handleScroll() {
			var equipmentBlock = document.getElementById('scroll-to-equipment');
			var equipmentTopPosition = equipmentBlock.getBoundingClientRect().top;

			var fadeInEquipment = window.pageYOffset > equipmentTopPosition;
			this.setState({ fadeInEquipment: fadeInEquipment });
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'equipment-section' },
				React.createElement(
					'div',
					{ className: 'equipment-question' },
					'Interested in our exciting iFit-enabled equipment?'
				),
				React.createElement(
					'ul',
					{ id: 'scroll-to-equipment', className: this.state.fadeInEquipment ? "fade-in" : "hidden" },
					this.equipmentList.map(function (equipment) {
						return React.createElement(
							'li',
							{ key: equipment },
							React.createElement('img', { src: 'img/equipment-' + equipment + '.png' }),
							React.createElement(
								'div',
								{ className: 'equipment-caption' },
								equipment
							)
						);
					})
				)
			);
		}
	}]);

	return EquipmentSection;
}(React.Component);

var Footer = function (_React$Component6) {
	_inherits(Footer, _React$Component6);

	function Footer(props) {
		_classCallCheck(this, Footer);

		var _this10 = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

		_this10.mediaList = ["youtube", "pinterest", "facebook", "twitter", "instagram"];
		return _this10;
	}

	_createClass(Footer, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'footer ' + (this.props.isPhoneSize ? "phone-size" : "") },
				React.createElement(
					'div',
					{ className: 'menu-container' },
					React.createElement(
						'ul',
						null,
						React.createElement(
							'li',
							null,
							'Company'
						),
						React.createElement(
							'li',
							null,
							'About'
						),
						React.createElement(
							'li',
							null,
							'Contact Us'
						),
						React.createElement(
							'li',
							null,
							'Careers'
						)
					),
					React.createElement(
						'ul',
						null,
						React.createElement(
							'li',
							null,
							'Account'
						),
						React.createElement(
							'li',
							null,
							'Log In'
						),
						React.createElement(
							'li',
							null,
							'Create Account'
						)
					),
					React.createElement(
						'ul',
						null,
						React.createElement(
							'li',
							null,
							'Support'
						),
						React.createElement(
							'li',
							null,
							'Help Center'
						),
						React.createElement(
							'li',
							null,
							'Accessibility'
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'social-container' },
					this.mediaList.map(function (media) {
						return React.createElement(
							'div',
							{ role: 'button', className: 'outer-gradient', key: media },
							React.createElement(
								'div',
								{ className: 'inner' },
								React.createElement('img', { src: 'icons/' + media + '.png' })
							)
						);
					})
				),
				React.createElement(
					'div',
					{ className: 'bottom-bar' },
					React.createElement(
						'ul',
						null,
						React.createElement(
							'li',
							null,
							'iFit.com All Rights Reserved.'
						),
						React.createElement(
							'li',
							null,
							'Privacy Policy'
						),
						React.createElement(
							'li',
							null,
							'Terms of Use'
						)
					),
					React.createElement(
						'select',
						{ className: 'language-menu' },
						React.createElement(
							'option',
							{ value: 'English' },
							'English'
						),
						React.createElement(
							'option',
							{ value: 'French' },
							'French'
						),
						React.createElement(
							'option',
							{ value: 'Spanish' },
							'Spanish'
						),
						React.createElement(
							'option',
							{ value: 'Italian' },
							'Italian'
						),
						React.createElement(
							'option',
							{ value: 'Portuguese' },
							'Portuguese'
						)
					)
				)
			);
		}
	}]);

	return Footer;
}(React.Component);

var domContainer = document.querySelector("#ifit-page");
ReactDOM.render(React.createElement(IFitPage, null), domContainer);