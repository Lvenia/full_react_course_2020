import React from 'react';
import ReactDom from 'react-dom';

// const FirstComponent = () => {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <p>This is the fist component.</p>
//         </>
//     )
// };

const SecondComponent = () => {
    return React.createElement('h1', null, 'Hello World!');
}

ReactDom.render(<SecondComponent/>, document.getElementById('root'));