import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRef, createRef, useState, useEffect } from 'react';
import ProjectsDisplay from '../components/ProjectsDisplay';
import { NavContainer, PageBackgroundImage, SquareButton, Page, CircularButton, ContentBody } from '../components/styled';

export default function Home(pageProps) {
	const router = useRouter();
	const Redirect = (path) => {
		router.push(path);
	};
	const page1 = useRef();
	const page2 = useRef();
	const page3 = useRef();
	const page4 = useRef();

	// const currentScrollPosition = scrollTop;
	const [page2Offset, setPage2Offset] = useState();
	const [page3Offset, setPage3Offset] = useState();
	const [page4Offset, setPage4Offset] = useState();

	const [scrollTop, setScrollTop] = useState();
	const [activePage, setActivePage] = useState(0);

	let items = ReorderArrayOfProjects(pageProps.projects.results);

	useEffect(() => {
		page2.current ? setPage2Offset(page2.current.offsetTop ? page2.current.offsetTop : 0) : null;
		page3.current ? setPage3Offset(page3.current.offsetTop) : null;
	}, []);

	useEffect(() => {
		const onScroll = (e) => {
			setScrollTop(e.target.documentElement.scrollTop + window.innerHeight / 4);
			// if (scrollTop > page4.current.offsetTop) {
			// 	setActivePage(3);
			// } else
			if (scrollTop > page3.current.offsetTop) {
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
				<NavContainer className="nav_container">
					<nav>
						<ul>
							<li onClick={() => page1.current.scrollIntoView()}>
								<label className={activePage == 0 ? 'active' : null}>Intro</label>
								<h2>01</h2>
							</li>
							<li onClick={() => page2.current.scrollIntoView()}>
								<label className={activePage == 1 ? 'active' : null}>Projects</label>
								<h2>02</h2>
							</li>
							<li onClick={() => page3.current.scrollIntoView()}>
								<label className={activePage == 2 ? 'active' : null}>Contact</label>
								<h2>03</h2>
							</li>
							{/* <li onClick={() => page4.current.scrollIntoView()}>
								<label className={activePage == 3 ? 'active' : null}>Outro</label>
								<h2>04</h2>
							</li> */}
						</ul>
					</nav>
				</NavContainer>
				<PageBackgroundImage active={activePage === 0} position="fixed" gradient={true} src="/icons/pexels-erick-todd.jpg" ref={page1}>
					<Page>
						<ContentBody>
							<div className="center_content">
								<h3 className="page_label white">01</h3>
								<h1>Christopher Menkhus</h1>
								<p>Web Developer located in Colorado Springs</p>
							</div>
						</ContentBody>
						<ContentBody>
							<div className="bottom_content">
								<h2>Jump to Projects</h2>
								<CircularButton onClick={() => page2.current.scrollIntoView()}></CircularButton>
							</div>
						</ContentBody>
					</Page>
				</PageBackgroundImage>
				<PageBackgroundImage active={activePage === 1} position="absolute" src="/icons/vector-line.svg" ref={page2}>
					<Page>
						<ContentBody>
							<div className="center_content">
								<h3 className="page_label">02</h3>
								<h1>Projects</h1>
								<div className="projects_container">{ProjectsDisplay(items, scrollTop)}</div>
							</div>
						</ContentBody>
					</Page>
				</PageBackgroundImage>
				<PageBackgroundImage active={activePage === 2} position="absolute" backgroundcolor="#111" ref={page3}>
					<Page>
						<ContentBody>
							<div className="center_content">
								<h3 className="page_label">03</h3>
								<h1 className="white">Contact</h1>
								<div className="button_container">
									<SquareButton
										backgroundcolor="white"
										invertcolor={true}
										onClick={() => window.open('https://www.linkedin.com/in/chris-menkhus-ab27201a0/')}>
										<h4>LinkedIn</h4>
									</SquareButton>
									<SquareButton backgroundcolor="white" invertcolor={true} onClick={() => window.open('mailto:menkhus.chris@gmail.com')}>
										<h4>Email</h4>
									</SquareButton>
									<SquareButton backgroundcolor="white" invertcolor={true} onClick={() => window.open('https://github.com/ChrisMenkhus')}>
										<h4>Github</h4>
									</SquareButton>
									<SquareButton
										backgroundcolor="white"
										invertcolor={true}
										onClick={() =>
											window.open('https://docs.google.com/document/d/17GMPd6Rm3f0BPTpqSF-DkY-KojQKCyqksZZfUw7l7zA/edit?usp=sharing')
										}>
										<h4>Resume</h4>
									</SquareButton>
								</div>
							</div>
						</ContentBody>
					</Page>
				</PageBackgroundImage>
				{/* <PageBackgroundImage ref={page4}>
					<Page>
						<ContentBody>
							<div className="center_content">
								<h3 className="page_label">04</h3>
								<h1>Text Goes Here Fuck</h1>
							</div>
						</ContentBody>
					</Page>
				</PageBackgroundImage> */}
			</main>

			<style jsx>
				{`
					.button_container {
						margin-top: 2rem;
						display: flex;
						flex-direction: column;
					}

					.projects_container {
						min-height: 70vh;
						height: 100%;
						margin-top: 2rem;
						width: 100%;
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
