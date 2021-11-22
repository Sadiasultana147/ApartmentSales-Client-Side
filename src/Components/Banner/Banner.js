import React from 'react';


const Banner = () => {
    return (
        <div >
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div style={{
                            backgroundImage: "url('https://navana-realestate.com//upload/images/banner//2-navana-azalea.jpg')",
                            backgroundPosition: "center center",
                            backgroundAttachment: "fixed",
                            backgroundSize: "cover",

                            position: "relative",
                            height: "650px",
                            color: "white"

                        }}>
                            <h5 style={{ color: "white", paddingTop: "200px", fontSize: '60px' }}>WELCOME TO <span style={{ color: "red" }} > DREAM KINGDOM</span></h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div style={{
                            backgroundImage: "url('https://anwarlandmark.com/frontend/images/Anwar Image/6.jpg')",
                            backgroundPosition: "center center",
                            backgroundAttachment: "fixed",
                            backgroundSize: "cover",

                            position: "relative",
                            height: "650px",
                            color: "white"

                        }}>
                            <h5 style={{ color: "white", paddingTop: "200px", fontSize: '60px' }}>THE  <span className="ps-4" style={{ color: "red" }}>PERFECT PORTRYAL</span></h5>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <div style={{
                            backgroundImage: "url('https://anwarlandmark.com/frontend/images/Anwar Image/5.jpg')",
                            backgroundPosition: "center center",
                            backgroundAttachment: "fixed",
                            backgroundSize: "cover",

                            position: "relative",
                            height: "650px",
                            color: "white"

                        }}>
                            <h5 style={{ color: "white", paddingTop: "200px", fontSize: '60px' }}>INVEST IN THE <span className="ps-4" style={{ color: "red" }}>VERY BEST WITH</span>
                                <span className="ps-4" style={{ color: "white" }}>DREAM KINGDOM</span>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;

{/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
    <div class="carousel-item active">
        <img src="https://navana-realestate.com//upload/images/banner//2-navana-azalea.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h5 style={{ color: "white", marginBottom: "50%", fontSize: '60px' }}>WELCOME TO <span style={{ color: "red" }} > DREAM KINGDOM</span></h5>

        </div>
    </div>
    <div class="carousel-item">
        <img src='https://anwarlandmark.com/frontend/images/Anwar Image/6.jpg' class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h5 style={{ color: "white", marginBottom: "20%", fontSize: '60px' }}>THE  <span className="ps-4" style={{ color: "red" }}>PERFECT PORTRYAL</span>

                <span className="ps-4" style={{ color: "white" }}>ARCHITECHTURAL SUPREMACY </span>
            </h5>

        </div>

    </div>
    <div class="carousel-item">
        <img src="https://anwarlandmark.com/frontend/images/Anwar Image/5.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h5 style={{ color: "white", marginBottom: "20%", fontSize: '50px' }}>INVEST IN THE <span className="ps-4" style={{ color: "red" }}>VERY BEST WITH</span>
                <span className="ps-4" style={{ color: "white" }}>DREAM KINGDOM</span>
            </h5>

        </div>
    </div>
</div>
</div> */}

