class IFitPage extends React.Component {
	
	constructor(props) {
		super(props);
		this.phoneSizeBreakpoint = 480;
		this.state = {
			windowWidth: document.body.clientWidth
		};
	}

	componentDidMount() {
		window.addEventListener('resize', () => {
			this.setState({windowWidth: document.body.clientWidth})
		});
	}

	render() {
		const {windowWidth} = this.state;
		return (
			<div className="ifit-page">
				<div className="sticky-container">
					<div className="header">
						<UpperNavBar />
						{windowWidth > this.phoneSizeBreakpoint ? <MainNavBar /> : null}
					</div>
					<HeroImageSection />
					
				</div>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ipsa, ducimus. Obcaecati incidunt voluptatem, sed tempore odio similique totam optio expedita cupiditate in ea rerum laboriosam qui modi excepturi eum, alias iste eveniet possimus at magni soluta unde. Iusto, accusamus quam mollitia quis deleniti, enim perferendis consequatur ducimus, fuga repellat ullam perspiciatis? Quisquam neque odio eius esse maiores impedit quia itaque veniam explicabo odit facilis optio aliquid aspernatur quam iure, maxime dicta hic assumenda voluptatibus atque, totam quasi, dolor porro. Amet suscipit doloremque, iure at, voluptates numquam ratione et, a repellendus nulla cum alias quaerat laboriosam veritatis accusantium officia aperiam, mollitia adipisci. Eaque nulla suscipit, quae. Expedita accusamus sint tempora eligendi, amet asperiores necessitatibus numquam. Praesentium vel ullam esse. Architecto explicabo, accusantium eum perferendis eaque cum provident dolorem? Adipisci atque excepturi nisi facilis perferendis nam magni ipsam assumenda nulla inventore tenetur impedit aliquid, itaque voluptatum, sed ut iure deleniti, ipsa illo aliquam fugit possimus reprehenderit obcaecati totam. Est tempora consequatur, non possimus explicabo accusamus ullam aut dolores suscipit nemo quae mollitia laudantium quos? Cum, corrupti excepturi sequi a? Illo dolorem soluta nihil reprehenderit molestias odio quas, veniam, aliquid placeat blanditiis beatae distinctio, pariatur enim. Veniam ex beatae aperiam, laborum, ipsa eveniet possimus quidem dolores dolorum illo dolorem, dicta animi laudantium. Voluptas expedita et ex repudiandae officia, soluta commodi adipisci amet similique ullam, deleniti, consequatur dolorum distinctio corporis consequuntur sint iste nostrum cupiditate non eaque facere. Deleniti officiis corporis cum voluptate aliquid quia, id sapiente modi error temporibus repellat iusto beatae dignissimos mollitia praesentium, impedit debitis, neque voluptatibus. Molestiae aut alias modi suscipit, dignissimos, libero maiores facilis vitae eius. Animi tempore iste, illo inventore earum aliquid temporibus laboriosam veritatis velit architecto odio nihil vitae voluptas adipisci quisquam in minima voluptatum, sint esse. Laborum non molestias pariatur voluptatem officia, magni blanditiis quam itaque ab ad vitae! Magnam suscipit quod esse, quasi doloribus, ratione, sint porro voluptatum assumenda amet doloremque ducimus, rerum. Quidem, illo consequuntur necessitatibus officia eaque cupiditate ratione earum possimus, suscipit voluptatum minus error vitae, molestiae praesentium sit. Quam repudiandae nostrum voluptas, beatae, enim suscipit cumque quod porro distinctio quaerat a mollitia amet temporibus alias dignissimos sunt dolorum ullam minus accusantium nulla voluptates! Veniam fuga quam, doloremque facere eius amet tenetur, ipsam enim asperiores ab? Quisquam cupiditate nihil obcaecati autem vitae quam eos sapiente pariatur officiis, consectetur corrupti, doloribus earum ullam facilis, fuga nesciunt nemo incidunt quod dolore sed maiores. Obcaecati vitae odio officia quo dolor mollitia fugiat quas autem ullam dolores, cumque, vel deleniti eius beatae non illum ipsa modi delectus asperiores iure culpa rerum consectetur quod. Dolores iure debitis, magnam cum voluptatem illum obcaecati quas. Labore officiis provident at quaerat magnam autem modi excepturi in similique sint fugiat rem vero perspiciatis inventore corrupti commodi quibusdam perferendis, explicabo, doloremque non! Corporis, facere nobis omnis suscipit accusantium magni error ipsa autem aspernatur, id itaque modi quaerat odit, et laborum voluptatibus, perferendis minima dolorum velit molestiae nemo officia consequatur. Sunt ducimus dolorem placeat voluptate fugit velit delectus sit, pariatur veniam iure quis!
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

function HeroImageSection() {
	return (
		<div className="hero-section">
			<div className="darken-bg"/>
			<div className="hero-text">The best personal training,<br/>right in your own home</div>
			<button className="join-btn">JOIN IFIT COACH</button>
		</div>
	)
}

// function Reviews(props) {
// 	return (

// 	)
// }

const domContainer = document.querySelector("#ifit-page");
ReactDOM.render(<IFitPage />, domContainer);