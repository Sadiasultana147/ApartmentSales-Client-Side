import React from 'react';
import { NavLink } from 'react-router-dom';


import './Footer.css'

const Footer = () => {


    return (

        <div className="overflow-hidden">
            < footer class="footer-section">
                <div class="container">
                    <div class="footer-hr pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="icon-text">
                                        <h4>Find us</h4>
                                        <span>Road-04, Rupnagar R/A, Mirpur, Dhaka</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-icon">
                                    <i class="fas fa-phone"></i>
                                    <div class="icon-text">
                                        <h4>Call us</h4>
                                        <span>01700000000</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-icon">
                                    <i class="far fa-envelope-open"></i>
                                    <div class="icon-text">
                                        <h4>Mail us</h4>
                                        <span>dreamkingdom@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        <a href="index.html"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcgFHOXxwVhpcm84XaY7J8gJs9NdJO8J-Tw&usqp=CAU" class="img-fluid" alt="logo" /></a>
                                    </div>
                                    <div class="footer-text">
                                        <p>At Dream Kingdom, the country’s most talented engineers, architects, and thought leaders are re shaping the future of real estate development. And we’re looking for people to join the team who are lateral thinkers, and will add value to our business and processes; and have excellent teamwork spirit.
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div class="footer-link">
                                    <div class="footer-link-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li> <NavLink to="/home" >Home</NavLink></li>
                                        <li> <NavLink to="/about" >About</NavLink></li>
                                        <li>  <NavLink to="/explore" > Projects</NavLink></li>

                                        <li> <NavLink to="/#" > Contact</NavLink></li>


                                        <li> <NavLink to="/#" > Expert Team</NavLink></li>

                                        <li> <NavLink to="/explore" > Latest News</NavLink></li>
                                    </ul>
                                    <br />
                                    <br />
                                    <div class="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                        <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div class="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i class="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div class="copyright-text">
                                    <p>Copyright &copy; 2021, Dream Kingdom <NavLink to="/home" > Profile</NavLink></p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div class="footer-menu">
                                    <ul>
                                        <li> <NavLink to="/home" > Projects</NavLink></li>
                                        <li> <NavLink to="/#" > Terms</NavLink></li>
                                        <li> <NavLink to="/#" > Privacy</NavLink></li>
                                        <li> <NavLink to="/#" > Policy</NavLink></li>
                                        <li> <NavLink to="/#" > Contact</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        </div>
    );
};

export default Footer;