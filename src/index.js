import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import DotsIcon from './svgIcons/dots.svg';
import HeartIcon from './svgIcons/heart.svg';

const FinnRecommendations = () => {
    return (
        <section className={"recommendations"}>
            <Recommendation/>
            <Recommendation/>
            <Recommendation/>
            <Recommendation/>
            <Recommendation/>
            <Recommendation/>
        </section>
    )
};

const Recommendation = () => {
    return (
        <article className={"item"}>
            <Image/>
            <Description/>
        </article>
    )
};

const Image = () => {
    return (
        <div className={"img-wrapper"}>
            <img
                src={HeartIcon} className={"heart"}
                alt={'add to favorite heart icon'}
            />
            <img
                className={"main-img"}
                src={'https://images.finncdn.no/dynamic/480w/logo/result/-3002/iad_1359802226105336855finn-logo-hovedlogo-rgb-ikketransp.png'}
                alt={'finn logo'}
            />
        </div>
    );
};

const Description = () => {
    return (
        <>
            <div className={"description"}>
                Oslo
                <img
                    className={"icon"}
                    src={DotsIcon}
                    alt={'see more button'}
                />
            </div>
            <h3>FINN.no is looking for Software Developers</h3>
            <div className={"description"}>FIND</div>
        </>
    );
};

ReactDom.render(<FinnRecommendations/>, document.getElementById('root'));