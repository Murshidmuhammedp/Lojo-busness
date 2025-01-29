import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
    {
        image:
            "https://t4.ftcdn.net/jpg/05/08/17/01/360_F_508170187_4Oonk4IG8u9eyfwSUvTASkT8hl71vRX2.jpg",
    },
    {
        image:
            "https://c8.alamy.com/comp/2KHN0D5/banner-fully-editable-template-for-furniture-collection-2KHN0D5.jpg",
    },
    {
        image:
            "https://freehindidesign.com/wp-content/uploads/2022/08/170822-Furniture-shop-banner-template-cdr-and-psd-file.webp",
    },
];

const Firstbox = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        adaptiveHeight: true,
    };

    return (

        <div className="w-full h-auto flex justify-center items-center bg-gray-100">
            <div className="w-full px-2 m-8 sm:m-6 md:m-8">
                <Slider {...settings}>
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="w-full lg:h-[400px] min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[400px]"
                        >
                            <div className="w-full h-full">
                                <img
                                    src={card.image}
                                    alt={`Banner ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>



    );
};

export default Firstbox;