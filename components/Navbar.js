import ActiveLink from './ActiveLink';
import styled from 'styled-components';

export default function Navbar() {
	return (
		<>
			<Style>
				<ul>
					<li>
						<ActiveLink href="/">Home</ActiveLink>
					</li>
					<li>
						<ActiveLink href="/Projects">Projects</ActiveLink>
					</li>
				</ul>
			</Style>
		</>
	);
}

const Style = styled.nav`
	display: block;
	position: relative;
	background-color: #9105ff;
	background: linear-gradient(to right, #9105ff 0%, #c131f3 100%);
	background: linear-gradient(80deg, #9105ff, #9120ee, #4900ff, #480063);
	background-size: 800% 800%;
	animation: gradientfade 8s ease infinite;

	height: 2rem;
	width: 100%;
	z-index: 1;
	opacity: 0;
	/* animation: fadein 1s forwards, gradientfade 2s ease infinite; */
	/* animation-delay: 0.2s; */
	opacity: 1;
	/* animation: gradientfade 2s ease infinite; */

	ul {
		height: 100%;
		width: auto;
		display: flex;
		margin: 0 0 0 2rem;
		padding: 0;
		margin: 0;
		padding-left: 20vw;
		li {
			margin: auto 1rem;
			list-style-type: none;
			padding: 0.2rem 0;
			height: 100%;
			text-align: center;
			display: flex;
			width: auto;
			a {
				margin: auto;
				color: black;
				font-weight: 500;
				width: fit-content;
			}
			a:hover {
				color: white;
				font-weight: 700;
			}
		}

		.active {
			color: white;
			font-weight: 700;
		}

		@media only screen and (max-width: 1000px) {
			padding-left: 0.5rem;
		}
	}

	@keyframes fadein {
		to {
			opacity: 1;
		}
	}
	@keyframes gradientfade {
		0% {
			background-position: 41% 0%;
		}
		50% {
			background-position: 60% 100%;
		}
		100% {
			background-position: 41% 0%;
		}
	}
	@-webkit-keyframes gradientfade {
		0% {
			background-position: 41% 0%;
		}
		50% {
			background-position: 60% 100%;
		}
		100% {
			background-position: 41% 0%;
		}
	}
`;
