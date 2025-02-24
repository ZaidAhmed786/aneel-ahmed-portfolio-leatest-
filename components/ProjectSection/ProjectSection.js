import Image from 'next/image';
import React, { useState } from 'react';
import Projects from '../../api/project'
import ProjectSingle from '../ProjectSingle/ProjectSingle';


const ProjectSection = (props) => {

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({
    })

    const [number, setCount] = useState(3);
    const [buttonActive, setButtonState] = useState(false);

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }
    return (

        <section className="tp-project-section section-padding">
            <div className="container">
            <div className="tp-section-title">
                    <span className='fs-3'>Our Product</span>
                    <h2>Zolara CRM – Complete Control & Efficiency</h2>
                </div>
                <div className="tp-project-wrap">
                    <div className="row">
                        
                            <div className="col col-xl-12 col-lg-12 col-sm-12 col-12" >
                                <div className="tp-project-item">
                                  <div className="tp-project-img">
    {/* تصویر کی جگہ ویڈیو لگائیں */}
    <video autoPlay loop muted playsInline className='w-100'>
        <source src="./images/img/crm.mp4" type="video/mp4" className='w-100' />
        Your browser does not support the video tag.
    </video>
</div>
                                    <div className="tp-project-content">
                                        <span>Web Design</span>
                                        <h2 >Our Business Model</h2>
                                    </div>
                                </div>
                            </div>
                    </div>
                   
                </div>
                
            </div>
            <ProjectSingle open={open} onClose={handleClose} title={state.title} pImg={state.ps1img} psub1img1={state.psub1img1} psub1img2={state.psub1img2} />

            <div className="visible-rotate-text">
                <h1>My Projects</h1>
            </div>
        </section>
    );
}

export default ProjectSection;