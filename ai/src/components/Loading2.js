import React from "react";
import styled, { keyframes } from "styled-components";

const fadeout = keyframes`
to {
  opacity: 0;
}
`

const LoaderContainer = styled.div`
  text-align: center;
  width: 100%;
  position: relative;
  bottom: 20px;
  opacity: 1;
  animation: ${props => !props.load ? fadeout : null} .5s forwards
  transition: opacity .5s forwards;
  `;
  // animation: ${props => !props.vis ? pushUp : null} 1s forwards;
  // animation-delay: .7s; 
  // transition: bottom 1s forwards;


  // margin-bottom: 0px;
// animation: ${props => !props.vis ? pushUp : null} 1s forwards;
// animation-delay: .7s;
// transition: margin-bottom 1s forwards;

const LoaderSpinner = styled.div`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 6px;
  text-align: center;
`;

const LoaderSpinnerDots = styled.div`
  display: flex;
  box-pack: distribute;
  justify-content: space-around;
`;

const pulse = keyframes`
	0% {
    opacity: 0;
    transform: scale(.8);
  }

  80% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
  }
`;

const LoaderSpinnerDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #2A93D5;
  animation: ${pulse} 1s infinite ease-in-out;
`;

const Dot1 = LoaderSpinnerDot.extend`
  animation-delay: -0.32s;
`;

const Dot2 = LoaderSpinnerDot.extend`
  animation-delay: -0.16s;
`;

const Dot3 = LoaderSpinnerDot.extend``;

export default class Loader extends React.Component {
  
  render() {
    return (
      <LoaderContainer load ={this.props.load}>
        <LoaderSpinner>
          <LoaderSpinnerDots>
            <Dot1 />
            <Dot2 />
            <Dot3 />
          </LoaderSpinnerDots>
        </LoaderSpinner>
      </LoaderContainer>
    );
  }
}