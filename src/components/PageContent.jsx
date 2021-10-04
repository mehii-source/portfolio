import React from 'react';
import { Link } from "react-router-dom";
import bgheader from "../assests/images/cc-bg-1.jpg";
import staticmap from "../assests/images/staticmap.png";
import About from './About';
import ContactForm from './ContactForm';
import Education from './Education';
// import Reference from './Reference';
// import Portfolio from './Portfolio';
import Skills from './Skills';
import WorkExperience from './WorkExperience';

function PageContent() {
    return (
        <div className="page-content">
            <div>
                <div className="profile-page">
                    <div className="wrapper">
                        <div className="page-header page-header-small" filter-color="green">
                            <div className="page-header-image" data-parallax="true" style={{ backgroundImage: `url(${bgheader})` }}>
                            </div>
                            <div className="container">
                                <div className="content-center">
                                    <div className="cc-profile-image"><Link to="#"><img src="" alt="Img" /></Link></div>
                                    <div className="h2 title" data-aos="zoom-in">Megandar Khan S</div>
                                    <p className="category" style={{color:"#378c3f"}} data-aos="zoom-in">ReactJs Developer</p><a
                                        className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in"
                                        data-aos-anchor="data-aos-anchor">Hire Me</a>
                                    {/* <Link className="btn btn-primary" to="#" data-aos="zoom-in"
                                            data-aos-anchor="data-aos-anchor">Download CV</Link> */}
                                </div>
                            </div>
                            <div className="section">
                                <div className="container">
                                    <div className="button-container">
                                        {/* <Link className="btn btn-default btn-round btn-lg btn-icon" to="#"
                                        rel="tooltip" title="Follow me on Facebook"><i className="fa fa-facebook"></i></Link> */}
                                        <Link data-aos="fade-right" className="btn btn-default btn-round btn-lg btn-icon" to="#" rel="tooltip"
                                            title="Follow me on Twitter"><i className="fa fa-twitter"></i>
                                        </Link>
                                        <Link data-aos="zoom-in" className="btn btn-default btn-round btn-lg btn-icon" to="#" rel="tooltip"
                                            title="Follow me on Google+"><i className="fa fa-google-plus"></i>
                                        </Link>
                                        <Link data-aos="fade-left" className="btn btn-default btn-round btn-lg btn-icon" to="#" rel="tooltip"
                                            title="Follow me on Instagram"><i className="fa fa-instagram"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <About />
                <Skills />
                {/* <Portfolio/> */}
                <WorkExperience />
                <Education />
                {/* <Reference/> */}

                <div className="section" id="contact">
                    <div className="cc-contact-information" style={{ backgroundImage: `url(${staticmap})` }}>
                        <div className="container">
                            <div className="cc-contact">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="card mb-0" data-aos="zoom-in">
                                            <div className="h4 text-center title">Contact Me</div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="card-body">
                                                        <ContactForm />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card-body">
                                                        <p className="mb-0"><strong>Address </strong></p>
                                                        <p className="pb-2">Aadambakkam ,Chennai-600088</p>
                                                        <p className="mb-0"><strong>Phone</strong></p>
                                                        <p className="pb-2">+91 6380783595</p>
                                                        <p className="mb-0"><strong>Email</strong></p>
                                                        <p>megandarkhan@gmail.com</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageContent
