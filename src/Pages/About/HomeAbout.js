import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import about from '../Images/undraw_speech_to_text_re_rw02.svg'
import './About.css'

const HomeAbout = () => {
    return (
        <div className="container">
            <div className='row container d-lg-flex justify-content-center align-items-center'>
                <div className="margin-1 mt-5" data-aos="zoom-in-up">

                    <NavLink to="/skills" className="btn-2 mx-2">My Skills</NavLink>
                    <NavLink to="/projects" className="btn-2">Projects</NavLink>

                </div>

                <div className="col-md-6 " data-aos="fade-down-right">
                    <img className='about-img' src={about} alt="" />
                </div>
                <div className="col-md-6 about-size" data-aos="zoom-in">
                    <p>Hi, I am a web developer. I am a student by profession but I am more inclined towards programming. I started learning web development from last 1st July. Before that it was just a matter of design. The pinnacle of development comes from the programming hero. I am still working on web development. Once the development is learned, the episode leans towards advanced design. My desire is to be a full stack web developer.

                    </p>
                    <a className='text-light' href='
             https://drive.google.com/file/d/1fltzdBWJMW0yZkU1to4WEhAn4e3QOsHq/view?usp=sharing' target='_blank'><button className="btn-1">See Resume </button></a>
                    <NavLink to="/contact" className="btn-2">Hire Me</NavLink>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;