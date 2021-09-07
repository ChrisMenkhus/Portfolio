import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRef, useState, useEffect } from 'react';
import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';

export default function HomeLayout(props) {
	const router = useRouter();
	const Redirect = (path) => {
		router.push(path);
	};

	// let items = ReorderArrayOfProjects(props.projects.results);
	// console.log(items);

	const page2 = useRef();
	const page3 = useRef();
	const page4 = useRef();

	// const currentScrollPosition = scrollTop;
	const [page2Offset, setPage2Offset] = useState();
	const [page3Offset, setPage3Offset] = useState();
	const [page4Offset, setPage4Offset] = useState();

	const [scrollTop, setScrollTop] = useState();
	const [activePage, setActivePage] = useState(0);

	useEffect(() => {
		setPage2Offset(page2.current.offsetTop);
		setPage3Offset(page3.current.offsetTop);
		// setPage4Offset(page4.current.offsetTop);
		console.log(page3.current.offsetTop);

		console.log('updating page offset');
		console.log(props.projects.results);
	}, []);

	useEffect(() => {
		const onScroll = (e) => {
			setScrollTop(e.target.documentElement.scrollTop + window.innerHeight / 4);
			if (scrollTop > page4.current.offsetTop) {
				setActivePage(3);
			} else if (scrollTop > page3.current.offsetTop) {
				setActivePage(2);
			} else if (scrollTop > page2.current.offsetTop) {
				setActivePage(1);
			} else if (scrollTop < page2.current.offsetTop) {
				setActivePage(0);
			}
		};
		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [scrollTop]);

	return (
		<div>
			<Head>
				<title>Chris Menkhus Portfolio</title>
			</Head>
			<main>
				<div className="nav_container">
					<nav>
						<ul>
							<li>
								<label className={activePage == 0 ? 'active' : null}>Intro</label>
								<h2>01</h2>
							</li>
							<li>
								<label className={activePage == 1 ? 'active' : null}>Projects</label>
								<h2>02</h2>
							</li>
							<li>
								<label className={activePage == 2 ? 'active' : null}>About</label>
								<h2>03</h2>
							</li>
							<li>
								<label className={activePage == 3 ? 'active' : null}>Links</label>
								<h2>04</h2>
							</li>
							<li>
								<label>Outro</label>
								<h2>05</h2>
							</li>
						</ul>
					</nav>
				</div>
				<div className="page_bg_1">
					<div className="page page_1">
						<div className="center_content">
							<h3 className="page_label">01</h3>
							<h1>Christopher Menkhus</h1>
							<p>Web Developer located in Colorado Springs</p>
						</div>
						<div className="bottom_content">
							<h2>Jump to Projects</h2>
							<button className="button_circular">
								<div className="img" />
							</button>
						</div>
					</div>
				</div>
				<div className="page_bg_2" ref={page2}>
					<div className="page page_2">
						<div className="center_content">
							<h3 className="page_label">02</h3>
							<h1>Projects</h1>
							<div className="projects_container">
								<div className="item">
									<div className="item_img">
										<img />
									</div>
									<div className="item_details">
										<h2>Project Name</h2>
										<p>
											lorem ipsum del solorem ipsum del so lorem ipsum del so lorem ipsum del solorem ipsum del so em ipsum del solorem
											ipsum del so lorem ipsum...
										</p>
										<div className="item_details_button">
											<label>Learn more</label>
											<button className="button_circular">
												<div className="img" />
											</button>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="item_img">
										<img />
									</div>
									<div className="item_details">
										<h2>Project Name</h2>
										<p>
											lorem ipsum del solorem ipsum del so lorem ipsum del so lorem ipsum del solorem ipsum del so em ipsum del solorem
											ipsum del so lorem ipsum{' '}
										</p>
										<div className="item_details_button">
											<label>Learn more</label>
											<button className="button_circular">
												<div className="img" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="page_bg_2">
					<page></page>
				</div>
				<div className="page_bg_3" ref={page3}>
					<div className="page page_3">
						<div className="center_content">
							<h3 className="page_label">03</h3>
							<h1>Contact</h1>
							<div className="button_container">
								<button className="button_square">
									<h4>LinkedIn</h4>
								</button>
								<button className="button_square">
									<h4>Email</h4>
								</button>
								<button className="button_square">
									<h4>Github</h4>
								</button>
								<button className="button_square">
									<h4>Resume</h4>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="page page_4" ref={page4}>
					<div className="center_content">
						<h3 className="page_label">04</h3>
						<h1>Text Goes Here Fuck</h1>
					</div>
				</div>
			</main>

			<style jsx>
				{`
					main {
						min-height: calc(100vh - 2rem);

						margin-bottom: 30vh;
					}

					.page {
						position: relative;
						display: flex;
						max-width: 1000px;
						margin: auto;
						flex-direction: column;
						min-height: 100vh;
					}

					.page_bg {
						background-color: #0e46b9;
						width: 100vw;
						height: 100vh;
					}

					.page_3 {
						height: 100vh;
					}

					.page_3 h1 {
						color: white;
					}

					.page_4 {
						height: 200vh;
					}

					.page_2 {
						width: 100vw;
						min-height: 100vh;
						height: 100%;
						margin: auto;
						display: flex;
					}

					.page_1 {
					}

					.page_bg_1 {
						position: relative;
					}

					.page_bg_1:before {
						content: '';
						background-image: url('/icons/pexels-erick-todd.jpg');

						background-size: cover;
						width: 100vw;
						height: 100vh;
						position: fixed;
						left: 0;
						top: 0;
						overflow: hidden;
						z-index: -10;
					}

					.page_bg_2 {
						position: relative;
					}

					.page_bg_2:before {
						content: '';
						background-image: url('/icons/vector-line.svg');
						background-size: cover;
						background-color: white;
						width: 100vw;
						height: 100%;
						position: absolute;
						left: 0;
						top: 0;
						overflow: hidden;
						z-index: -10;
					}
					.page_bg_3 {
						position: relative;
					}

					.page_bg_3:before {
						content: '';
						background-color: #0e46b9;
						background-color: #111;
						background-size: cover;
						width: 100vw;
						height: 100vh;
						position: absolute;
						left: 0;
						top: 0;
						overflow: hidden;
						z-index: -10;
					}

					.page_bg_1:after {
						content: '';
						background: rgb(255, 255, 255);
						background: linear-gradient(166deg, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
						width: 100vw;
						height: 100vh;
						position: fixed;
						left: 0;
						top: 0;
						z-index: -10;
					}

					.center_content {
						margin-left: 9rem;
						width: auto;
						margin-right: 4rem;
					}

					.bottom_content {
						margin: auto;
						width: 100%;
						margin-top: 20vh;
					}

					.button_circular {
						height: 3rem;
						width: 3rem;
						border-radius: 100%;
						border: 1px solid #000;

						background: transparent;
						position: relative;
						overflow: hidden;
					}

					.img {
						background-image: url('/icons/right-arrow.svg');
						background-size: cover;
						height: 100%;
						width: 100%;
						position: absolute;
						top: 0;
						transform: rotate(90deg);
					}

					.button_circular:before {
						content: '';
						position: absolute;
						left: 0;
						height: 0%;
						width: 100%;
						border-radius: 100%;
						bottom: 0;
						background-color: #0e46b9;
						transition: all 0.3s;
						z-index: -1;
					}

					.button_circular:hover:before {
						height: 100%;
						border-radius: 0%;
					}

					.button_circular:hover .img {
						background-image: url('/icons/right-arrow2.svg');
					}

					.page_label {
						margin-top: 40vh;
						margin-left: -2rem;
					}

					.page_1 .page_label {
						margin-top: 40vh;
					}

					.button_container {
						margin-top: 2rem;
						display: flex;
						flex-direction: column;
					}

					.button_square h4 {
						color: white;
					}

					.button_square {
						height: 3rem;
						width: 12rem;
						border-radius: 0;
						border: 0;
						position: relative;
						background: transparent;

						margin: 1rem;
					}

					.button_square:before {
						content: '';
						position: absolute;
						left: 0;
						height: 100%;
						width: 5%;
						top: 0;
						background-color: #fff;
						transition: all 0.3s;
						z-index: -1;
					}

					.button_square:hover:before {
						width: 100%;
					}

					.button_square:hover h4 {
						color: black;
					}

					.projects_container {
						min-height: 70vh;
						height: 100%;
						margin-top: 2rem;
					}

					.item {
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: row;
						max-width: 500px;
						margin: 4rem 0;
						height: 100%;
					}

					.item h2 {
						width: 100%;
						text-align: left;
					}

					.item_img {
						width: 100%;
					}

					.item_img img {
						height: 14rem;
						width: 14rem;
						width: 100%;
					}

					.item_details {
						width: 100%;
						margin: 0;
						height: 100%;
						margin-left: 1rem;
					}

					.item_details > p {
						font-size: 1.2rem;
					}

					.item_details_button {
						margin-top: 1rem;
						display: flex;
						flex-direction: column;
						justify-content: left;
						align-items: left;
						height: 100%;
						width: auto;
					}

					.item_details_button > label {
						text-align: left;
						margin-bottom: 0.5rem;
						color: #0e46b9;
					}

					nav {
						position: fixed;
						top: calc(30vh);
						right: 8rem;
						z-index: 1;
						width: 6rem;
					}

					@media only screen and (max-width: 900px) {
						nav {
							display: none;
						}
						.center_content {
							margin-left: 5rem;
						}
						.item {
							flex-direction: column;
							margin-bottom: 6rem;
						}
					}
					@media only screen and (max-width: 1700px) {
						nav {
							right: 16rem;
						}
					}
					@media only screen and (min-width: 1700px) {
						nav {
							right: 38rem;
						}
					}

					nav h2 {
						font-size: 1rem;
					}

					ul {
						list-style-type: none;
						color: #0e46b9;
					}

					li {
						display: flex;
						width: 100%;
						margin: 2rem auto;
						color: rgb(0, 255, 255);
						color: white;
						color: #0e46b9;
					}

					li:hover label {
						display: flex;
						color: #0e46b9;
					}

					li > h2 {
						text-align: right;
						margin-left: auto;
						color: #0e46b9;
						line-height: 1.8rem;
					}
					li > label {
						display: flex;
						display: none;

						font-size: 1rem;
						line-height: 1.8rem;
						margin-right: 1rem;
						color: #0e46b9;
					}
					li > label.active {
						display: flex;
					}

					p {
						font-family: Roboto;
						font-style: normal;
						font-weight: 300;
						font-size: 24px;
						line-height: 28px;
						letter-spacing: -0.04em;
						color: #000000;
						text-align: left;
					}

					h1 {
						font-family: Roboto;
						font-style: normal;
						font-weight: normal;
						font-size: 32px;
						line-height: 37px;
						letter-spacing: -0.06em;
						color: #000000;
						text-align: left;
					}

					h2 {
						font-family: Roboto;
						font-style: normal;
						font-weight: 100;
						font-size: 24px;
						line-height: 28px;
						letter-spacing: -0.03em;

						color: #000000;
					}

					h3 {
						font-family: Roboto;
						font-style: normal;
						font-weight: normal;
						font-size: 24px;
						line-height: 28px;
						letter-spacing: -0.1em;
						color: #0e46b9;
						text-align: left;
					}

					h4 {
						font-family: Roboto;
						font-style: normal;
						font-weight: 300;
						font-size: 18px;
						line-height: 21px;
						color: #0e46b9;
					}

					button_square:hover h4 {
						color: white;
					}

					.white {
						color: white;
					}

					.light > h4 {
						z-index: 10;
					}

					.active {
						display: flex;
					}
				`}
			</style>
		</div>
	);
}

function ReorderArrayOfProjects(originalArray) {
	let newArray = [];
	originalArray.map((res, i) => {
		newArray.push(res);
	});
	const correctorder = [
		'Take Me With You',
		'Portfolio',
		'Electric Boogaloo Car Dealership',
		'Dungeon Hero',
		'Watch Order',
		'Not An Apple',
		'CSS-Gradient Generator',
		'Be Martian',
		'Color It X',
		'Screen Grabber',
	];
	newArray.sort((a, b) => {
		return correctorder.indexOf(a.data.name[0].text) - correctorder.indexOf(b.data.name[0].text);
	});
	return newArray;
}

// export async function getStaticProps(context) {
// 	// const req = context.req;
// 	const projects = await Client().query(Prismic.Predicates.at('document.type', 'project'));
// 	// const projects = await Client().getByUID('project');

// 	return {
// 		props: { projects },
// 	};
// }

HomeLayout.getInitialProps = async (ctx) => {
	const projects = await Client().query(Prismic.Predicates.at('document.type', 'project'));

	console.log(projects);

	return {
		props: { projects },
	};
};
