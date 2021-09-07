import styled from 'styled-components';

export default function Logo(props) {
	return <Style>{props.children}</Style>;
}

const Style = styled.div`
	width: auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
	position: relative;
`;
