import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const UiLayout = ( {children}) => {
    return (
        <div>
            <Navbar/>
             <div className='mt-20'>
                {children}
             </div>
             <Footer/>
        </div>
    );
};

export default UiLayout;