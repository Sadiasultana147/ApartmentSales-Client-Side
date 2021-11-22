import React from 'react';

const SpecialCare = () => {
    return (
        <div className="overflow-hidden" >
            <h1 className="mt-5" style={{ color: "white", backgroundColor: "#2B547E" }}>OUR SPECIAL CARES FOR YOU</h1>
            <div >
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-5 d-flex justify-content-center mb-5 pb-5 ">
                    <div className="col ">
                        <div className="cardbox card h-100"  >
                            <div className="card-body" >
                                <h5>
                                    <img src="https://www.anwarlandmark.com/frontend/images/logo_2/homeloan.png" alt="..." style={{ height: "40px" }} />
                                    <span style={{ color: "white", height: "40px" }}>Home Loan</span>
                                </h5>
                            </div>
                            <div>
                                <img src="https://www.anwarlandmark.com/frontend/images/homeloanmain-1.png" class="" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="cardbox card h-100">
                            <div className="card-body">
                                <h5 >
                                    <img src="https://www.anwarlandmark.com/frontend/images/logo_2/apartment.png" alt="..." style={{ height: "40px" }} />
                                    <span style={{ color: "white" }}>Apartment/.com Space Query Form</span>
                                </h5>
                            </div>
                            <div>
                                <img src="https://www.anwarlandmark.com/frontend/images/apartment.png" alt="..." />
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="cardbox card h-100">
                            <div className="card-body">
                                <h5 >
                                    <img src="https://www.anwarlandmark.com/frontend/images/logo_2/jointventure.png" alt="..." style={{ height: "40px" }} />
                                    <span style={{ color: "white" }}>Joint Venture Land Development Forn</span>
                                </h5>
                            </div>
                            <div>
                                <img src="https://www.anwarlandmark.com/frontend/images/appertmentform.png" alt="..." />
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div >
    );
};

export default SpecialCare;



