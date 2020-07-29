import styled from 'styled-components'

const Style = styled.div`
    display: flex; flex-direction: row;
    margin: ${p => p.margin ? p.margin : '0'};
    text-align: left;
    width: auto;

    button {
        height: 2rem;
        width: 8rem;
      display: flex;
      margin: auto;
      padding: 0;
      color: black;
      background-color: #9105FF;
      font-size: 1.3rem;
      color: white;
      border: none;
    transition: all 0.1s;

    }

    span {
        width: 100%;
        margin-top: 0.2rem;
        text-align: left;
        margin-left: 1rem;
    }

    .icon {
        position: relative;
        display: flex;
        margin: auto 1rem auto 0;
    }
    overflow: none;
      button:hover {
        transform: scale(1.1);
          outline: none;
      }
`;

const Button = (p) => {
    return(
      <Style margin={p.margin}>
        <button onClick={p.handleClick}>
        <span>
        {p.children}
        </span>
        {p.img ?
        <p.img className='icon' color='white'/> : null}
        </button>
      </Style>
    )
  }

export default Button;