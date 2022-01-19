import React from 'react';
import Footer from '../Footer/Footer';
import './Login.css'

const Login = () => {
    return (
        <div className="back-ground pt-5">
            <div className="p-5 m-5 border border-1">
                <input type="text" placeholder="Email" className="w-50 mt-5" /> <br /> <br />
                <input type="password" placeholder="Password" className="w-50 mb-5" /> <br /> <br />
                <button className="btn-3 border-0">Login</button>
                <br />
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Login;