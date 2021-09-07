import Head from 'next/head';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';
import styled from 'styled-components';

import FlexBox from '../components/FlexBox';
import Button from '../components/Button';
import BottomButton from '../components/BottomButton';
import ImageBox from '../components/ImageBox';
import LiquidButton from '../components/LiquidButton';
import Logo from '../components/Logo';
import LogoImg from '../components/LogoImg';
import Link from '../components/Link';
import TextBox from '../components/TextBox';

import MdArrowRoundBack from 'react-ionicons/lib/MdArrowDropleft';
import IosCloseCircleOutline from 'react-ionicons/lib/IosCloseCircleOutline';
import IosGlobeOutline from 'react-ionicons/lib/IosGlobeOutline';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import Box from '../components/Box';

export default function Projects(props) {
	// function that redircts to supplied directory name in projects/pages
	const router = useRouter();
	const Redirect = (path) => {
		router.push(path);
	};

	// reorder the array of projects to the display order
	let items = ReorderArrayOfProjects(props.projects.results);

	// limit the length of a string
	const TruncateString = (length, str) => {
		// set string to length value
		let truncString = str.substring(0, length);
		// remove any characters from string after the last whitespace character
		truncString = truncString.substring(0, truncString.lastIndexOf(' '));
		return truncString;
	};

	return (
		<>
			<Head>
				<title>Chris Menkhus Projects</title>
			</Head>
			{/* this all needs refactored */}
			<main>
				<FlexBox flexdirection="column" width="100%" margin="auto">
					{items.map((res, i) => {
						let data = res.data;
						const [showReadMore, SetShowReadMore] = useState();
						return (
							<FlexBox className="item" margin="2rem auto" flexdirection="column" width="100%">
								<FlexBox
									width="100%"
									className="gallery_item"
									onClick={() => {
										setSelectedProject(res);
									}}>
									<ImageBox id="img_desktop" src={data.img_desktop.url} />
								</FlexBox>
								<FlexBox flexdirection="column" className="gallery_item_details" width="100%">
									<Box width="100%" margin="2rem auto 0 auto">
										<TextBox>
											<h1>{data.name[0].text}</h1>

											<p id="description">
												{showReadMore
													? data.description[0].text
													: data.description[0].text.length > 115
													? TruncateString(115, data.description[0].text)
													: data.description[0].text}
												{data.description[0].text.length >= 115 ? (showReadMore ? '' : '...') : ''}

												{data.description[0].text.length >= 115 ? (
													<Link
														onClick={() => {
															SetShowReadMore(!showReadMore);
														}}>
														{showReadMore ? ' read less' : ' read more'}
													</Link>
												) : null}
											</p>
										</TextBox>
									</Box>
									<Box width="100%" margin="2rem auto 0 auto">
										<FlexBox flexdirection="row" width="10rem" margin="auto">
											{data.stack[0].css ? <LogoImg className="logo" src="/icons/logo-css3.svg" color="black" alt="css" /> : null}
											{data.stack[0].html ? <LogoImg className="logo" src="/icons/logo-html5.svg" fill="black" alt="html" /> : null}
											{data.stack[0].js ? <LogoImg className="logo" src="/icons/logo-javascript.svg" alt="javascript" /> : null}
											{data.stack[0].react ? <LogoImg className="logo" src="/icons/logo-react.svg" alt="react" /> : null}
											{data.stack[0].express ? <LogoImg className="logo" src="/icons/logo-expressjs.svg" alt="expressjs" /> : null}
											{data.stack[0].next ? <LogoImg className="logo" src="/icons/logo-nextjs.svg" alt="nextjs" /> : null}
											{data.stack[0].node ? <LogoImg className="logo" src="/icons/logo-nodejs.svg" alt="nodejs" /> : null}
										</FlexBox>
									</Box>
									<FlexBox flexdirection="row" width="100%" id="button-container" margin="2rem auto 0 auto">
										{data.websitelink.url ? (
											<Button
												margin={data.githublink.url ? 'auto 1rem auto auto' : 'auto'}
												handleClick={() => window.open(data.websitelink.url)}
												img={IosGlobeOutline}>
												Visit
											</Button>
										) : null}
										{data.githublink.url ? (
											<Button
												margin={data.websitelink.url ? 'auto auto auto 1rem' : 'auto'}
												handleClick={() => window.open(data.githublink.url)}
												img={LogoGithub}>
												View Code
											</Button>
										) : null}
									</FlexBox>
								</FlexBox>
							</FlexBox>
						);
					})}
					<FlexBox width="100%" margin="auto">
						<Box margin="5rem auto 10rem auto">
							<LiquidButton handleClick={() => Redirect('/')}>HOME</LiquidButton>
						</Box>
					</FlexBox>
				</FlexBox>
			</main>

			{/* <BottomButton>
				<FlexBox width="100%">
					<Button margin="-7rem auto 0 2rem" img={MdArrowRoundBack} handleClick={() => Redirect('/')}>
						Home
					</Button>
				</FlexBox>
			</BottomButton> */}

			<style jsx>{``}</style>
		</>
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

const ResponsiveFlex = styled.div`
	width: auto;
	height: 100%;
	display: flex;
	/* padding: 4rem; */
	padding: 0rem;
	margin: 0rem;
	margin-bottom: 10rem;
	filter: grayscale(${(p) => (p.blur ? '100%' : '0')}) blur(${(p) => (p.blur ? '5px' : '0')});
	overflow-y: ${(p) => (p.blur ? 'hidden' : 'visible')};
	flex-wrap: wrap;

	@media only screen and (max-width: 700px) {
		margin: auto;
	}
	@media only screen and (min-width: 700px) {
		margin: auto 4rem;
	}
	@media only screen and (min-width: 1200px) {
		margin: auto 10rem;
	}
	@media only screen and (min-width: 1800px) {
		margin: auto 16rem;
	}

	.item {
		width: 100%;
		display: flex;
		flex-direction: row;
		margin: 2rem auto 2rem;
		align-items: center;
		justify-content: center;

		@media only screen and (max-width: 900px) {
			flex-direction: column;
			margin: 2rem 0.5rem;
		}

		h1 {
			font-size: 2rem;
			font-weight: 400;
			line-height: 1.7rem;
			height: auto;
			text-align: left;
			margin: 1rem auto 0.2rem 1rem;
			padding: 0.05rem;
		}

		:last-child {
			padding-bottom: 12rem;
		}
	}

	.gallery_item_details {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	#logo-container {
		width: auto;
		display: flex;
		flex-direction: row;
		justify-content: right;
		/* margin: 0 auto auto auto; */
		margin-top: auto;
		margin-bottom: 1rem;

		margin: 1rem 1rem 0.5rem auto;
	}

	#button-container {
		height: 100%;
		height: auto;
		display: flex;
		flex-direction: row;
		justify-content: right;
		flex-wrap: wrap;

		margin: 0 0.5rem 0 auto;

		button {
			margin: 0 0.5rem;
			@media only screen and (max-width: 700px) {
				margin: 0 0.2rem;
			}
		}
	}

	.logo {
		width: 1.6rem;
		margin: auto 0.2rem;
	}

	#description {
		text-align: left;
		font-size: 1.3rem;
		height: 50%;
		padding: 0.25rem;
		margin: 0.25rem 1rem auto 1rem;

		a {
			color: purple;
			cursor: pointer;
		}
		@media only screen and (max-width: 700px) {
			font-size: 1rem;
			height: auto;
			padding: 0rem;
		}
	}
`;

export async function getStaticProps(context) {
	const req = context.req;

	const projects = await Client(req).query(Prismic.Predicates.at('document.type', 'project'));

	return {
		props: { projects },
	};
}
