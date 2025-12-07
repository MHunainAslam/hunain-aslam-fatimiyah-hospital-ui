import React from 'react'

const AboutUs = () => {
    return (
        <section className='section'>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-md-10 col-12">
                        <div className="row justify-content-between">
                            <div className="col-lg-3 col-md-4">
                                <div className='about-us-img'>
                                    <img src="/assets/about.png" className='w-100 h-100' alt="about-us" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7 mt-md-0 mt-4">
                                <p className='secondary-para'>
                                    About Us <img src="/assets/custom-icons/title.svg" alt="" />
                                </p>
                                <h2 className="heading">
                                    Fatimiyah Hospital Karachi Excellence with Quality at it's Best!
                                </h2>
                                <p className='para my-3'>
                                    Started with a modest outpatient facility in July 2006, Fatimiyah Hospital today stands as a 106-bedded multi-disciplinary, secondary health care facility, constructed on a 2000 square yards land, located in Soldier Bazar. Today, Alhamdulillah, Fatimiyah Hospital Karachi enjoys a respectable status, not only in the community, but also amongst the general public at large ensuring nominal and affordable healthcare within the reach of a common man.
                                </p>
                                <div className="row">
                                    {[0, 1, 2, 3]?.map((item, i) => (
                                        <div className="d-flex col-6 my-2" key={i}>
                                            <img src="/assets/custom-icons/Checks.svg" alt="" />
                                            <p className='para mb-0 ms-2'>lorem ipsum</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs