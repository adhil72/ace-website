"use client";

import React, { useEffect, useState } from 'react';

const CarouselGallery = ({ imageUrls }: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        setInterval(() => {
            nextSlide();
        }, 1000 * 5);
    }, [])

    return (
        <div className="relative w-full h-full max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg h-full">
                <img
                    src={imageUrls[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                />
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-[#ffffff] font-extrabold p-2 rounded-full focus:outline-none"
            >
                &#8592;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-[#ffffff] font-extrabold p-2 rounded-full focus:outline-none"
            >
                &#8594;
            </button>

            <div className="flex justify-center mt-4 space-x-2">
                {imageUrls.map((_: any, index: number) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarouselGallery;
