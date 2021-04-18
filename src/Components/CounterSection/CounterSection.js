import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const CounterSection = () => {
    return (
        <section className="mt5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 mt-5 pt-5">
                        <h1>We need your<br /> help Adopt Us</h1>
                        <p className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero explicabo voluptatem facere impedit, et laudantium reprehenderit minus illum iusto ipsum! Cum magnam aut ducimus vel laboriosam doloremque ratione deserunt recusandae.</p>

                        <div style={{fontSize:'30px',fontWeight:'bold'}} className="d-flex mt-4">
                            <div  className="mr-5">
                                <img style={{height:'70px'}} src="https://i.ibb.co/MDn4Ykz/1p.webp" alt=""/><br/>
                                <CountUp delay={6} end={470} />
                                </div>
                            <div className="mr-5">
                                <img style={{height:'70px'}} src="https://i.ibb.co/gwK0qmV/3p.webp" alt=""/><br/>
                                <CountUp delay={5} end={135 } />
                                </div>
                            <div className="mr-5">
                                <img style={{height:'70px'}} src="https://i.ibb.co/GJNLYYb/2p.webp" alt=""/><br/>
                                <CountUp delay={7} end={115} />
                                </div>
                            
                        </div>

                        <Link style={{ textDecoration: 'none' }} className="button-Style mt-4" to='/contact'>Contact Us</Link>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img className='img-fluid' src="https://i.ibb.co/5hsK7nb/adopt-img.png" alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CounterSection;