import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

const DisplayRed = styled.div`
  background-color: red;
  color: white;
  height: 20px;
  margin: 10px;
`;

const DisplayBlue = styled.div`
  background-color: blue;
  color: white;
  height: 20px;
  margin: 10px;
`;

//Passed props
const AnyDisplay = styled.div`
  margin: 10px;
  background-color: ${props => (props.bg ? props.bg : "green")};
`;

//Adapting based on props
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: ${props => (props.primary ? "pink" : "white")};
  color: ${props => (props.primary ? "white" : "pink")};
`;

//Extending styles
const SpecialButton = styled(Button)`
  background-color: powderblue;
  color: black;
`;

//Create Keyframes
const motion = keyframes`
 0% {
   color:pink;
  }
  100% {
    color:aqua;
  }
}
`;
const Motion =styled.div`
display:inline-block;
animation:${motion} 4s linear;
padding: 2rem 1rem;
font-size: 1.2rem;
`;
function App() {
  return (
    <>
      <DisplayRed>Hello World!!!</DisplayRed>
      <DisplayBlue>
        This is my first project with styled-components.
      </DisplayBlue>
      <AnyDisplay bg="pink">I'm super excited to use this library.</AnyDisplay>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <SpecialButton>Button of Extended Styles</SpecialButton>
      <br/>
      {/* "as" polymorphic prop */}
     <Button as="a" href="/">Link with Button styles</Button>
     <br/>
     <Motion>Animation is happening here....</Motion>
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
