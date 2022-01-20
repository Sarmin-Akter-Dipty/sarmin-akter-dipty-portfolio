import React, { useRef } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import contact from '../Images/contact/undraw_contract_re_ves9.svg'
import './Contact.css'
import swal from 'sweetalert';
import emailjs from 'emailjs-com';

const Contact = () => {

    const { register } = useForm();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xa766if', 'template_fdbbb3z', e.target, 'user_fS1y02g7w65tWmMqKM4SA')
            .then((result) => {
                swal('Message sent successfully!');
            }, (error) => {
                alert(error.message);
            });
        e.target.reset();
    };

    return (
        <div className=" back-ground">
            <h3 className="main-info-1 p-5" data-aos="zoom-in-up">Contact Me</h3>

            <div className="container ">
                <div className="row container d-lg-flex justify-content-center align-items-center mb-5">
                    <div className='col-md-6' data-aos="fade-down-right">
                        <img src={contact} className='contact-img img-fluid' alt="" />
                    </div>

                    <div className="col-md-6" data-aos="fade-down-left">
                        <div>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="">

                                    <input {...register("name")} placeholder="Name" className="back-ground contact-size w-100" required /> <br />

                                    <input  {...register("email", { required: true })} type="email" placeholder="Email" className=" back-ground  contact-size w-100 my-3" required />  <br />

                                    <textarea {...register("message", { required: true })} placeholder="Message" className=" back-ground  contact-size w-100" required />


                                    <input type="submit" className="w-100 btn-3 contact-size my-3" />


                                </div>


                            </form>

                        </div>
                    </div>

                </div>
            </div>
            <div className="row d-lg-flex justify-content-center ">

                <div className="col-md-3 cart-1 mt-4" data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <Card className='border-0'>
                        <Card.Body className='back-ground'>
                            <Card.Title className="main-info-1">Address</Card.Title>
                            <Card.Text className="main-info-1 font-size-2">
                                Rangpur,Bangladesh
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3 cart-1 mt-4" data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <Card className='border-0'>
                        <Card.Body className='back-ground'>
                            <Card.Title className="main-info-1" >Email</Card.Title>
                            <small className='email-size main-info-1 font-size-2'>sarminakterdipty1@gmail.com</small>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3 cart-1 mt-4" data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <Card className='border-0'>
                        <Card.Body className='back-ground'>
                            <Card.Title className="main-info-1">Phone Number</Card.Title>
                            <Card.Text className="main-info-1 font-size-2">
                                +8801773033037
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>


            </div>

        </div>


    );
};

export default Contact;