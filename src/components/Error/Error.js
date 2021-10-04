import React from 'react';

const Error = () => {
    return (

        <div className="container">

         {/* Error text part */}
        <div className="m-5 row">
            <div className="m-3 col-sm-12">
            <h1 className="text-danger">Error!!!!!! 404</h1>
            <h1 className="text-danger">Page Not Found</h1>
            </div>

                     {/* Error image part */}
            <div className="fluid m-3 col-sm-12 p-5 d-flex align-items-center justify-content-center">
                <img src={'https://www.prestashop.com/sites/default/files/styles/blog_750x320/public/blog/2019/10/banner_error_404.jpg?itok=eAS4swln'} alt="" />
            </div>
        </div>
        <div>
            
        </div>


        </div>

        );
};

export default Error;