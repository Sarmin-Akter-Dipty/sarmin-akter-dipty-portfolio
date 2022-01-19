import { faAddressCard, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import footer from '../Images/footer/undraw_adventure_re_ncqp.svg';
import './Footer.css'

const Footer = () => {
    return (
        <div className="back-ground py-2 mt-5 text-white">

            <div className="container">

                <div className="conatiner">
                    <div className="container">
                        <div className="row container d-lg-flex justify-content-center align-items-center">
                            <div className="col-md-3" data-aos="fade-down-right">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>

                                        <Card.Text className='main-info-1 font-size-3'><FontAwesomeIcon icon={faPhone} /> +8801773033037</Card.Text>
                                        <Card.Text className='main-info-1 font-size-3'><FontAwesomeIcon icon={faEnvelope} /> sarminakterdipty1@gmail.com</Card.Text>
                                        <Card.Text className='main-info-1 font-size-3'><FontAwesomeIcon icon={faAddressCard} /> Rangpur,Bangladesh</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-6" data-aos="zoom-in-up">

                                <img src={footer} className='footer-img' alt="" />

                            </div>
                            <div className="col-md-3" data-aos="fade-down-left">
                                <div className='margin-footer'>
                                    <a className='main-info-1 font-size-3' href='
             https://github.com/Sarmin-Akter-Dipty' target='_blank' ><i class="fab fa-github-square"></i> Github Link</a>
                                </div>

                                <div className='margin-footer'>
                                    <a className='main-info-1 font-size-3' href='
             https://github.com/Sarmin-Akter-Dipty' target='_blank' ><i class="fab fa-facebook-square"></i> Facebook Link</a>
                                </div>


                                <div className='margin-footer'>
                                    <a className='main-info-1 font-size-3 ' href='
             https://github.com/Sarmin-Akter-Dipty' target='_blank' ><i class="fab fa-linkedin"></i> Linkedin Link</a>
                                </div>


                                <div>
                                    <a className='main-info-1 font-size-3' href='
             https://github.com/Sarmin-Akter-Dipty' target='_blank' ><i class="fas fa-portrait"></i> Portfolio Link</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5' >
                        <p className='main-info-1 font-size-3' ><small>&copy; 2021 <u>Portfolio</u> Designed By <u>Sarmin Akter Dipty</u> </small></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;