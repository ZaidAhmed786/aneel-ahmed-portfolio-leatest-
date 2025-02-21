import React, { useState } from 'react';
import Services from '../../api/service'
import ServiceSingle from '../ServiceSingle';

const ServiceSection = (props) => {

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({
    })

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }

    return (


        <div className="tp-service-area section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span> Our services</span>
                    <h2>My best services</h2>
                </div>
                <div className="tp-service-wrap">
                    <div className="row align-items-center ">
                        {Services.slice(0, 8).map((service, srv) => (
                            <div className="col col-lg-3 col-md-6 col-12 mt-5" key={srv}>
                                <div className="tp-service-item">
                                    <i className={`fi ${service.icon}`}></i>
                                    <h2 onClick={() => handleClickOpen(service)}>{service.sTitle}</h2>
                                    <p>{service.desc}</p>
                                    <button className="read-more" onClick={() => handleClickOpen(service)}>
                                        <i className="fi flaticon-right-arrow"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>Services</h1>
            </div>
            <ServiceSingle open={open} onClose={handleClose} desc={state.desc} title={state.sTitle} dImg={state.sImgS} sImg1={state.ssImg1} sImg2={state.ssImg2} des2={state.des2} des3={state.des3}  head1={state.head1} 
             des4={state.des4} li1={state.li1} li2={state.li2}
            li3={state.li3} li4={state.li4} li5={state.li5}   
            
            
            
            />
        </div>
    );
}

export default ServiceSection;