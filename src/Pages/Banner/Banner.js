import React from 'react';
import './Banner.css';
import Typed from 'react-typed';
import { NavLink } from 'react-router-dom';
import bannerImg from '../Images/undraw_Programmer_re_owql.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faIdCard } from '@fortawesome/free-solid-svg-icons';


const Banner = () => {
    return (
        <div className="d-lg-flex justify-content-evenly align-items-center m-5 text-start" >
            <div data-aos="zoom-out-right">
                <span className="text">Hello!I am,</span>
                <h1 className="text-light bold"> <span className="">SARMIN AKTER DIPTY</span></h1>
                <Typed
                    className=" type--text" className="text"
                    strings={[
                        'Web Developer',
                        'Junior Web Developer',
                        'Front-end Developer']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                >

                </Typed>
                <br />
                <br />
                <a className='text-light' href='
             https://drive.google.com/file/d/1fltzdBWJMW0yZkU1to4WEhAn4e3QOsHq/view?usp=sharing' target='_blank'><button className="btn-1"><FontAwesomeIcon icon={faDownload} />Get Resume </button></a>
                <NavLink to="/contact" className="btn-2">Contact Me</NavLink>

            </div>
            <div>
                <img src={bannerImg} className=" border border-dark rounded-circle banner-img" alt="" data-aos="zoom-out-left" />
            </div>

        </div>
    );
};

export default Banner;