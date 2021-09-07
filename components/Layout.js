import Head from 'next/head';

export default function Layout({ children }) {
	return (
		<React.Fragment>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@299&display=swap" rel="stylesheet"></link>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
			</Head>
			{/* <Navbar /> */}
			{children}
			<style jsx global>
				{`
					:root {
						--background: #f8f8ff;
						--dark: #0d0d0d;
					}
					* {
						box-sizing: border-box;
						margin: 0;
						padding: 0;
						user-select: none;
						color: var(--dark);
						text-align: center;
					}
					html {
						height: 100vh;
						font-family: 'Epilogue', sans-serif;
						scroll-behavior: smooth;
					}
					body {
						height: 100%;
						background-color: var(--background);
						display: flex;
					}
					main {
						opacity: 0;
						animation: fadein 2s forwards;
						animation-delay: 0.5s;
						margin: 0;
						overflow: hidden;
						min-height: calc(100vh - 2rem);
						margin-bottom: 30vh;
					}
					.white {
						color: white;
					}
					#__next {
						height: 100%;
						width: 100%;
					}

					button {
						cursor: pointer;
					}

					.button_container {
						margin-top: 2rem;
						display: flex;
						flex-direction: column;
					}

					h1 {
						font-family: Roboto;
						font-style: normal;
						font-weight: normal;
						font-size: 32px;
						line-height: 37px;
						letter-spacing: -0.06em;
						color: #000000;
						text-align: left;
					}

					h2 {
						font-family: Roboto;
						font-style: normal;
						font-weight: 100;
						font-size: 24px;
						line-height: 28px;
						letter-spacing: -0.03em;

						color: #000000;
					}

					h3 {
						font-family: Roboto;
						font-style: normal;
						font-weight: normal;
						font-size: 24px;
						line-height: 28px;
						letter-spacing: -0.1em;
						color: #0e46b9;
						text-align: left;
					}

					h4 {
						font-family: Roboto;
						font-style: normal;
						font-weight: 300;
						font-size: 18px;
						line-height: 21px;
						color: #0e46b9;
					}

					p {
						font-family: Roboto;
						font-style: normal;
						font-weight: 300;
						font-size: 24px;
						line-height: 28px;
						letter-spacing: -0.04em;
						color: #000000;
						text-align: left;
					}

					@keyframes fadein {
						to {
							opacity: 1;
						}
					}
				`}
			</style>
		</React.Fragment>
	);
}
