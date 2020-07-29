import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({children}) {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@299&display=swap" rel="stylesheet"></link>

      </Head>
      <Navbar/>
        {children}
      <style jsx global>  
      {`
        * {
            box-sizing: border-box;
            margin: 0; padding: 0;
            user-select: none;
            color: white;
            text-align: center;
        }
        html {
            height: 100vh;
            font-family: 'Epilogue', sans-serif;
        }
        body {
            height: 100%;
            background-color: #0D0D0D;
            display: flex;
        }
        main {
          display: flex;
          width: 100%;
          height: calc(100% - 3rem);
        }
        #__next {
          height: 100%;
          width: 100%;

        }
        .container {
          width: auto;
          min-height: 10vh;
          max-height: 60rem;
          max-width: 60rem;
          margin: auto;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: calc(100% - (2rem));
        }
      `}
      </style>
    </React.Fragment>
  )
}
