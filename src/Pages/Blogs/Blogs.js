import React from 'react';
import Footer from '../Footer/Footer';
import { Card } from 'react-bootstrap';
import projects1 from '../Images/istockphoto-1058109556-170667a.jpg'
import projects2 from '../Images/java.jpg'
import projects3 from '../Images/javalaptop.jpg'
import projects4 from '../Images/react.jpg'
import projects5 from '../Images/crud_operations-min-881x441.jpg'
import './Blogs.css'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';


const Blogs = () => {
    return (
        <div className="back-ground ">
            <Header></Header>

            <div className="container">

                <div className="container row d-flex justify-content-center">
                    <h3 className="main-info-1 mt-2 mb-3">My Blogs</h3>
                    <div className="col-md-4 my-2">
                        <Card className='border border-dark border-start-0'>
                            <Card.Img variant="top" className="img-size" src={projects1} />
                            <Card.Body className='back-ground'>
                                <Card.Title className="main-info-1">CSS3</Card.Title>
                                <small className='text-white'>Position Sticky With CSS Grid, Conditional Border Radius In CSS.... </small>
                                <a href='
                       https://dev.to/sarminakterdipty/position-sticky-with-css-grid-conditional-border-radius-in-css-custom-scrollbars-in-css-28ff'
                                    target='_blank' className="text text-1">See More</a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 my-2">
                        <Card className='border border-dark border-start-0'>
                            <Card.Img variant="top" className="" src={projects2} />
                            <Card.Body className='back-ground'>
                                <Card.Title className="main-info-1">JAVASCRIPT</Card.Title>
                                <small className='text-white'>Arguments and Parameters,Generator Functions.... </small>
                                <a href='
                       https://dev.to/sarminakterdipty/arguments-and-parametersgenerator-functions-2o4g'
                                    target='_blank' className="text text-1">See More</a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 my-2">
                        <Card className='border border-dark border-start-0'>
                            <Card.Img variant="top" className="" src={projects3} />
                            <Card.Body className='back-ground'>
                                <Card.Title className="main-info-1">MORE JAVASCRIPT</Card.Title>
                                <small className='text-white'>API, event loop stack and queue,DOM.... </small>
                                <a href='
                      https://dev.to/sarminakterdipty/api-event-loop-stack-and-queuedom-543e'
                                    target='_blank' className="text text-1">See More</a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 my-2">
                        <Card className='border border-dark border-start-0'>
                            <Card.Img variant="top" className="" src={projects4} />
                            <Card.Body className='back-ground'>
                                <Card.Title className="main-info-1">REACT</Card.Title>
                                <small className='text-white'>React Virtual DOM and diffing- algorithm Simplified, Context API.... </small>
                                <a href='
                   https://dev.to/sarminakterdipty/react-virtual-dom-and-diffing-algorithm-simplified-context-api-24b2'
                                    target='_blank' className="text text-1">See More</a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 my-2">
                        <Card className='border border-dark border-start-0'>
                            <Card.Img variant="top" className="img-size" src={projects5} />
                            <Card.Body className='back-ground'>
                                <Card.Title className="main-info-1">BACKEND</Card.Title>
                                <small className='text-white'>CRUD Operation,Relational database (MySql),Express.... </small>
                                <a href='
                  https://dev.to/sarminakterdipty/crud-operationrelational-database-mysqlexpress-2pfg'
                                    target='_blank' className="text text-1">See More</a>
                            </Card.Body>
                        </Card>
                    </div>




                </div>
            </div>

            {/* <Footer></Footer> */}
        </div>

    );
};

export default Blogs;