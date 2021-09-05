import styled from 'styled-components';

const Style = styled.div`
	width: ${(p) => (p.width ? p.width : '10rem')};
	height: auto;
	display: flex;
	flex-direction: ${(p) => (p.flexdirection ? p.flexdirection : 'column')};
	margin: ${(p) => (p.margin ? p.margin : 'auto')};

	label {
		display: flex;
		width: 100%;
		text-align: center;
		padding: 0;
		justify-content: ${(p) => (p.justify ? p.justify : 'center')};
		font-size: 1.3rem;
	}

	ul {
		list-style-type: none;
		display: flex;

		li {
			display: flex;
			width: 100%;
			justify-content: ${(p) => (p.justify ? p.justify : 'center')};
			margin: 0.3rem;
			color: red;
		}
	}
	.icon {
		transition: all 0.3s;
		&:hover {
			transform: scale(1.2);
		}
	}

	#wave {
		transition: all 0.1s;
		&:hover {
			transform: scale(1.2);
		}
	}

	.fade {
		animation: grow 0.2s alternate-reverse;
	}

	@keyframes grow {
		to {
			transform: scale(1.5) rotate(30deg) translate3d(-2px, 0, 0);
		}
	}

	@keyframes shake {
		10%,
		90% {
			transform: translate3d(-1px, 0, 0);
		}

		20%,
		80% {
			transform: translate3d(2px, 0, 0);
		}

		30%,
		50%,
		70% {
			transform: translate3d(-2px, 0, 0);
		}

		40%,
		60% {
			transform: translate3d(2px, 0, 0);
		}
	}
`;

const Box = (p) => {
	return (
		<Style width={p.width} margin={p.margin} flexdirection={p.flexdirection} justify={p.justify}>
			{p.children}
		</Style>
	);
};

export default Box;
