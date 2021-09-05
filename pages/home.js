import Head from 'next/head';
import Box from '../components/Box';
import FlexBox from '../components/FlexBox';
import Cta from '../components/Cta';
import Button from '../components/Button';
import LiquidButton from '../components/LiquidButton';
import BottomButton from '../components/BottomButton';
import LogoImg from '../components/LogoImg';

import LogoGithub from 'react-ionicons/lib/LogoGithub';
import IosMail from 'react-ionicons/lib/IosMail';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import MdDownload from 'react-ionicons/lib/MdDownload';
import IosArrowForward from 'react-ionicons/lib/MdArrowDropright';
import { useRouter } from 'next/router';

export default function Home() {
	const router = useRouter();

	const Redirect = (path) => {
		router.push(path);
	};

	return (
		<>
			<Head>
				<title>Chris Menkhus Portfolio</title>
			</Head>
			<main className="container">
				<Cta>
					<h2>HELLO, I AM</h2>
					<h1>CHRIS MENKHUS</h1>
					<h3>
						PROFESSIONAL <span>{'<CODER>'}</span> & UI/UX <span>DESIGNER</span>.
					</h3>
				</Cta>
				<FlexBox width="100%" margin="2rem 0 0.3rem">
					<Box justify="flex-start">
						<label>Connect </label>
					</Box>
					<Box justify="flex-end">
						<label>Resume</label>
					</Box>
				</FlexBox>
				<FlexBox width="100%">
					<Box margin="auto auto 0 auto" justify="flex-start">
						<ul>
							<LogoImg alt="Github" src="/icons/logo-github.svg" onClick={() => window.open('https://github.com/ChrisMenkhus')} />
							<LogoImg
								alt="linkedIn"
								src="/icons/logo-linkedin.svg"
								onClick={() => window.open('https://www.linkedin.com/in/chris-menkhus-ab27201a0/')}
							/>
							<LogoImg alt="Email" src="/icons/mail-outline.svg" onClick={() => window.open('mailto:menkhus.chris@gmail.com')} />
						</ul>
					</Box>
					<Box margin="auto auto 0 auto" justify="flex-end">
						<ul>
							<li>
								<LogoImg
									alt="Resume"
									src="/icons/arrow-down-outline.svg"
									onClick={() =>
										window.open('https://docs.google.com/document/d/17GMPd6Rm3f0BPTpqSF-DkY-KojQKCyqksZZfUw7l7zA/edit?usp=sharing')
									}
									className="icon"
									color="black"
								/>
							</li>
						</ul>
					</Box>
				</FlexBox>
				<LiquidButton handleClick={() => Redirect('/Projects')}>PROJECTS</LiquidButton>
			</main>

			<style jsx>{``}</style>
		</>
	);
}
