import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {

    return (
        <Wrap bgImage={backgroundImg}>
                <Fade bottom>
                    <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    </ItemText>
                </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        {leftBtnText && 
                            <LeftButton>
                                {leftBtnText}
                            </LeftButton>
                        }
                        {rightBtnText && 
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; // horizontal
`;

const ItemText = styled.div`
    padding-top: 10vh;
    text-align: center;
`;

const ButtonGroup = styled.div`
    display: flex; 
    margin-bottom: 20px;
    @media (max-width: 760px) {
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`;

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.85;
`;

const DownArrow = styled.img`
    height: 40px;
    animation: animationDown infinite 1.5s;
    overflow-x: hidden;
`;

const Buttons = styled.div`

`;
