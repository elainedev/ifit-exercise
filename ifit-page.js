var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IFitPage = function (_React$Component) {
	_inherits(IFitPage, _React$Component);

	function IFitPage(props) {
		_classCallCheck(this, IFitPage);

		var _this = _possibleConstructorReturn(this, (IFitPage.__proto__ || Object.getPrototypeOf(IFitPage)).call(this, props));

		_this.phoneSizeBreakpoint = 480;
		_this.state = {
			windowWidth: document.body.clientWidth
		};
		return _this;
	}

	_createClass(IFitPage, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			window.addEventListener('resize', function () {
				_this2.setState({ windowWidth: document.body.clientWidth });
			});
		}
	}, {
		key: "render",
		value: function render() {
			var windowWidth = this.state.windowWidth;

			return React.createElement(
				"div",
				{ className: "ifit-page" },
				React.createElement(
					"div",
					{ className: "sticky-container" },
					React.createElement(
						"div",
						{ className: "header" },
						React.createElement(UpperNavBar, null),
						windowWidth > this.phoneSizeBreakpoint ? React.createElement(MainNavBar, null) : null
					),
					React.createElement(HeroImageSection, null)
				),
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ipsa, ducimus. Obcaecati incidunt voluptatem, sed tempore odio similique totam optio expedita cupiditate in ea rerum laboriosam qui modi excepturi eum, alias iste eveniet possimus at magni soluta unde. Iusto, accusamus quam mollitia quis deleniti, enim perferendis consequatur ducimus, fuga repellat ullam perspiciatis? Quisquam neque odio eius esse maiores impedit quia itaque veniam explicabo odit facilis optio aliquid aspernatur quam iure, maxime dicta hic assumenda voluptatibus atque, totam quasi, dolor porro. Amet suscipit doloremque, iure at, voluptates numquam ratione et, a repellendus nulla cum alias quaerat laboriosam veritatis accusantium officia aperiam, mollitia adipisci. Eaque nulla suscipit, quae. Expedita accusamus sint tempora eligendi, amet asperiores necessitatibus numquam. Praesentium vel ullam esse. Architecto explicabo, accusantium eum perferendis eaque cum provident dolorem? Adipisci atque excepturi nisi facilis perferendis nam magni ipsam assumenda nulla inventore tenetur impedit aliquid, itaque voluptatum, sed ut iure deleniti, ipsa illo aliquam fugit possimus reprehenderit obcaecati totam. Est tempora consequatur, non possimus explicabo accusamus ullam aut dolores suscipit nemo quae mollitia laudantium quos? Cum, corrupti excepturi sequi a? Illo dolorem soluta nihil reprehenderit molestias odio quas, veniam, aliquid placeat blanditiis beatae distinctio, pariatur enim. Veniam ex beatae aperiam, laborum, ipsa eveniet possimus quidem dolores dolorum illo dolorem, dicta animi laudantium. Voluptas expedita et ex repudiandae officia, soluta commodi adipisci amet similique ullam, deleniti, consequatur dolorum distinctio corporis consequuntur sint iste nostrum cupiditate non eaque facere. Deleniti officiis corporis cum voluptate aliquid quia, id sapiente modi error temporibus repellat iusto beatae dignissimos mollitia praesentium, impedit debitis, neque voluptatibus. Molestiae aut alias modi suscipit, dignissimos, libero maiores facilis vitae eius. Animi tempore iste, illo inventore earum aliquid temporibus laboriosam veritatis velit architecto odio nihil vitae voluptas adipisci quisquam in minima voluptatum, sint esse. Laborum non molestias pariatur voluptatem officia, magni blanditiis quam itaque ab ad vitae! Magnam suscipit quod esse, quasi doloribus, ratione, sint porro voluptatum assumenda amet doloremque ducimus, rerum. Quidem, illo consequuntur necessitatibus officia eaque cupiditate ratione earum possimus, suscipit voluptatum minus error vitae, molestiae praesentium sit. Quam repudiandae nostrum voluptas, beatae, enim suscipit cumque quod porro distinctio quaerat a mollitia amet temporibus alias dignissimos sunt dolorum ullam minus accusantium nulla voluptates! Veniam fuga quam, doloremque facere eius amet tenetur, ipsam enim asperiores ab? Quisquam cupiditate nihil obcaecati autem vitae quam eos sapiente pariatur officiis, consectetur corrupti, doloribus earum ullam facilis, fuga nesciunt nemo incidunt quod dolore sed maiores. Obcaecati vitae odio officia quo dolor mollitia fugiat quas autem ullam dolores, cumque, vel deleniti eius beatae non illum ipsa modi delectus asperiores iure culpa rerum consectetur quod. Dolores iure debitis, magnam cum voluptatem illum obcaecati quas. Labore officiis provident at quaerat magnam autem modi excepturi in similique sint fugiat rem vero perspiciatis inventore corrupti commodi quibusdam perferendis, explicabo, doloremque non! Corporis, facere nobis omnis suscipit accusantium magni error ipsa autem aspernatur, id itaque modi quaerat odit, et laborum voluptatibus, perferendis minima dolorum velit molestiae nemo officia consequatur. Sunt ducimus dolorem placeat voluptate fugit velit delectus sit, pariatur veniam iure quis!"
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

function MainNavBar() {
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
			"button",
			{ className: "sign-up-btn absolute" },
			"Sign Up"
		)
	);
}

function HeroImageSection() {
	return React.createElement(
		"div",
		{ className: "hero-section" },
		React.createElement("div", { className: "darken-bg" }),
		React.createElement(
			"div",
			{ className: "hero-text" },
			"The best personal training,",
			React.createElement("br", null),
			"right in your own home"
		),
		React.createElement(
			"button",
			{ className: "join-btn" },
			"JOIN IFIT COACH"
		)
	);
}

// function Reviews(props) {
// 	return (

// 	)
// }

var domContainer = document.querySelector("#ifit-page");
ReactDOM.render(React.createElement(IFitPage, null), domContainer);