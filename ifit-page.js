var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IFitPage = function (_React$Component) {
	_inherits(IFitPage, _React$Component);

	function IFitPage(props) {
		_classCallCheck(this, IFitPage);

		var _this = _possibleConstructorReturn(this, (IFitPage.__proto__ || Object.getPrototypeOf(IFitPage)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(IFitPage, [{
		key: "render",
		value: function render() {

			return React.createElement(
				"div",
				null,
				React.createElement(UpperNavBar, null),
				React.createElement(MainNavBar, null)
			);
		}
	}]);

	return IFitPage;
}(React.Component);

function UpperNavBar() {
	return React.createElement(
		"div",
		{ className: "top-nav-bar" },
		React.createElement(
			"div",
			{ className: "item" },
			"Blog"
		),
		React.createElement(
			"div",
			{ className: "item" },
			"Nourish"
		),
		React.createElement(
			"div",
			{ className: "item" },
			"Shop"
		)
	);
}

function MainNavBar(props) {
	return React.createElement(
		"div",
		{ className: "main-nav-bar" },
		React.createElement(
			"div",
			{ className: "ifit-brand-wrap absolute" },
			React.createElement("img", { className: "brand-logo", src: "logos/ifit-coach-logo.svg" })
		),
		React.createElement(
			"div",
			{ className: "main-nav-wrap" },
			React.createElement(
				"div",
				{ className: "item" },
				"Exercise"
			),
			React.createElement(
				"div",
				{ className: "item" },
				"Nutrition"
			),
			React.createElement(
				"div",
				{ className: "item" },
				"Activity"
			),
			React.createElement(
				"div",
				{ className: "item" },
				"Sleep"
			)
		),
		React.createElement(
			"div",
			{ className: "sign-up-button absolute" },
			"Sign Up"
		)
	);
}

var domContainer = document.querySelector("#ifit-page");
ReactDOM.render(React.createElement(IFitPage, null), domContainer);