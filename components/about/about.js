// import Image from 'next/image';
import React from 'react'
// import aImg from '/public/images/img/ameel.jpg'

const About = (props) => {
    return (

        <section className="tf-about-section section-padding">
            <div className="container">
                <div className="tf-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-img">
                                <img src='./images/img/ameel.jpg' />
                              
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-text">
                                <small>Nice to meet you!</small>
                                <h2>WELCOME TO...</h2>
                                <h5>Lessons from Scaling a Tech Business Worldwide</h5>
                                <p>I’m Aneel Ahmed, an entrepreneur passionate about building solutions that make an impact. Over the years, I’ve managed digital marketing, web design and development, automated HR processes, and tackled mystery projects on Upwork. My journey has been about solving problems and creating value, which led me to launch a CRM product that is now successfully running in 20+ countries. From scaling businesses to leveraging automation, I believe in building things that drive growth and efficiency. My experience has taught me the power of innovation, persistence, and adaptability in today’s fast-evolving digital landscape.</p>

                                <div className="tf-funfact">
                                    <div className="tf-funfact-item">
                                        <h3><span>50</span>+</h3>
                                        <p>Projects Completed</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3><span>1</span>k+</h3>
                                        <p>Awards Win</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3><span>25</span>k+</h3>
                                        <p>Happy clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>About Me</h1>
            </div>
        </section>
    )
}

export default About;