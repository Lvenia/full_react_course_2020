import React from 'react';
import ReactDom from 'react-dom';

const Hello = () => <h1>Hello World!</h1> //stateless functional component, implicit return

//stateless functional component, explicit return
const Description = () => {
    return <p>This is the fist component.</p>
};

//Nested component structure
const Greeting = () => {
    return (
        <>
            <Hello/>
            <Description/>
        </>
    )
};

ReactDom.render(<Greeting/>, document.getElementById('root'));