import styled from 'styled-components'

const Style = styled.div`
    height: ${p => p.height ? p.height : 'auto'};
    width: ${p => p.width ? p.width : 'auto'};
    min-width: 300px;
    max-width: 800px;

    margin: ${p => p.margin ? p.margin : 'auto'};

    /* filter: blur(15px); */

    img {
        width: 100%;
        height: 100%;
        object-fit: cover; /*magic*/

        
        filter: grayscale(100%);

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