import styled from 'styled-components';

export default function LogoImg(p) {
	return (
		<Style onClick={p.onClick}>
			<img src={p.src}>{p.children}</img>
			<div className="tooltip">{p.alt}</div>
		</Style>
	);
}

const Style = styled.div`
	margin: 0.5rem;
	position: relative;
	height: 100%;
	width: 100%;
	height: 2rem;
	width: 2rem;

	cursor: ${(p) => (p.onClick ? 'pointer' : 'default')};

	img {
		height: 2rem;
		width: 2rem;
	}

	.tooltip {
		position: absolute;
		/* display: none; */
		display: flex;
		bottom: -90%;
		padding: 0.33rem;
		background-color: black;
		color: white;
		transition: 0.3s all;
		opacity: 0;
		width: 8rem;
		margin: auto;
		align-items: center;
		justify-content: center;
	}

	&:hover {
		.tooltip {
			/* display: flex; */
			opacity: 1;
		}
	}
`;
