import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Figure, ProgressBar, } from 'react-bootstrap';
import myimage from '../Images/my Pic.png';
import './Dashboard.css';
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import dashboard from '../Images/contact/BCHO.gif'


const Dashboard = () => {
    const now = 96;
    const now2 = 90;
    const now3 = 97;
    const now4 = 90;
    const now5 = 75;
    return (
        <div className="background sticky-top height d-lg-block d-none">
            <div className='size'>
                <Figure >
                    <Figure.Image
                        width={131}
                        height={150}
                        alt="171x180"
                        className="bg-light "
                        src={myimage} roundedCircle
                    />
                    <Figure.Caption>
                        Junior Web Developer|| Front-end Developer
                    </Figure.Caption>
                    <span className='text-light d-flex justify-content-center'>
                        <span style={{ fontSize: '13px' }} >Residence : </span>
                        <span style={{ fontSize: '13px' }} className='text-secondary'>...Bangladesh</span>
                    </span>
                    <span className='text-light d-flex justify-content-center'>
                        <span style={{ fontSize: '13px' }} >City :</span>
                        <span style={{ fontSize: '13px' }} className='text-secondary'>...Rangpur</span>
                    </span>
                    <span className='text-light d-flex justify-content-center'>
                        <span style={{ fontSize: '13px' }} >Age :</span>
                        <span style={{ fontSize: '13px' }} className='text-secondary'>...27</span>
                    </span>
                    <u className='text-secondary'>----------------------------------</u>
                </Figure>


                <span className='text-light d-flex justify-content-between'>
                    <span style={{ fontSize: '13px' }} >HTML</span>
                    <span style={{ fontSize: '13px' }}>{`${now}%`}</span>
                </span>
                <ProgressBar animated variant="secondary" style={{ height: '.30rem' }} now={96} />
                <span className='text-light d-flex justify-content-between'>
                    <span style={{ fontSize: '13px' }} >CSS </span>
                    <span style={{ fontSize: '13px' }}>{`${now2}%`}</span>
                </span>
                <ProgressBar style={{ height: '.30rem' }} animated variant="secondary" now={90} />
                <span className='text-light d-flex justify-content-between'>
                    <span style={{ fontSize: '13px' }} >BOOTSTRAP</span>
                    <span style={{ fontSize: '13px' }}>{`${now3}%`}</span>
                </span>
                <ProgressBar style={{ height: '.30rem' }} animated variant="secondary" now={97} />
                <span className='text-light d-flex justify-content-between'>
                    <span style={{ fontSize: '13px' }} >TAILWIND CSS </span>
                    <span style={{ fontSize: '13px' }}>{`${now4}%`}</span>
                </span>
                <ProgressBar style={{ height: '.30rem' }} animated variant="secondary" now={90} />
                <span className='text-light d-flex justify-content-between'>
                    <span style={{ fontSize: '13px' }} >JAVASCRIPT</span>
                    <span style={{ fontSize: '13px' }}>{`${now5}%`}</span>
                </span>
                <ProgressBar style={{ height: '.30rem' }} animated variant="secondary" now={75} />
                <br />

            </div>
            <a className='' href='
             https://drive.google.com/file/d/1fltzdBWJMW0yZkU1to4WEhAn4e3QOsHq/view?usp=sharing' target='_blank'><button className="btn-2">Download Resume <FontAwesomeIcon icon={faDownload} /></button></a>

            <div>
                <img src={dashboard} className='dashboard-img' alt="" />
            </div>

        </div >
    );
};

export default Dashboard;
// #FFC107;
