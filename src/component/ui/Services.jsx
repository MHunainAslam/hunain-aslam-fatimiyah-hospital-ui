import React from 'react'

const Services = () => {
    const data = [
        {
            icon: "/assets/service-icons/X-ray.svg",
            title: "24/7 X-Ray",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            icon: "/assets/service-icons/Laboratory.svg",
            title: "24/7 Laboratory",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            icon: "/assets/service-icons/Pharmacy.svg",
            title: "24/7 Pharmacy",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
    ]
    return (
        <section className='section'>
            <div className="container">
                <div className="row mt-5 align-items-center">
                    <div className="col-lg-5">
                        <p className='secondary-para'>
                            Services <img src="/assets/custom-icons/title.svg" alt="" />
                        </p>
                        <h2 className="heading mb-5">
                            We Serve 24/7
                        </h2>
                        {data?.map((item, i) => (
                            <div className="d-flex align-items-start " key={i}>
                                <img src={item.icon} alt="" />
                                <div className='ms-3'>
                                    <h4 className='para-lg '>{item?.title}</h4>
                                    <p className='para'>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-7 d-flex justify-content-center position-relative h-fit-content">
                        <div className="service-img">
                            <img src="/assets/service1.png" alt="" className='w-100 h-auto' />
                        </div>
                        <img src="/assets/service2.png" alt="" className='service-bottom-img' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services