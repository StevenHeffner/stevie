import React, { Component } from 'react';
import styled, { keyframes } from "styled-components";
import Loading from './Loading';
import Loading2 from './Loading2'

class AI extends Component {
constructor(){
  super()

  this.state = {
    listen: false,
    visable: true,
    pageOne: true,
    showLoader: true


  }
}

changeState () {
  this.setState({
    listen: !this.state.listen
  })
}

handleStop(){
  this.setState({
    visable: false
  }, () => this.loadMessage())

}

loadMessage(){
  setTimeout(() => {
    this.setState({
      pageOne: false
    }, () => this.displayPreMessage())
  }, 2000)
}


displayMessage(){
  setTimeout(()=> {
    this.setState({
      showLoader: false
    })
  }, 2600)
  var i = 0;
  var txt = `I have an idea for a 4D printer that is capable of printing an actual life form.`; /* The text */
  var speed = 25; /* The speed/duration of the effect in milliseconds */
  console.log(txt);
  
  function typeWriters() {
    if (i < txt.length) {
      document.getElementById('message').innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriters, speed);
    }
  }
  typeWriters()
  console.log('done')
}

displayPreMessage(){
  setTimeout(() => {this.displayMessage()}, 4000)
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const now = new Date()
  let date = now.getDate()
  let day = dayNames[now.getDay()]
  let month = monthNames[now.getMonth()]
  let year = now.getFullYear()
  var i = 0;
  var txt = `On ${day} ${month} ${date}rd , Austin Pegues shared an idea with Jacob Yang.`; /* The text */
  var speed = 25; /* The speed/duration of the effect in milliseconds */
  console.log(txt);
  
  function typeWriter() {
    
    if (i < txt.length) {
      document.getElementById('pre-message').innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter()
}

render() {
    return (
      <Container>
        <Header>
          <Logo>
            STEVIE
          </Logo>
          <Greeting>
            Hello, Austin
          </Greeting>
        </Header>
 
        <Content>
          {this.state.pageOne ?
          <Instructions >
          <Text out={this.state.visable}>What can I help you with, Austin?</Text>

          {this.state.listen ? <Loading vis = {this.state.visable}/> : <div style ={{height: '19px'}}></div>}

          {!this.state.listen ?
          <ListenButton onClick={_ => this.changeState()} out = {this.state.visable}>
            Listen
          </ListenButton>
          :
          <StopListenButton  onClick={_ => this.handleStop()} out={this.state.visable}>
            Stop Listening
          </StopListenButton> }
          </Instructions>
          :
          <PageTwo>
            <Loading2 load = {this.state.showLoader}/>
 
            
            <PreMessage>
              <div id = 'pre-message'></div>
            </PreMessage>
            <MessageBackground>
              <Message>
               <div id = 'message'></div>
              </Message>
            </MessageBackground>
          </PageTwo>          
          }

          

 

        </Content>
      </Container>
    );
  }
}

export default AI;

// var margin = this.state.listen ? `magrin-top: 80px` : `margin-top: 40px`

// let A = {
//   marginBottom: '40px',
//   transition: 'margin-bottom 80px',
//   transitionDuration: '.5s',
//   transitionTimingFunction: 'linear-forwards'
// }

// let B = {
//   marginBottom: '80px',
//   transition: 'margin-bottom 40px',
//   transitionDuration: '.5s',
//   transitionTimingFunction: 'linear-forwards'
// }

const fc = `  
display: flex;
flex-direction: column
justify-content: center
align-items: center`

const Container = styled.section`
  background: #fafafa;
  height: 100vh;
  width: 100%;
  z-index: 0;
`
const Header = styled.div`
  position: relative;
  background: #2A93D5;
  display: flex;
  justify-content: space-between
  height: 44px;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
  padding: 10px;
  z-index: 2;
`
const Logo = styled.div`
  display: flex
  justify-content: center
  align-items: center
  color: #ffffff
  border: 3px solid white;
  font-size: 30px;
  letter-spacing: 2px;
  padding-left: 5px
  margin-left: 10px
  padding-right: 5px;
`
const Greeting = styled.div`
  display: flex
  justify-content: center
  align-items: center
  color: #ffffff
  margin-right: 10px
  font-size: 17px
`
const Content = styled.section`
  height: calc(100% - 67px);
  width: 100%
  z-index: 1
  ${fc}
`

const Instructions = styled.div`
  box-sizing: border-box;
  padding: 80px 30px
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-around
  height: 400px
  width: 700px
  background-color: #ffffff
  z-index: 2
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
`
const PageTwo = Instructions.extend`
padding: 50px 30px
jusify-content: space-between;
`

const fadeout = keyframes`
from {

  opacity: 1;
}

to {
  opacity: 0;

}
`
const fadein = keyframes`
to {
  opacity: 1;

}
`

const Text = styled.div`
font-size: 20px
color: #6D6D6D
display: inline
visibility: ${props => props.out ? 'visible' : 'hidden'}
animation: ${props => props.out ? null : fadeout} .7s ease-out;
transition: visibility .7s ease-out;
`




const ListenButton = styled.button`
  background-color: #2A93D5
  font-size: 16px
  height: 50px
  width: 23%
  color: #ffffff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1.4em;
  border-radius: 2px;
  cursor: pointer;
  visibility: ${props => props.out ? 'visible' : 'hidden'}
  animation: ${props => props.out ? null : fadeout} .7s ease-out;
  transition: visibility .7s ease-out;

  &:hover {
    background-color: #2788C5
  }
`
const StopListenButton = ListenButton.extend`
  background-color: #E23039 !important
`

const MessageBackground = styled.div`
  box-sizing: border-box;
  opacity: 0;
  width: 500px;
  height: 207px;
  border: 2px solid #F1F1F1;
  animation: ${fadein} 1s ease-in 1 forwards;
  animation-delay: 2.5s;
  display: flex;
  padding: 0px 20px 18px 20px;
 

`
const PreMessage = styled.div`
  
  font-size: 18px;
  color: #6D6D6D;
 
  
`

const Message = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: #6D6D6D;
font-size: 16px;

`



