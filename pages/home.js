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
            <li><LogoGithub className='icon' color='white'/></li>
            <li><LogoLinkedin className='icon' color='white' /></li>
            <li><IosMail className='icon' color='white'/></li>
            </ul>
          </Box>
          <Box margin='auto auto 0 auto' justify='flex-end'>
            <ul>
            <li><MdDownload className='icon' color='white'/></li>
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


