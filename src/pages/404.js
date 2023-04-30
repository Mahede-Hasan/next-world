import React from 'react';

const PageNotFound = () => {
    return (
        <div className='text-[20px] font-bold text-red-500 flex justify-center items-center h-screen'>
           <div>
           <h1>This page is not available</h1> 
            
            <h1 className='text-center'>Error 404</h1>
           </div>
        </div>
    );
};

export default PageNotFound;