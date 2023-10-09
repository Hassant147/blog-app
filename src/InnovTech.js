import React, { useState } from 'react';
import Slider from 'react-slick';
import img1 from '../src/Media/InnovationTechSection/img1.png';
import img2 from '../src/Media/InnovationTechSection/img2.png';
import img3 from '../src/Media/InnovationTechSection/img3.png';
export { InnovationTechSection }


function InnovationTechSection() {
    const [selectedBox, setSelectedBox] = useState('Accessibility'); // Default selection

    const boxesData = ['Accessibility', 'Android Deve', 'Gadgets', 'Blockchain'];
    const cardsData = {
        'Accessibility': [
            { category: 'Creative, Digital', title: 'Card 1 for Accessibility', img: img1 },
            { category: 'Digital, Tech', title: 'Card 2 for Accessibility', img: img2 },
            { category: 'Tech, Innovate', title: 'Card 3 for Accessibility', img: img3 },
        ],
        'Android Deve': [
            { category: 'Android, OS', title: 'Card 1 for Android Deve', img: img1 },
            { category: 'Android, Innovate', title: 'Card 2 for Android Deve', img: img2 },
            { category: 'Android, Creative', title: 'Card 3 for Android Deve', img: img3 },
        ],
        'Gadgets': [
            { category: 'Gadgets, Innovate', title: 'Card 1 for Gadgets', img: img1 },
            { category: 'Gadgets, Tech', title: 'Card 2 for Gadgets', img: img2 },
            { category: 'Gadgets, Create', title: 'Card 3 for Gadgets', img: img3 },
        ],
        'Blockchain': [
            { category: 'Blockchain, Innovate', title: 'Card 1 for Blockchain', img: img1 },
            { category: 'Blockchain, Tech', title: 'Card 2 for Blockchain', img: img2 },
            { category: 'Blockchain, Create', title: 'Card 3 for Blockchain', img: img3 },
        ],
    };

    const boxesSliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    const cardsSliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100, // Adjust this breakpoint if you want changes on card slider up to 1100px too.
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="bg-white py-12">
            <div className="w-4/5 mx-auto">
    
                {/* Title */}
                <h1 className="text-3xl font-semibold mb-10 ml-0 text-left">Innovation & Tech</h1>
    
                {/* Boxes for Desktop */}
                <div className="hidden lg:flex space-x-4 mb-12">
                    {boxesData.map((box) => (
                        <div
                            key={box}
                            className={`w-60 h-20 rounded-lg cursor-pointer ${selectedBox === box ? 'shadow' : 'border border-zinc-500'}`}
                            onClick={() => setSelectedBox(box)}
                        >
                            <div className="text-center text-neutral-700 text-lg font-bold font-['Metropolis'] py-5">{box}</div>
                        </div>
                    ))}
                </div>
    
                {/* Boxes Slider for Mobile */}
                <div className="md:hidden">
                    <Slider {...boxesSliderSettings}>
                        {boxesData.map((box) => (
                            <div
                                key={box}
                                className={`w-60 h-20 rounded-lg cursor-pointer mb-4 ${selectedBox === box ? 'shadow' : 'border border-zinc-500'}`}
                                onClick={() => setSelectedBox(box)}
                            >
                                <div className="text-center text-neutral-700 text-lg font-bold font-['Metropolis'] py-5">{box}</div>
                            </div>
                        ))}
                    </Slider>
                </div>
    
                {/* Cards Slider */}
                <Slider {...cardsSliderSettings}>
    {cardsData[selectedBox].map((card, index) => (
        <div key={index} className="flex flex-col bg-white rounded-lg shadow h-70 w-70">
            <div className="w-68 h-68 flex-grow-0 flex-shrink-0 overflow-hidden rounded-t-lg">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover"/>
            </div>
            <div className="px-2 py-4 flex-grow flex-shrink">
                <div className="text-red-600 text-xs font-medium font-['Metropolis'] uppercase tracking-widest mb-2">{card.category}</div>
                <div className="text-center text-neutral-700 text-2xl font-bold font-['Metropolis']">{card.title}</div>
            </div>
        </div>
    ))}
</Slider>





            </div>
        </div>
    );
}

export default InnovationTechSection;
