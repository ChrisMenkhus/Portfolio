import Head from 'next/head';
import Home from './home';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
	const router = useRouter();
	const Redirect = (path) => {
		router.push(path);
	};

	useEffect(() => {
		Redirect('/home');
	}, []);

	return <div />;
}
