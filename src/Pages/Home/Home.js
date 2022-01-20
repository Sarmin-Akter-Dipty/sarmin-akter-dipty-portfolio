import React, { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import HomeAbout from '../About/HomeAbout';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeProjects from '../HomeProjects/HomeProjects';
// import Review from '../Reveiw/Reveiw';
// import SkillsProjects from '../SkillsProjects/SkillsProjects';
import Testimonial from '../Testimonial/Testimonial';
import Work from '../Work/Work';
import './Home.css'


const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            await new Promise((r) => setTimeout(r, 2000));
            setLoading((loading) => !loading);
        };
        loadData();
    }, []);

    if (loading) {
        return <div className='d-flex justify-content-center align-items-center'
            style={{
                "height": "100vh", backgroundColor: "#111A28"
            }
            }
        >


            <BallTriangle color="#00cf5d" height={200} width={300} margin-top="20px" />

        </div >
    }
    else {
        return (
            <div className="row back-ground container-fluid">
                <Header></Header>
                <div className="col-md-2 ">
                    <Dashboard></Dashboard>
                </div>
                <div className="col-md-10">
                    <Banner></Banner>
                    <Work></Work>
                    {/* <SkillsProjects></SkillsProjects> */}
                    <HomeAbout></HomeAbout>
                    <HomeProjects></HomeProjects>

                    <Contact></Contact>
                    <Testimonial></Testimonial>

                    {/* <Review></Review> */}
                    <Footer></Footer>



                </div>

            </div>
        );
    };
};

export default Home;