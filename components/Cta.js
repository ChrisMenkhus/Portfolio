import styled from 'styled-components'

const Style = styled.div`
    h1 {
        font-size: 5rem;
        line-height: 4rem;
    }
    h2 {
        font-size: 4rem;
        font-weight: 100;
        line-height: 3.5rem;
        text-align: left;
    }
    h3 {
        font-size: 1.9rem;
        font-weight: 400;
        /* line-height: 3rem; */
    }
    h4 {
        font-size: 2rem;
    }
    span {
        background: linear-gradient(to right, #9105FF 0%, #C131F3 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }


    @media only screen and (max-width: 700px) {
        h1 {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 0.5rem;

        }
        h2 {
            font-size: 4rem;
            text-align: center;
        }
        h3 {
            font-size: 1.5rem;
            text-align: center;
        }
        h4 {
            font-size: 2rem;
            font-weight: 100;
        }
    }

    @media only screen and (max-width: 330px) {
        h1 {
            font-size: 2.1rem;
            text-align: center;
            margin-bottom: 0.5rem;

        }
        h2 {
            font-size: 3.3rem;
            text-align: center;
        }
        h3 {
            font-size: 1rem;
            text-align: center;
            
        }
        h4 {
            font-size: 2rem;
            font-weight: 100;
        }
    }
`;

const Cta = (p) => {
    return(
      <Style>
        {p.children}
      </Style>
    )
  }

export default Cta;