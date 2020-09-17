import styled from 'styled-components'

const Style = styled.div`
    width: 100%;
    height: auto;

    margin: ${p => p.margin ? p.margin : 'auto'};

    img {
        object-fit: cover;
        width: 600px;
        height: 100%;

        @media only screen and (max-width: 700px) {
            width: 80vw;
        }  

        
        /* filter: grayscale(100%); */

        transform: scale(0.99);
        transition: all 0.5s;
        

        &:hover {
            filter: grayscale(0%);
            transform: scale(1);
        }
    }


`;

const ImageBox = (p) => {
    return(
        <Style src={p.src} width={p.width} height={p.height} margin={p.margin}>
            <img src={p.src}/>
        </Style>
    )
  }

export default ImageBox;