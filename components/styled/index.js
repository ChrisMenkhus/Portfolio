import styled from 'styled-components';

export function Wrapper(p) {
	return <Wrapper_Style>{p.children}</Wrapper_Style>;
}
const Wrapper_Style = styled.div``;

export const PageBackgroundImage = React.forwardRef((p, ref) => {
	return (
		<PageBackgroundImage_Style
			ref={ref}
			active={p.active}
			position={p.position}
			backgroundcolor={p.backgroundcolor}
			gradient={p.gradient}
			src={p.src}>
			{p.children}
		</PageBackgroundImage_Style>
	);
});
const PageBackgroundImage_Style = styled.div`
	position: relative;
	overflow: hidden;
	transition: opacity 1s;

	opacity: ${(p) => (p.active ? 1 : 0)};

	&:before {
		content: '';
		background-color: ${(p) => (p.backgroundcolor ? p.backgroundcolor : 'white')};
		background-image: url(${(p) => (p.src ? p.src : '')});
		background-size: cover;
		width: 100vw;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		overflow: hidden;
		z-index: -10;
		position: absolute;
		position: ${(p) => (p.position ? p.position : 'relative')};
	}

	&:after {
		display: ${(p) => (p.gradient ? 'flex' : 'none')};
		content: '';
		background: rgb(255, 255, 255);
		background: linear-gradient(166deg, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
		background-size: cover;

		width: 100vw;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: -10;
		/* position: ${(p) => (p.position ? p.position : 'relative')}; */
	}
`;

export function NavContainer(p) {
	return <NavContainer_Style>{p.children}</NavContainer_Style>;
}
const NavContainer_Style = styled.div`
	nav {
		position: fixed;
		top: calc(35vh);
		right: 8rem;
		z-index: 1;
		width: 6rem;
		cursor: pointer;
	}

	.white {
		color: white;
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
	li > label.white {
		color: white;
	}

	li > label.active {
		display: flex;
	}
`;

export function SquareButton(p) {
	return (
		<SquareButton_Style backgroundcolor={p.backgroundcolor} invertcolor={p.invertcolor}>
			<button onClick={p.onClick}>
				<h4>{p.children}</h4>
			</button>
		</SquareButton_Style>
	);
}
const SquareButton_Style = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.5rem;

	button h4 {
		color: ${(p) => (p.invertcolor ? 'white' : 'black')};
	}

	button {
		height: 3rem;
		width: 12rem;
		border-radius: 0;
		border: 0;
		position: relative;
		background: transparent;
	}

	button:before {
		content: '';
		position: absolute;
		left: 0;
		height: 100%;
		width: 5%;
		top: 0;
		background-color: #0e46b9;
		background-color: ${(p) => (p.backgroundcolor ? p.backgroundcolor : '#0e46b9')};
		transition: all 0.3s;
		z-index: -1;
	}

	button:hover:before {
		width: 100%;
	}

	button:hover h4 {
		color: ${(p) => (p.invertcolor ? 'black' : 'white')};
	}

	h4 {
		font-family: Roboto;
		font-style: normal;
		font-weight: 300;
		font-size: 18px;
		line-height: 21px;
		color: #0e46b9;
	}
`;

export function Page(p) {
	return <Page_Style>{p.children}</Page_Style>;
}
const Page_Style = styled.div`
	position: relative;
	display: flex;
	max-width: 1000px;
	margin: auto;
	flex-direction: column;
	min-height: 100vh;
`;

export function CircularButton(p) {
	return (
		<CircularButton_Style onClick={p.onClick}>
			<div className="icon" />
		</CircularButton_Style>
	);
}
const CircularButton_Style = styled.button`
	height: 3rem;
	width: 3rem;
	border-radius: 100%;
	border: 1px solid #000;

	background: transparent;
	position: relative;
	overflow: hidden;

	&:before {
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

	&:hover:before {
		height: 100%;
		border-radius: 0%;
	}

	&:hover .icon {
		background-image: url('/icons/right-arrow2.svg');
	}

	.icon {
		background-image: url('/icons/right-arrow.svg');
		background-size: cover;
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		transform: rotate(90deg);
	}
`;

export function ContentBody(p) {
	return <ContentBody_Style className={p.className}>{p.children}</ContentBody_Style>;
}
const ContentBody_Style = styled.div`
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

	.page_label {
		margin-top: 40vh;
		margin-left: -2rem;
	}

	.page_label_white {
		margin-top: 40vh;
		margin-left: -2rem;
		color: white;
	}

	.white {
		color: white;
	}

	.button_container {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
	}

	@media only screen and (max-width: 900px) {
		.center_content {
			margin-left: 4rem;
		}
	}
	@media only screen and (max-width: 1700px) {
	}
	@media only screen and (min-width: 1700px) {
	}
`;
