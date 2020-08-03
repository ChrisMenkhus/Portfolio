import Head from 'next/head'
import FlexBox from '../components/FlexBox'
import Button from '../components/Button'
import BottomButton from '../components/BottomButton'
import MdArrowRoundBack from 'react-ionicons/lib/MdArrowDropleft'
import IosCloseCircleOutline from 'react-ionicons/lib/IosCloseCircleOutline'
import IosGlobeOutline from 'react-ionicons/lib/IosGlobeOutline'
import { useRouter } from 'next/router'
import Prismic from 'prismic-javascript'
import ImageBox from '../components/ImageBox'
import styled from 'styled-components'
import { useState } from 'react'
import { Client } from '../prismic-configuration'


// import LogoNodejs from 'react-ionicons/lib/LogoNodejs'
// import LogoJavascript from 'react-ionicons/lib/LogoJavascript'
// import LogoHtml5 from 'react-ionicons/lib/LogoHtml5'
// import LogoNodejs from 'react-ionicons/lib/LogoNodejs'
// import LogoNodejs from 'react-ionicons/lib/LogoNodejs'

// import LogoReact from './logo-react.svg'

export default function Projects(props) {
  const [selectedProject, setSelectedProject] = useState(null)

  let items = [];
  props.projects.results.map((res, i) => {
    items.push(res)
  })

  // console.log(items.map((res, i)=>res.data.name[0].text));

  const correctorder = [
    "Dungeon Hero", 
    "Take Me With You", 
    "Watch Order", 
    "Not An Apple", 
    "CSS-Gradient Generator", 
    "Be Martian",
    "Color It X", 
    "Screen Grabber",
    "Portfolio"
  ]

  items.sort((a,b) => { 
    return correctorder.indexOf(a.data.name[0].text) - correctorder.indexOf(b.data.name[0].text)
  })

  const router = useRouter()
  const Redirect = (path) => {
    router.push(path)
  }



  return (
    <React.Fragment>
      <Head>
      <title>Chris Menkhus Projects</title>
      </Head>
      <main>
        <ResponsiveFlex blur={selectedProject !== null ? true : false}>
          {items.map((res, i) => {
            let data = res.data;
            return(
                <div className={'gallery_item-' + i}
                  onClick={()=>{setSelectedProject(res)}}
                >
                  <ImageBox id='img_desktop' src={data.img_desktop.url}/>
                </div>
            )
          })}
        </ResponsiveFlex>
      </main>

      
      {selectedProject !== null ?
      <TopWindow>
          <div className='row'>
            <div className='column left'>
              <h1>{selectedProject.data.name[0].text}</h1>
              <div id='logo-container'>

                {selectedProject.data.stack[0].css ?
                <img className='logo' src='/icons/logo-css3.svg' /> : null }
                {selectedProject.data.stack[0].html ?
                <img className='logo' src='/icons/logo-html5.svg' /> : null }
                {selectedProject.data.stack[0].js ?
                <img className='logo' src='/icons/logo-javascript.svg' /> : null }
                {selectedProject.data.stack[0].react ?
                <img className='logo' src='/icons/logo-react.svg' /> : null }
                {selectedProject.data.stack[0].express ?
                <img className='logo' src='/icons/logo-expressjs.svg' /> : null }
                {selectedProject.data.stack[0].next ?
                <img className='logo' src='/icons/logo-nextjs.svg' /> : null }
                {selectedProject.data.stack[0].node ?
                <img className='logo' src='/icons/logo-nodejs.svg' /> : null }


              </div>
              <p>{selectedProject.data.description[0].text}</p>
              {selectedProject.data.websitelink.url ? 
              <Button 
              handleClick={()=>window.open(selectedProject.data.websitelink.url)}
              img={IosGlobeOutline}>Visit</Button> : null }
            </div>
            <div className='column right'>
              <img className='img_desktop' src={selectedProject.data.img_desktop.url}/>
              {selectedProject.data.img_mobile.url ?
              <img className='img_mobile' src={selectedProject.data.img_mobile.url}/> : null }
            </div>
          </div>
          <div id='close_btn' onClick={()=>{setSelectedProject(null)}}>
          <IosCloseCircleOutline className='icon' color='white'/></div>
      </TopWindow> : null }

      <BottomButton>
      <FlexBox width='100%'>
          <Button margin='-7rem auto 0 2rem' 
            img={MdArrowRoundBack}
            handleClick={()=>Redirect('/')}
          >Home</Button>
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

const TopWindow = styled.div`
  position: fixed; 
  background-color: #0D0D0D;
  width: 60vw;
  height: calc(70vh - 1rem);
  top: 50%;
  left: 50%;
  margin-top: calc(-35vh + 0.5rem);
  margin-left: calc(-60vw / 2);
  opacity: 0;
  animation: fadein 0.5s forwards;

  @keyframes fadein {
    to {
      opacity: 1;
    }
  }




  .row {
    position: relative;
    display: flex; flex-direction: row; flex-wrap: wrap;
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 700px) {
      
    }
  }
  .column {
    display: flex; flex-direction: column; flex-wrap: wrap;
    width: 50%;
    height: 100%;
    margin: 0; padding: 2rem;
    @media only screen and (max-width: 700px) {
      height: auto;
      padding: 0;      

    }
  }
  .left {
    width: 40%;
    padding-left: 3rem;
    padding-right: 0rem;
    @media only screen and (max-width: 1000px) {
      width: 50%;
      padding-left: 1rem;
    }
    @media only screen and (max-width: 700px) {
      width: 100%;
      padding: 0;      
    }
  }
  .right {
    width: 60%;
    padding-left: 0rem;
    padding-right: 0rem;
    @media only screen and (max-width: 1000px) {
      width: 50%;
    } 
    @media only screen and (max-width: 700px) {
      width: 100%;
      padding: 0;      
    }
  }

  h1 {
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.7rem;
    height: auto;
    /* overflow: hidden; */
    text-align: center;
    /* margin: 1rem auto 0; */
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media only screen and (max-width: 700px) {
      font-size: 1.5rem;
      margin: 5rem auto 0.5rem;
    }   
  }

  #logo-container {
    width: auto;
    display: flex; flex-direction: row;
    justify-content: center;
    margin: 0 auto auto auto;
  }

  .logo {
    width: 1.6rem;
    margin: auto 0.2rem;

  }

  p {
    margin: auto;
    padding: 0.5rem 1.5rem;
    /* margin-bottom: 0.5rem; */
    margin-top: 0.2rem;
    font-size: 0.95rem;
    @media only screen and (max-width: 1200px) {
      font-size: 0.8rem;
    }
    @media only screen and (max-width: 700px) {
    }
  }

  button {
    /* margin-bottom: 6rem; */
    @media only screen and (max-width: 700px) {
      margin-bottom: 1rem;

    }
  }

  #close_btn {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 1rem;
    margin-top: 1rem;

    .icon {
      height: 2.5rem;
      width: 2.5rem;

      transition: all 0.3s;
      &:hover {
        transform: scale(1.05);
      }
    }


  }

  .img_desktop {
    width: 70%;
    margin: auto auto auto 5%;
    border-radius: 1%;

    @media only screen and (max-width: 700px) {
      width: 100%;
      margin: 0 auto auto;
    }
  }
  .img_mobile {
    height: 50%;
    margin: auto auto auto 5%;
    border: 4px solid white;
    border-radius: 8px;

    margin-left: -6rem;
    margin-top: 30%;

    @media only screen and (max-width: 700px) {

      height: 250px;
      margin: 0 auto auto;
      margin-top: -60%;
      margin-right: 3rem;
      /* margin-left: -7rem; */
    }
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
    top: 0; left: 0;
    margin: auto;
    z-index: 2;
  }
`;

const ResponsiveFlex = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0px;

  filter: grayscale(${p => p.blur ? '100%' : '0'}) blur(${p => p.blur ? '5px' : '0'});

  overflow-y: ${p => p.blur ? 'hidden' : 'visible'};

  .gallery_item-1, .gallery_item-5 {
    grid-row: span 2;
    grid-column: span 2;  

    & > div {
      height: 100%;
      width: auto;
      max-width: none;
    }
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    .gallery_item-1, .gallery_item-5 {
    grid-row: span 1;
    grid-column: span 1;

    & > div {
      height: 100%;
      width: auto;
      max-width: none;
    }
  }

  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;


export async function getStaticProps(context) {
  const req = context.req

  const projects = await Client(req).query(
      Prismic.Predicates.at('document.type', 'project')
  );

  return {
    props: {projects}
  }
}
