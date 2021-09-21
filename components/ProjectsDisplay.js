import React, { useState, useRef } from 'react';
// import LogoImg from '../components/LogoImg';
import ScrollPosition from '../components/ScrollPosition';

import IosGlobeOutline from 'react-ionicons/lib/IosGlobeOutline';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import { SquareButton, CircularButton } from './styled';
import DisplayImage from './DisplayImage';

export default function ProjectsDisplay(items, scrollTop) {
	const TruncateString = (length, str) => {
		// set string to length value
		let truncString = str.substring(0, length);
		// remove any characters from string after the last whitespace character
		truncString = truncString.substring(0, truncString.lastIndexOf(' '));
		return truncString;
	};

	return (
		<>
			<div>
				{items.map((res, i) => {
					let data = res.data;
					const [showReadMore, SetShowReadMore] = useState();
					const [showMoreContent, SetShowMoreContent] = useState();
					const itemRef = useRef();

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

					const isActive = () => {
						ScrollPosition(true) > (itemRef.current ? itemRef.current.offsetTop : 99999) ? true : false;
					};

					return (
						<div
							key={i}
							ref={itemRef}
							className="item"
							className={ScrollPosition(true) > (itemRef.current ? itemRef.current.offsetTop : 99999) ? 'item active' : 'item'}>
							<DisplayImage src={data.img_desktop.url.toString()} />
							<div className="item_details">
								<h2>{data.name[0].text}</h2>
								<p>
									{displayText(data.description[0].text)}
									{readMoreLink(data.description[0].text)}
								</p>
								{showMoreContent ? (
									<div className="button_container">
										{data.websitelink.url ? (
											<SquareButton onClick={() => window.open(data.websitelink.url)}>
												<h4>Visit</h4>
											</SquareButton>
										) : null}
										{data.githublink.url ? (
											<SquareButton onClick={() => window.open(data.githublink.url)}>
												<h4>View code</h4>
											</SquareButton>
										) : null}
									</div>
								) : null}
								{data.websitelink.url || data.githublink.url ? (
									!showMoreContent ? (
										<div className="item_details_button">
											<label>More Info</label>
											<CircularButton
												onClick={() => {
													SetShowMoreContent(!showMoreContent);
													SetShowReadMore(true);
												}}></CircularButton>
										</div>
									) : null
								) : null}
							</div>
							{/* <div>
								{data.stack[0].css ? <LogoImg className="logo" src="/icons/logo-css3.svg" color="black" alt="css" /> : null}
								{data.stack[0].html ? <LogoImg className="logo" src="/icons/logo-html5.svg" fill="black" alt="html" /> : null}
								{data.stack[0].js ? <LogoImg className="logo" src="/icons/logo-javascript.svg" alt="javascript" /> : null}
								{data.stack[0].react ? <LogoImg className="logo" src="/icons/logo-react.svg" alt="react" /> : null}
								{data.stack[0].express ? <LogoImg className="logo" src="/icons/logo-expressjs.svg" alt="expressjs" /> : null}
								{data.stack[0].next ? <LogoImg className="logo" src="/icons/logo-nextjs.svg" alt="nextjs" /> : null}
								{data.stack[0].node ? <LogoImg className="logo" src="/icons/logo-nodejs.svg" alt="nodejs" /> : null}
							</div> */}
							{/* 
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
							) : null} */}
						</div>
					);
				})}
			</div>
			<style jsx>{`
				.item {
					display: flex;
					justify-content: center;
					align-items: top;
					flex-direction: row;
					max-width: 500px;
					width: 100%;
					margin: 4rem 0;
					height: 100%;
					min-height: 20rem;
					position: relative;
					opacity: 0;
					transition: all 1s;
				}

				.item:hover {
				}

				a {
					color: #0e46b9;
				}

				.active {
					opacity: 1;
					transform: skewX(0deg);
				}

				.active img {
					animation: moveImg alternate 10s infinite;
					animation-timing-function: linear;
				}

				.item h2 {
					width: 100%;
					text-align: left;
				}

				.item_img {
					width: 100%;
					min-width: 14rem;

					height: 14rem;
					border: 2px solid black;
					position: relative;

					overflow: hidden;
					margin: auto;
					margin-bottom: 1rem;
					max-width: 500px;
					margin-top: 0;
					background-color: #111;
				}

				.item_img img {
					position: absolute;
					left: -50%;
					top: 0;
					width: 500px;
					height: auto;
					transition: all 0.1s;
				}

				.item_img:hover img {
					animation-play-state: paused;
					transform: skew(0deg);
				}

				@keyframes moveImg {
					0% {
						left: 0%;
					}
					100% {
						left: -100%;
					}
				}

				@keyframes fadeIn {
					0% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}

				.item_img:hover img:after {
				}

				.item_details {
					width: 100%;
					margin: 0;
					height: 100%;
					margin-left: 1rem;
				}

				@media only screen and (max-width: 900px) {
					.item_details {
						margin-left: 0rem;
					}
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
					opacity: 0;
					animation: fadeIn 5s forwards;
				}

				.item_details_button > label {
					text-align: left;
					margin-bottom: 0.5rem;
					color: #0e46b9;
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

				.button_container {
				}

				@media only screen and (max-width: 900px) {
					.item {
						flex-direction: column;
						margin-bottom: 6rem;
					}
				}
			`}</style>
		</>
	);
}
