import styled from 'styled-components';

const Style = styled.div`
	width: ${(p) => (p.width ? p.width : '100%')};
	height: auto;
	display: flex;
	flex-direction: ${(p) => (p.flexdirection ? p.flexdirection : 'column')};
	margin: ${(p) => (p.margin ? p.margin : 'auto')};
	text-align: center;

	h1 {
		font-size: 1.8rem;
		font-weight: 500;
		line-height: 1.7rem;
		height: auto;
		padding: 0.05rem;
		margin: 0.5rem;
	}

	p {
		font-size: 1.5rem;
		font-weight: 200;
		padding: 0.5rem 1rem;
	}
`;

const TextBox = (p) => {
	return (
		<Style width={p.width} margin={p.margin} flexdirection={p.flexdirection} justify={p.justify}>
			{p.children}
		</Style>
	);
};

export default TextBox;
