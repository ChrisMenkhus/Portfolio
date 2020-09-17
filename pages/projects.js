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


export default function Projects(props) {
  const [selectedProject, setSelectedProject] = useState(null)

  let items = [];
  props.projects.results.map((res, i) => {
    items.push(res)
  })
  const correctorder = [
    "Take Me With You", 
    "Electric Boogaloo Car Dealership",
    "Dungeon Hero", 
    "Watch Order", 
    "Not An Apple", 
    "CSS-Gradient Generator", 
    "Be Martian",
    "Color It X", 
    "Screen Grabber",
    "Portfolio",
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
        <ResponsiveFlex>
          {items.map((res, i) => {
            let data = res.data;
            return(
                <div className='item'>
                    <div className='gallery_item' onClick={()=>{setSelectedProject(res)}}>
                    <ImageBox id='img_desktop' src={data.img_desktop.url}/>             
                    </div>
                    <div className='gallery_item_details'>
                
                    <h1>{data.name[0].text}</h1>

                    <div id='logo-container'>
                    {data.stack[0].css ?
                    <img className='logo' src='/icons/logo-css3.svg' /> : null }
                    {data.stack[0].html ?
                    <img className='logo' src='/icons/logo-html5.svg' /> : null }
                    {data.stack[0].js ?
                    <img className='logo' src='/icons/logo-javascript.svg' /> : null }
                    {data.stack[0].react ?
                    <img className='logo' src='/icons/logo-react.svg' /> : null }
                    {data.stack[0].express ?
                    <img className='logo' src='/icons/logo-expressjs.svg' /> : null }
                    {data.stack[0].next ?
                    <img className='logo' src='/icons/logo-nextjs.svg' /> : null }
                    {data.stack[0].node ?
                    <img className='logo' src='/icons/logo-nodejs.svg' /> : null }
                    </div>

                    <p id='description'>{data.description[0].text}</p>
                    {data.websitelink.url ? 
                    <Button 
                    handleClick={()=>window.open(data.websitelink.url)}
                    img={IosGlobeOutline}>Visit</Button> : null }

                    </div>
                </div>
            )
          })}
        </ResponsiveFlex>
      </main>

    

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

const ResponsiveFlex = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  padding: 4rem;
  filter: grayscale(${p => p.blur ? '100%' : '0'}) blur(${p => p.blur ? '5px' : '0'});
  overflow-y: ${p => p.blur ? 'hidden' : 'visible'};
  flex-wrap: wrap;

    @media only screen and (max-width: 700px) {
            padding: 0.2rem;
            }  

    .item {
      width: 100%;
      display: flex; flex-direction: row;
      margin: 0rem auto 2.5rem auto;
      margin: 2rem;

      @media only screen and (max-width: 700px) {
            flex-direction: column;
            margin: 0.5rem auto;
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
      
        }
    }

   

    .gallery_item_details {
        width: 100%;
        height: 100%;
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

    #description {
      text-align: center;
      font-size: 1.3rem;
        height: 50%;
        padding: 2rem 4rem 0rem;
        margin: 0 4rem;
        @media only screen and (max-width: 700px) {
          font-size: 0.8rem;
          height: auto;
            margin: auto;
            padding: 1rem;
        }   
    }



  @media only screen and (max-width: 900px) {

  }

  @media only screen and (max-width: 600px) {

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
