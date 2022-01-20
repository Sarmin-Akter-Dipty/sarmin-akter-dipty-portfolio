import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import notfound from '../Images/image/undraw_page_not_found_re_e9o6.svg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="back-ground">

            <div className='pt-3'>
                <Link to='/home' className="text text-1">Go Home</Link>
                <h2 className="text-light">Page Not Found</h2>
                <div className=''>
                    <img src={notfound} className='img-fluid' alt="" />
                </div>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;