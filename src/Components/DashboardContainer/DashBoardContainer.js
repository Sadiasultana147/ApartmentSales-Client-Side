import React from 'react';
import './DashBoardContainer.css'

const DashBoardContainer = () => {
    return (
        <div>


            <div  >
                <div style={{
                    backgroundImage: "url('https://navana-realestate.com/assets/frontend/img/category-banner.jpg')",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",

                    position: "relative",
                    height: "650px",
                    color: "white"

                }}>

                    <h1 className="text" style={{

                        paddingTop: "100px",


                    }} data-aos="fade-right" data-aos-easing="ease" data-aos-delay="800">WELCOME TO YOUR DASHBOARD</h1>
                    <h2 className="text1" data-aos="fade-left " data-aos-easing="ease" data-aos-delay="1500" >Your AccessAbility is here Available</h2>
                </div>
            </div>
        </div>
    );
};

export default DashBoardContainer;