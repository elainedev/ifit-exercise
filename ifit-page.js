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
			phone: 576
		};

		_this.state = {
			windowWidth: document.body.clientWidth,
			heroBottomPosition: null,
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

			this.setState({
				isHeaderVisible: isHeaderVisible
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    windowWidth = _state.windowWidth,
			    isHeaderVisible = _state.isHeaderVisible;

			var showCompactNav = this.state.windowWidth < this.windowWidthBreakpoints.tablet;
			var isPhoneSize = windowWidth < this.windowWidthBreakpoints.phone;
			console.log(this.state.windowWidth, 'bah');
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
				React.createElement(ReviewsContainer, null),
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. voluptatum. Culpa, nisi. Cumque quidem, velit itaque consequuntur facilis sequi numquam nisi voluptatum nemo? Quidem iure doloremque tenetur excepturi, nihil, quod vitae ab. Deserunt sequi porro rem autem minus, temporibus ipsa non. Laboriosam excepturi porro est asperiores, enim maxime quia velit eaque eum itaque aut facere corporis, optio, animi aliquid nulla numquam consequatur culpa pariatur coLorem500 Lorem1000'
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

function ReviewsContainer(props) {
	return React.createElement(
		'div',
		{ className: 'reviews-container' },
		React.createElement(
			'div',
			{ className: 'review-card' },
			React.createElement('img', { className: 'company-logo' }),
			React.createElement('div', { className: 'company-review' })
		),
		React.createElement(
			'div',
			{ className: 'review-card' },
			React.createElement('img', { className: 'company-logo' }),
			React.createElement('div', { className: 'company-review' })
		),
		React.createElement(
			'div',
			{ className: 'review-card' },
			React.createElement('img', { className: 'company-logo' }),
			React.createElement('div', { className: 'company-review' })
		)
	);
}

var domContainer = document.querySelector("#ifit-page");
ReactDOM.render(React.createElement(IFitPage, null), domContainer);