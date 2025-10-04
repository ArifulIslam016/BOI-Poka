import React from 'react';
import heroIMg from '../../assets/BannerBOOk.png'
const Banner = () => {
    return (
      <div className=" rounded-3xl hero bg-[#13131310]  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={heroIMg} className="max-w-sm rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold">
              Books to freshen up your bookshelf
            </h1>
            {/* <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p> */}
            <button className="btn btn-primary ">View The List</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;