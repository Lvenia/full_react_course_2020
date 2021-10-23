import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import DotsIcon from './svgIcons/dots.svg';
import HeartIcon from './svgIcons/heart.svg';

const data = [
    {
        imgSrc: "https://images.finncdn.no/dynamic/480w/logo/result/-3002/iad_1359802226105336855finn-logo-hovedlogo-rgb-ikketransp.png",
        imgAlt: "finn logo",
        location: "Oslo",
        description: "FINN.no is looking for Software Developers",
        name: "FIND"
    },
    {
        imgSrc: "https://images.finncdn.no/dynamic/480w/logo/logo/1003025/20190424/6a0a3116-5d36-401e-9ef9-9113d8dc2169",
        imgAlt: "Vygruppen AS logo",
        location: "Oslo",
        description: "Utvikler",
        name: "Vygruppen AS"
    },
    {
        imgSrc: "https://images.finncdn.no/dynamic/480w/logo/logo/156127/20191112/606d0a1a-9937-4537-bde9-c218f25f9fdd",
        imgAlt: "Oslo kommune logo",
        location: "Oslo",
        description: "Senior systemutvikler",
        name: "Oslo kommune"
    },
    {
        imgSrc: "https://images.finncdn.no/dynamic/480w/logo/result/4623982/iad_8751825556493359780black_and_orange_on_white_300dpi__1_.png",
        imgAlt: "ITverket AS logo",
        location: "Oslo",
        description: "Utvikler",
        name: "ITverket AS"
    },
    {
        imgSrc: "https://images.finncdn.no/dynamic/480w/2021/10/vertical-1/04/4/234/129/324_103530866.jpg",
        imgAlt: "EXPERIS AS logo",
        location: "Oslo",
        description: "Fullstack Java-utvikler: Graduateprogram",
        name: "EXPERIS AS"
    },
    {
        imgSrc: "https://images.finncdn.no/dynamic/480w/2021/9/vertical-1/27/9/233/354/369_2096277246.png",
        imgAlt: "Bravida AS logo",
        location: "Oslo",
        description: "IT-support",
        name: "Bravida AS"
    },
    {
        imgSrc: "https://images.finncdn.no/dynamic/480w/2021/10/vertical-1/06/4/234/422/154_1089945049.jpg",
        imgAlt: "Protekt IT AS logo",
        location: "Oslo",
        description: "App-utvikler",
        name: "Protekt IT AS"
    },
];


const renderItems = (dataArray) => {
     return dataArray.map((item, index) => {
        return (
            <Recommendation
                key={index}
                name={item.name}
                alt={item.imgAlt}
                location={item.location}
                src={item.imgSrc}
                description={item.description}
            />
        )
    })
}


const FinnRecommendations = () => {
    return (
        <>
            <header>
                <div className={"header"}>
                    <h2>This is a clone of Anbefalinger section at FINN.no </h2>
                    <small>Iryna Kresinska, 23.10.2021</small>
                </div>
            </header>
            <section className={"recommendations"}>
                {renderItems(data)}
            </section>
        </>
    )
};

const Recommendation = ({src, alt, location, description, name}) => {
    return (
        <article className={"item"}>
            <Image src={src} alt={alt}/>
            <Description
                description={description}
                location={location}
                name={name}
            />
        </article>
    )
};

const Image = ({src, alt}) => {
    return (
        <div className={"img-wrapper"}>
            <img
                src={HeartIcon} className={"heart"}
                alt={'add to favorite heart icon'}
            />
            <img
                className={"main-img"}
                src={src}
                alt={alt}
            />
        </div>
    );
};

const Description = ({location, description, name}) => {
    return (
        <>
            <div className={"description"}>
                {location}
                <img
                    className={"icon"}
                    src={DotsIcon}
                    alt={'see more button'}
                />
            </div>
            <h3>{description}</h3>
            <div className={"description"}>{name}</div>
        </>
    );
};

ReactDom.render(<FinnRecommendations/>, document.getElementById('root'));