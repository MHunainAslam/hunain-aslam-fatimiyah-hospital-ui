import React from 'react'
import BannerForm from '../forms/BannerForm'

const Banner = () => {
    return (
        <section>
            <div className="container">
                <div className="position-relative">
                    <img src="/assets/banner.png" alt="banner" className='banner-img' />
                    <div className="position-absolute w-100 h-md-75 h-50 top-0 d-flex justify-content-center align-items-center">
                        <h1 className='heading-lg font-inter text-white text-center'>
                            <b>Health Solutions in <br className="d-none d-md-block" /> every Stage of Life</b>
                        </h1>
                    </div>
                    <BannerForm />
                </div>
            </div>
        </section>
    )
}

export default Banner