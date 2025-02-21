
import React, { useState, Fragment } from 'react';
import { Dialog, Grid, } from '@mui/material'
import Contact from './contact';
import Services from '../../api/service'
// import Image from 'next/image';


const ServiceSingle = ({ maxWidth, open, onClose, title, dImg, sImg1, sImg2, des2, desc,des3,
    head1,  des4,  li1, li2, li3, li4, li5,
  }) => {

    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body">
                    <button className='modal-close' onClick={onClose}><i className='fa fa-close'></i></button>
                    <div className="tp-service-single-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <div className="tp-service-single-wrap">
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-single-main-img">
                                                <img src={dImg} alt="" />
                                            </div>
                                            <div className="tp-service-single-title">
                                                <h3>{title}</h3>
                                            </div>
                                            <p>{des2}</p>
                                            <p>{des3}</p>
                                            <div className="row mt-4">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="tp-p-details-img">
                                                        <img src={sImg1} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="tp-p-details-img">
                                                        <img src={sImg2} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-service-single-item list-widget">
                                            <div className="tp-service-single-title">
                                                <h3>{head1}</h3>
                                            </div>
                                            <p>{des4}</p>
                                            <ul>
                                                <li>{li1}</li>
                                                <li>{li2}</li>
                                                <li>{li3}</li>
                                                <li>{li4}</li>
                                                <li>{li5}</li>
                                            </ul>
                                        </div>
                                        
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-single-title">
                                                <h3>Related Service</h3>
                                            </div>
                                            <div className="tp-service-area">
                                                <div className="row align-items-center">
                                                    {Services.slice(0, 3).map((service, srv) => (
                                                        <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                                            <div className="tp-service-item">
                                                                <i className={`fi ${service.icon}`} ></i>
                                                                <h2>{service.sTitle}</h2>
                                                                <p>{service.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-contact-area">
                                                <div className="tp-contact-title">
                                                    <h2>Have project in mind? Let's discuss</h2>
                                                    <p>Get in touch with us to see how we can help you with your project</p>
                                                </div>
                                                <div className="tp-contact-form-area">
                                                    <Contact />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default ServiceSingle

