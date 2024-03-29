import styled from 'styled-components';

const Style = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: ${(p) => (p.flexdirection ? p.flexdirection : 'row')};
	width: 100%;
	width: ${(p) => (p.width ? p.width : '100%')};
	margin: ${(p) => (p.margin ? p.margin : '0 0 0 0')};

	align-items: center;
	justify-content: center;

	@media only screen and (min-width: 750px) {
		max-width: 750px;
	}
`;

const FlexBox = (p) => {
	return (
		<Style flexdirection={p.flexdirection} width={p.width} margin={p.margin}>
			{p.children}
		</Style>
	);
};

export default FlexBox;
