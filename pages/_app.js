import '../styles/globals.css';
import Layout from '../components/Layout';
import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

MyApp.getInitialProps = async (ctx) => {
	const projects = await Client().query(Prismic.Predicates.at('document.type', 'project'));

	return {
		pageProps: { projects },
	};
};

export default MyApp;
