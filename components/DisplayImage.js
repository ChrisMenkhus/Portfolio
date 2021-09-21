import styled from 'styled-components';

export default function DisplayImage(p) {
	const { src, active } = p;
	return (
		<Style src={src} className={active}>
			<div className="item_img" />
		</Style>
	);
}

const Style = styled.div`
	width: 100%;
	min-width: 14rem;

	height: 14rem;
	position: relative;

	overflow: hidden;
	margin: auto;
	margin-bottom: 1rem;
	max-width: 500px;
	margin-top: 0;
	background-color: #111;

	.item_img {
		position: absolute;
		left: 0%;
		top: 0;
		width: 100%;
		height: 100%;
		transition: all 0.1s;
		background-color: gray;

		background-image: url(${(p) => (p.src ? p.src : null)});
		background-size: cover;
		background-repeat: repeat-y;
	}

	.item_img:hover {
		animation-play-state: paused;
		transform: skew(0deg);
	}

	.active {
	}

	.active > .item_img {
		animation: moveImg alternate 10s infinite;
		animation-timing-function: linear;
	}
`;
