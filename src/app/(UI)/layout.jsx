import React from 'react';
import Navbar from '../Component/Navbar';

const UiLayout = ( {children}) => {
    return (
        <div>
            <Navbar/>
             <div className='mt-20'>
                {children}
             </div>
        </div>
    );
};

export default UiLayout;