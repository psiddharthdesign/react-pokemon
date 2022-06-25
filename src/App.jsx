import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'

const StyledParagraph = styled.p`
border: 1px solid red;
padding: 16px;
`

const StyledButton = styled.button`
  background: dodgerblue;
  outline: none;
  border: 1px solid lightblue;
  transition: all 0.1s;
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
  }
`

const RedStyledButton = styled(StyledButton)`
  background: red;
`


function NameSayer(props){
  console.log(props);
  const [myValue, setMyValue] = useState(props.age);
  const [myOtherValue, setMyOtherValue] = useState(5);
  const increment = () => {
    setMyValue(myValue + 1);
  }

  const decrement = () => {
    setMyValue(myValue - 1);
  }

  const increment2 = () => {
    setMyOtherValue(myOtherValue + 1);
  }
  
  return <div>
    <StyledParagraph>My name is <span  >{props.name}</span>. My age is {myValue}. My other value is {myOtherValue}</StyledParagraph>
    <StyledButton onClick={increment}>Increment</StyledButton>
    <RedStyledButton onClick={decrement} children="Decrement"></RedStyledButton>
  </div>
}

function App() {
  return <>
    <NameSayer name='bhargav' age={30}>Hey how are you? </NameSayer>
    <NameSayer name='siddharth' age={25}/>
    <NameSayer name='vishwaja' age={27}/>
  </>;
}

export default App
