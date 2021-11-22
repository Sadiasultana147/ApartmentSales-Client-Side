import React from 'react';
import Apartments from '../../Components/Apartments/Apartments';
import Reviews from '../../Components/Reviews/Reviews'
import Banner from '../Banner/Banner';

import Partner from '../Partner/Partner';
import SpecialCare from '../SpecialCares/SpecialCare';


const Home = () => {

    return (
        <div className="body overflow-hidden">
            <section>
                <Banner></Banner>
            </section>
            <section>
                <Apartments></Apartments>
            </section>
            <section>
                <Reviews></Reviews>
            </section>
            <section>
                <SpecialCare></SpecialCare>
            </section>
            <section>
                <Partner></Partner>
            </section>




        </div>
    );
};

export default Home;