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

import { useState, useEffect } from 'react'



import { Client } from '../prismic-configuration'

export default function Projects(props) {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    console.log(selectedProject)
  }, [selectedProject])

  let items = [];
  props.projects.results.map((res, i) => {
    items.push(res)
  })

  const correctorder = [
    "Dungeon Hero", 
    "Take Me With You", 
    "Watch Order", 
    "Not An Apple", 
    "CSS-Gradient Generator", 
    "Be Martian",
    "Color It X", 
    "Screen Grabber"
  ]

  items.sort((a,b) => { 
    return correctorder.indexOf(a.data.name[0].text) - correctorder.indexOf(b.data.name[0].text)
  })

  console.log(items.map(r => r.data.name[0].text));



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

          {/* // <div key={i}>
          //   <h1>{data.name[0].text}</h1>
          //   <p>{data.description[0].text}</p>
          //   <ImageBox width='300px' height='225px' id='img_desktop' src={data.img_desktop.url}/>
          //   <ImageBox width='110px' id='img_mobile' src={data.img_mobile.url}/>
          //   <a href={data.websitelink.url}>visit</a>
          // </div> */}

      </main>
      <BottomButton>
      <FlexBox width='100%'>
          <Button margin='-7rem auto 0 2rem' 
            img={MdArrowRoundBack}
            handleClick={()=>Redirect('/')}
          >Home</Button>
      </FlexBox>
      </BottomButton>
      
      {selectedProject !== null ?
      <TopWindow>
          <div className='row'>
            <div className='column left'>
              <h1>{selectedProject.data.name[0].text}</h1>
              <p>{selectedProject.data.description[0].text}</p>
              <Button 
              handleClick={()=>window.open(selectedProject.data.websitelink.url)}
              img={IosGlobeOutline}>Visit</Button>
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

const ResponsiveFlex = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0px;

  filter: grayscale(${p => p.blur ? '100%' : '0'}) blur(${p => p.blur ? '5px' : '0'});


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

const TopWindow = styled.div`
  position: fixed; 
  background-color: #0D0D0D;
  width: 60vw;
  height: calc(60vh - 1rem);

  top: 50%;
  left: 50%;
  margin-top: calc(-30vh + 0.5rem);
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
  }
  .column {
    display: flex; flex-direction: column; flex-wrap: wrap;
    width: 50%;
    height: 100%;
    margin: 0; padding: 2rem;
  }
  .left {
    width: 40%;
    padding-left: 3rem;
    padding-right: 0rem;
  }
  .right {
    width: 60%;
    padding-left: 0rem;
    padding-right: 0rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 400;
    height: 2rem;
    text-align: center;
    margin: 6rem auto 0;
  }

  p {
    margin: auto;
    padding: 0.5rem 1.5rem;
  }

  button {
    margin-bottom: 6rem;
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
    border: 1px solid #FFF;
  }
  .img_mobile {
    height: 50%;
    margin: auto auto auto 5%;
    border: 4px solid white;
    border-radius: 8px;

    margin-left: -6rem;
    margin-top: 30%;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
    top: 0; left: 0;
    margin: auto;
    z-index: 2;
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
