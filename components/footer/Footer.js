import React from 'react'
import Link from 'next/link'
import Logo from '/public/images/logo.png'
import Image from 'next/image'

const Footer = (props) => {
    return (
        <div className="tp-site-footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-image">
                            <Link className="logo" href="/"><h1>Aneel Ahmed</h1></Link>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="link-widget">
                            <ul>
                                <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link href="/"><i className="ti-linkedin"></i></Link></li>
                                <li><Link href="/"><i className="ti-pinterest"></i></Link></li>
                                <li><Link href="/"><i className="ti-vimeo-alt"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="copyright">
                            <p>© 2023. All rights reserved by AneelAhmed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;