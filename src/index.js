import React from 'react';
import ReactDom from 'react-dom';

const FirstComponent = () => {
    return (
        <>
            <h1>Hello World!</h1>
            <p>This is the fist component.</p>
        </>
    )
};

ReactDom.render(<FirstComponent/>, document.getElementById('root'));