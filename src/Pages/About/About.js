import React from 'react';
import { Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Typed from 'react-typed';
import Header from '../Header/Header';
import HomeAbout from './HomeAbout';


const About = () => {
    return (
        <div className="row d-flex justify-content-center back-ground">
            <Header></Header>

            <div >
                <h1 className="text-light">Who <span className="main-info-1">Am I?</span></h1>

                <Typed
                    className=" type--text" className="main-info"
                    strings={[
                        'Web Developer',
                        'Junior Web Developer',
                        'Front-end Developer']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                >

                </Typed>
                <HomeAbout></HomeAbout>
                <br />
                <br />
                <p className="text-light mx-5 mb-5">I'm a positive and innovative Web developer.I'm graduated in Mathemetics.I have done many projects with Bootstrap,tailwindcss,React js,MongoDB,Node js and Express js and I also know Graphics design.I have Experience working both alone and also with team members.
                    I'm also learning Back-End Development and looking forward to be a Full Stack Web Developer.
                    I always ensure my skills are up to date.Thank you.</p>
            </div>
            <div className="col-md-3">
                <Card className='bg-dark border-dark'>
                    <Card.Body className="back-ground">
                        <Card.Title className="text-light">Address</Card.Title>
                        <Card.Text className="text-light">
                            Rangpur,Bangladesh
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-3">
                <Card className='bg-dark border-dark'>
                    <Card.Body className="back-ground">
                        <Card.Title className="text-light">Email</Card.Title>
                        <a className="text-light"> <small>sarminakterdipty1@gmail.com</small></a>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-3">
                <Card className='bg-dark border-dark'>
                    <Card.Body className="back-ground">
                        <Card.Title className="text-light">Phone Number</Card.Title>
                        <Card.Text className="text-light">
                            +8801773033037
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default About;