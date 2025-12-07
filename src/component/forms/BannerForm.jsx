import React from 'react'
import Button from '../ui/Button'

const BannerForm = () => {
    return (
        <>
            <div className="d-flex justify-content-center m-banner-form">
                <div className="col-10 col-lg-9">
                    <div className='banner-form shadow-sm row align-items-end px-xl-5 px-lg-3'>
                        <div className="col-md-9 py-lg-5 py-4">
                            <h2 className='heading text-white'>
                                Find & Book the <br />
                                <span>Best Doctors</span>
                            </h2>
                            <form action="">
                                <div class="row px-2 py-4 align-items-end justify-content-end">
                                    <div class="col-md">
                                        <label className='para text-white'>Select Location</label>
                                        <select id="inputState" class="form-select primary-select">
                                            <option selected>Karchi</option>
                                        </select>
                                    </div>
                                    <div class="col-md">
                                        <label className='para text-white'>Select Type</label>
                                        <select id="inputState" class="form-select primary-select">
                                            <option selected>Cardiology</option>
                                        </select>
                                    </div>
                                    <Button size='sm' variant='white' className='px-4 mt-md-0 mt-3' type="button">
                                        Find Doctor
                                    </Button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3 text-md-end text-center">
                            <img src="/assets/dr.png" alt="" className='dr-img' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerForm