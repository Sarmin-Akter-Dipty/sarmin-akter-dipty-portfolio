import React from 'react';
import development from '../Images/download.png'
import ResponsiveDesign from '../Images/download (1).png'
import ProblemSolving from '../Images/download (2).png'
import Authentication from '../Images/download (3).png'
import './Work.css'
import { Card } from 'react-bootstrap';

const Work = () => {
    return (
        <div className=" back-ground p-5">
            <div className="row d-lg-flex justify-content-center ">
                <div className="col-md-4 cart-1" data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <Card className='border-0'>
                        <Card.Body className='back-ground'>
                            <Card.Img variant="top" className="work-image" src={development} />
                            <Card.Title className="main-info-1 font-size">Development</Card.Title>

                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 cart-1" data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <Card className='border-0'>
                        <Card.Body className='back-ground'>
                            <Card.Img variant="top" className="work-image" src={ResponsiveDesign} />
                            <Card.Title className="main-info-1 font-size">Responsive Design</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 cart-1" data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <Card className='border-0'>
                        <Card.Body className='back-ground'>
                            <Card.Img variant="top" className="work-image" src={Authentication} />
                            <Card.Title className="main-info-1 font-size">Authentication</Card.Title>
                        </Card.Body>
                    </Card>
                </div>


            </div>


        </div>

    );
};

export default Work;