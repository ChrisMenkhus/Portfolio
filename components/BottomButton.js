import styled from 'styled-components'

const Style = styled.div`
    position: fixed;
    height: auto;
    width: 100%;
    bottom: 0;
    z-index: 5;
`;

const BottomButton = (props) => {
    return(
      <Style>
          {props.children}
      </Style>
    )
  }

export default BottomButton;