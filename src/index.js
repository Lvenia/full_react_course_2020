import React from 'react';
import ReactDom from 'react-dom';

const FinnRecommendations = () => {
    return (
        <section>
            <Recommendation/>
            <Recommendation/>
            <Recommendation/>
            <Recommendation/>
            <Recommendation/>
            <Recommendation/>
        </section>
    )
}

const Recommendation = () => {
    return (
        <article>
            <Image/>
            <Description/>
        </article>
    )
}

const Image = () => {
    return <img src={'https://images.finncdn.no/dynamic/480w/logo/result/-3002/iad_1359802226105336855finn-logo-hovedlogo-rgb-ikketransp.png'} alt={'finn logo'}/>
}

const Description = () => {
    return (
        <>
            <div>
                Oslo
                <button>&#8230;</button>
            </div>
            <h3>FINN.no is looking for Software Developers</h3>
            <div>
                FIND
            </div>
        </>
    )
}

ReactDom.render(<FinnRecommendations/>, document.getElementById('root'));