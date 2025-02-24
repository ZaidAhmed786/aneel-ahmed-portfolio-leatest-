import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const Testimonials = [
    {
        name: 'Rena Champ',
        title: 'Managing Director, USA',
        descriptoion: '“We’re highly satisfied with EL and his team’s exceptional support as our Virtual Assistant. Their dedication in client acquisition and securing real estate appointments has greatly contributed to our success.”',
    },
    {
        name: 'Jane Lopez',
        title: 'Realtor, USA',
        descriptoion: '“Working with Aneel Ahmed has transformed our marketing strategy. Their AI-driven solutions boosted lead generation and conversions, and their expertise made collaboration seamless. Highly recommend for businesses seeking real results!”',
    },
    {
        name: 'George jm',
        title: 'SEO Services ',
        descriptoion: '“Aneel Ahmed revolutionized our marketing strategy with innovative, tech-driven solutions, significantly boosting lead generation and conversions. His expertise and proactive communication were key to our success. Highly recommended for result-oriented digital marketing.”',
    },
    {
        name: 'Will Smith',
        title: 'Journalist, HWO News',
        descriptoion: '“Aneel Ahmed has greatly impressed me with their service and results. Their expertise boosted our online presence, engagement, and conversions. Highly dedicated and tailored solutions. I highly recommend them.”',
    },
]



const Testimonial = () => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
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

        <section className="tp-testimonial-section section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span>Testimonials</span>
                    <h2>What They say.</h2>
                </div>

                <div className="tp-testimonial-wrap">
                    <Slider {...settings}>
                        {Testimonials.map((tstml, tsm) => (
                            <div className="tp-testimonial-item" key={tsm}>
                                <div className="tp-testimonial-text">
                                    <p>{tstml.descriptoion}</p>
                                    <span>{tstml.name}</span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>Review</h1>
            </div>
        </section>
    )
}

export default Testimonial;