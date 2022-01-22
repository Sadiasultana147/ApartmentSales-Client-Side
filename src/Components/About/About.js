import React from 'react';

const About = () => {
    return (
        <div >
            <div className="body  overflow-hidden">
                <div style={{
                    backgroundImage: "url('	https://navana-realestate.com/frontend/assets/img/slider/slider_4.webp')",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",

                    position: "relative",
                    height: "650px",
                    color: "white"

                }}>


                    <h1 style={{

                        paddingTop: "300px",
                        fontSize: 85

                    }}>COMPANY PROFILE</h1>
                </div>
                <div>

                    <h6 style={{ color: 'white', textAlign: 'justify' }} className="ms-3 me-3  ">Since 1834, Dream Kingdom Group of Industries laid out the stepping stones that paved the way for the nation’s industrial age. In this journey, the group became a pioneering entity in the Textile, Electrical cable, Building Materials, and Banking sector of Bangladesh. Our presence in the production of construction-based building materials, such as Dream Kingdom Cement, Dream Kingdom Ispat, A-1 Polymer, Dream Kingdom Galvanizing, Dream Kingdom Cement Sheet, OZO, etc. led to the launch of Dream Kingdom Landmark Limited in year 2001 as the real estate development wing. Dream Kingdom Landmark Limited is a member of REHAB and we are an ISO 9001:2008 certified company. We also received Global Brand Excellence Awards in 2014 for Brand Excellence in Construction and Real Estate, International Construction Award in 2018 for Eco-friendly Projects comprising of Brilliant Architecture & Aesthetics, the Bizz Award in 2019 for Excellence in real Estate Industry, and Bangladesh Most Promising Brand Award in real estate sector in year 2019. As envisioned by the Group’s Chairman, our mission here at Dream Kingdom Landmark is to serve our valued clientele with honesty, integrity and reliability. Dream Kingdom Landmark is an embodiment of experienced architects, engineers and management personnel, who are willing to work tirelessly using a combination of their collective experiences. Dream Kingdom Group’s financial strength, resources and total commitment to quality are the prime strength to achieve a new benchmark in the real estate sector of Bangladesh. Dream Kingdom Landmark has two basic divisions – Real Estate & Infrastructure.</h6>

                    <h1>Real Estate</h1>
                    <h6 style={{ color: 'white', textAlign: 'justify' }} className="ms-3 me-3 pb-5"> Satisfaction and individual requirements of our customers are of utmost importance. As a company, DREAM KINGDOM Landmark maintains good business practice within the internal departments and teams. Our employees follow company values and maintain discipline with their hearts, which reflects extensively on our service and dedication towards our valued clients and customers. Prevalence of co-operation and unity amongst our human resources develops a strong sense of professionalism and experienced leadership in order to form a highly qualified cross-functional team.</h6>

                    <h1>Infrastructure</h1>
                    <h6 style={{ color: 'white', textAlign: 'justify' }} className="ms-3 me-3 pb-5">DREAM KINGDOMLimited works on real estates and beyond with aim to create a landmark in its class, to be treated as reference in consideration of design, construction, quality, trustworthy organization for customers, investors, stakeholders and employees to earn proper satisfaction.</h6>
                </div>
            </div>
        </div>
    );
};

export default About;