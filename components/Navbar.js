import ActiveLink from './ActiveLink'
import styled from 'styled-components';

export default function Navbar() {
    return(
        <React.Fragment>
        <Style>
            <ul>
                <li><ActiveLink href='/'>Home</ActiveLink></li>
                <li><ActiveLink href='/projects'>Projects</ActiveLink></li>
            </ul>
        </Style>

        </React.Fragment>
)}

const Style = styled.nav`
    display: block;
    position: relative;
    background-color: #9105FF;
    background: linear-gradient(to right, #9105FF 0%, #C131F3 100%);

    height: 2rem;
    width: 100%;
    z-index: 1;
    opacity: 0;
    animation: fadein 1s forwards;
    animation-delay: 0.2s;

    ul {
        height: 100%;
        width: auto;
        display: flex;
        margin: 0 0 0 2rem; padding: 0;
        margin: 0;
        padding-left: 20vw;
        li {
            margin: auto 1rem;
            list-style-type: none;
            padding: 0.2rem 0;
            height: 100%;
            text-align: center;
            display: flex;
            width: auto;

            a {
                margin: auto;
                color: black;
                font-weight: 500;
                width: fit-content;
            }
            a:hover {
                color: white;
                font-weight: 700;
            }
        }

        .active {
            color: white;
            font-weight: 700;
        }

        @media only screen and (max-width: 1000px) {
            padding-left: 0.5rem;
        }
    }

    @keyframes fadein {
        to {
        opacity: 1;
        }
    }

`;


