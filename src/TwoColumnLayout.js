import React from 'react';
import Slider from 'react-slick'; // Importing Slider from react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../src/Media/catImg.png';
import img2 from '../src/Media/c1.png';
import img3 from '../src/Media/c2.png';
import img4 from '../src/Media/c3.png';

function TwoColumnLayout() {
    const cardImages = [img2, img3, img4];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return ( <
        div className = "flex flex-wrap desktop:justify-between " > {
            /* Right column with a large image */ } <
        div className = "desktop:w-1/2 w-3/4 ml-auto order-1 desktop:order-2" >
        <
        img className = "w-full desktop:h-full h-40 rounded-tl-3xl rounded-bl-3xl"
        src = {
            img1
        }
        alt = "Large Image" / >
        <
        /div>

        {
            /* Left column with three cards */ } <
        div className = "w-full desktop:w-max desktop:space-y-6 space-y-12 order-2 desktop:order-1 flex flex-col desktop:mt-32 mx-auto desktop:ml-36 mt-10" >

        {
            /* Carousel for screens <= 1100px */ } <
        div className = "desktop:hidden mb-10 overflow-hidden " >
        <
        Slider {
            ...settings
        } > {
            cardImages.map((img, index) => ( <
                div key = {
                    index
                }
                className = "card flex flex-col items-center bg-white rounded space-y-4" >
                <
                img className = "w-48 h-48 rounded-xl mx-auto"
                src = {
                    img
                }
                alt = {
                    `Card ${index + 1} Image`
                }
                /> <
                div className = "mt-2 flex flex-col items-center" >
                <
                div className = "text-red-600 text-xs font-normal font-['Metropolis'] uppercase tracking-widest" > Creative, Digital < /div> <
                div className = "text-neutral-600 text-xl font-['Metropolis'] mt-2 font-medium" > IPadOS 14 introduces < br / > new designed < br / > specifically
                for ipad < /div> < /
                div > <
                /div>
            ))
        } <
        /Slider> < /
        div >

        {
            /* Standard grid for screens > 1100px */ } <
        div className = "hidden desktop:flex desktop:flex-col desktop:space-y-8" > {
            [1, 2, 3].map(card => ( <
                div key = {
                    card
                }
                className = "card flex flex-col desktop:flex-row items-center desktop:items-start bg-white rounded space-y-4 w-full desktop:w-auto" >
                <
                img className = "w-48 desktop:w-36 h-48 desktop:h-36 rounded-xl mx-auto desktop:mx-0"
                src = {
                    cardImages[card - 1]
                }
                alt = {
                    `Card ${card} Image`
                }
                /> <
                div className = "mt-2 desktop:space-y-4 desktop:mt-0 flex flex-col items-center desktop:items-start desktop:ml-4" >
                <
                div className = " text-red-600 text-xs font-normal font-['Metropolis'] uppercase tracking-widest" > Creative, Digital < /div> <
                div className = "text-start text-neutral-600 desktop:text-neutral-700 text-xl desktop:text-2xl font-['Metropolis'] mt-2 font-medium" > IPadOS 14 introduces < br / > new designed < br / > specifically
                for ipad < /div> < /
                div > <
                /div>
            ))
        } <
        /div>

        <
        /div> < /
        div >
    );
}

export default TwoColumnLayout;