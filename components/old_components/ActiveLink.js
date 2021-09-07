import { useRouter } from 'next/router';
import styled from 'styled-components';

function ActiveLink({ children, href }) {
	const router = useRouter();

	const handleClick = (e) => {
		e.preventDefault();
		router.push(href);
	};

	return (
		<Style href={href} onClick={handleClick} className={router.pathname === href ? 'active' : ''}>
			{children}
		</Style>
	);
}

const Style = styled.a`
	color: white;
	&:hover {
		color: white;
	}
`;

export default ActiveLink;
