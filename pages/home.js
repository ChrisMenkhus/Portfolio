import Head from 'next/head'
import Box from '../components/Box'
import FlexBox from '../components/FlexBox'
import Cta from '../components/Cta'
import Button from '../components/Button'
import BottomButton from '../components/BottomButton'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import IosMail from 'react-ionicons/lib/IosMail'
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'
import MdDownload from 'react-ionicons/lib/MdDownload'
import IosArrowForward from 'react-ionicons/lib/MdArrowDropright'
import { useRouter } from 'next/router'



export default function Home() {
  const router = useRouter()

  const Redirect = (path) => {
    router.push(path)
  }

  return (
    <React.Fragment>
      <Head>
      <title>Chris Menkhus Portfolio</title>
      </Head>
      <main className='container'>
        <Cta>
          <h2>HELLO, I AM</h2>
          <h1>CHRIS MENKHUS</h1>
          <h3>A PROFESSIONAL <span>{'<CODER>'}</span> & UI/UX <span>DESIGNER</span>.</h3>
        </Cta>
        <FlexBox width='100%' margin='2rem 0 0.3rem' >
          <Box justify='flex-start'>
            <label>Connect <span id='wave'>👋</span></label>
          </Box>
          <Box justify='flex-end'>
            <label>Resume</label>
          </Box>
        </FlexBox>
        <FlexBox width='100%'>
          <Box margin='auto auto 0 auto' justify='flex-start'>
            <ul>
            <li><LogoGithub onClick={()=>window.open('https://github.com/ChrisMenkhus')} className='icon' color='white'/></li>
            <li><LogoLinkedin onClick={()=>window.open('https://www.linkedin.com/in/chris-menkhus-ab27201a0/')} className='icon' color='white' /></li>
            <li><IosMail onClick={()=>window.open('mailto:menkhus.chris@gmail.com')} className='icon' color='white'/></li>
            </ul>
          </Box>
          <Box margin='auto auto 0 auto' justify='flex-end'>
            <ul>
            <li><MdDownload onClick={()=>window.open('https://docs.google.com/document/d/1eHd2vTMKE_DPJ53QVGX3gXprzzZJu4fhQ6hztDTzdDo/edit?usp=sharing')} className='icon' color='white'/></li>
            </ul>
          </Box>
        </FlexBox>
      </main>
        <BottomButton>
        <FlexBox width='100%' >
          <Button margin='-7rem 2rem 0 auto' 
            img={IosArrowForward}
            handleClick={()=>Redirect('/projects')}
          >Projects</Button>
        </FlexBox>
        </BottomButton>
      <style jsx>
        {`
           main {
             opacity: 0;
             animation: fadein 2s forwards;
             animation-delay: 0.5s;
           }

          @keyframes fadein {
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </React.Fragment>
  )
}


