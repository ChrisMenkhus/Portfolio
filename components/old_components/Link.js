import styled from 'styled-components';

export default function Link(p) {
	return <Style onClick={p.onClick}>{p.children}</Style>;
}

const Style = styled.a`
	color: purple;
`;
