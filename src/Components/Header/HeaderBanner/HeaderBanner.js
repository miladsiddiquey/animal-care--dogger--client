import React from 'react';
import './HeaderBanner.css'
import dog from '../../../images/dog.webp'

const HeaderBanner = () => {
    return (
        <div className="hederBanner">
            <div className="container">
                <div className="row mt-5 d-flex justify-content-around">
                <div className="col-md-6">
                    <h1  style={{fontSize:'80px',color:'white'}}>We Care <br/>Your Pets</h1>
                    <p className="text-white pt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium alias animi rem dolores sed id sequi nihil.</p>
                    <button type="button" style={{backgroundColor:'white',borderRadius:'30px'}} class="btn mt-3">Contact Us</button>
                </div>
                <div className="col-md-6">
                    <img  className="d-none dog-style  d-lg-block" src={dog} alt=""/>
                </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;