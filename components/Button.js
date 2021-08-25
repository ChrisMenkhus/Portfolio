import styled from 'styled-components';

const Style = styled.div`
	display: flex;
	flex-direction: row;
	margin: ${(p) => (p.margin ? p.margin : '0')};
	text-align: left;
	width: auto;

	button {
		height: 3rem;
		width: 12rem;
		display: flex;
		margin: auto;
		padding: 0;
		color: black;
		background-color: ${(p) => (p.bgcolor ? p.bgcolor : '#9105ff')};

		font-size: 1.3rem;
		border: none;
		transition: all 0.1s;
	}

	span {
		width: 100%;
		height: 100%;
		margin-top: 0.2rem;
		text-align: left;
		margin-left: 1rem;
		margin: auto;
		text-align: center;
		padding: 0.7rem 0;
		color: white;
	}

	.icon {
		position: relative;
		display: flex;
		margin: auto 1rem auto 0;
	}

	overflow: none;

	button:hover {
		transform: scale(1.1);
		outline: none;
	}
`;

const Button = (p) => {
	return (
		<Style margin={p.margin} bgcolor={p.bgcolor}>
			<button onClick={p.handleClick}>
				<span>{p.children}</span>
				{p.img ? <p.img className="icon" color="white" /> : null}
			</button>
		</Style>
	);
};

export default Button;
