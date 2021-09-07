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

export default function projects(props) {
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
			<main>
				<div>
					{items.map((res, i) => {
						let data = res.data;
						const [showReadMore, SetShowReadMore] = useState();
						const displayText = (text) => {
							return <>{showReadMore ? text : text.length > 115 ? TruncateString(115, text) : text}</>;
						};
						const readMoreLink = (text) => {
							return (
								<>
									{text.length >= 115 ? (showReadMore ? '' : '...') : ''}
									{text.length >= 115 ? (
										<a
											onClick={() => {
												SetShowReadMore(!showReadMore);
											}}>
											{showReadMore ? ' read less' : ' read more'}
										</a>
									) : null}
								</>
							);
						};

						return (
							<>
								<img src={data.img_desktop.url} />
								<h1>{data.name[0].text}</h1>
								<p>
									{displayText(data.description[0].text)}
									{readMoreLink(data.description[0].text)}
								</p>
								<div>
									{data.stack[0].css ? <LogoImg className="logo" src="/icons/logo-css3.svg" color="black" alt="css" /> : null}
									{data.stack[0].html ? <LogoImg className="logo" src="/icons/logo-html5.svg" fill="black" alt="html" /> : null}
									{data.stack[0].js ? <LogoImg className="logo" src="/icons/logo-javascript.svg" alt="javascript" /> : null}
									{data.stack[0].react ? <LogoImg className="logo" src="/icons/logo-react.svg" alt="react" /> : null}
									{data.stack[0].express ? <LogoImg className="logo" src="/icons/logo-expressjs.svg" alt="expressjs" /> : null}
									{data.stack[0].next ? <LogoImg className="logo" src="/icons/logo-nextjs.svg" alt="nextjs" /> : null}
									{data.stack[0].node ? <LogoImg className="logo" src="/icons/logo-nodejs.svg" alt="nodejs" /> : null}
								</div>

								{data.websitelink.url ? (
									<button onClick={() => window.open(data.websitelink.url)}>
										Visit
										<img src={IosGlobeOutline} />
									</button>
								) : null}
								{data.githublink.url ? (
									<button onClick={() => window.open(data.githublink.url)}>
										View Code
										<img src={LogoGithub} />
									</button>
								) : null}
								<button onClick={() => Redirect('/')}>HOME</button>
							</>
						);
					})}
				</div>
			</main>

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

export async function getStaticProps(context) {
	const req = context.req;

	const projects = await Client(req).query(Prismic.Predicates.at('document.type', 'project'));

	return {
		props: { projects },
	};
}
