import styled from 'styled-components';
import IosArrowForward from 'react-ionicons/lib/MdArrowDropright';

const Style = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: auto;
	width: auto;
	margin-top: 3rem;

	.neomorph {
		height: 2.5rem;
		width: 12rem;
		position: absolute;
		left: 0;
		top: 0;
	}

	.neomorph:before,
	.neomorph:after {
		content: '';
		height: 2.5rem;
		width: 12rem;
		position: absolute;
		left: 0;
		top: 0;
	}

	.neomorph:before {
		box-shadow: inset 0.4rem 0.4rem 0.5rem rgba(25, 25, 25, 0.1);
	}

	.neomorph:after {
		box-shadow: inset -0.2rem -0.2rem 0.4rem rgba(248, 248, 255, 0.3);
	}

	button {
		height: 2.5rem;
		width: 12rem;
		margin: auto;
		padding: 0;
		border: 0px solid rgb(248, 248, 255);
		background-color: transparent;
		font-size: 1.4rem;
		letter-spacing: 0.07rem;
		position: relative;
		overflow: hidden;
		transition: 0.5s;

		border-radius: 0.3rem;
	}
	button:hover {
		transform: scale(1.05);
		box-shadow: inset -0.2rem -0.4rem 0.5rem rgba(0, 0, 0, 1);
	}

	button span {
		position: relative;
		left: 0px;
		height: 100%;
		z-index: 1;
		color: black;
		/* margin-left: 1rem; */
		transition: 0.3s;
		border-radius: 5px;
	}
	button .icon {
		margin: auto;
		/* margin-right: 0.1rem; */
		transition: 0.3s;
		height: 100%;
	}
	button .liquid {
		position: absolute;
		left: 0;
		top: 0;
		width: 200px;
		height: 200px;
		background: #9105ff;
		background: linear-gradient(80deg, #9105ff, #9120ee, #4900ff, #480063);
		background-size: 200% 200%;
		animation: gradientfade 1s ease infinite;

		/* box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5); */
		transition: 0.6s;
		border-radius: 5px;
	}
	button:hover .liquid {
		top: -40px;
	}
	button:hover span {
		color: white;
	}
	button:hover .icon {
		fill: white;
	}
	button .liquid:before,
	button .liquid:after {
		content: '';
		position: absolute;
		width: 200%;
		height: 200%;
		top: -70px;
		left: 50%;
		transform: translate(-50%, -75%);
		background: #000;
	}
	button .liquid:before {
		border-radius: 47%;
		background: rgba(248, 248, 255, 1);
		animation: animate 5s linear infinite;
	}
	button .liquid:after {
		border-radius: 46%;
		background: rgba(248, 248, 255, 0.5);
		animation: animate 10s linear infinite;
	}
	@keyframes animate {
		0% {
			transform: translate(-50%, -75%) rotate(0deg);
		}
		100% {
			transform: translate(-50%, -75%) rotate(360deg);
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

const LiquidButton = (p) => {
	return (
		<Style>
			<button onClick={() => p.handleClick()}>
				<span>
					{p.children}
					{/* <IosArrowForward className="icon" /> */}
				</span>
				<div class="liquid" />
				<div class="neomorph" />
			</button>
		</Style>
	);
};

export default LiquidButton;
