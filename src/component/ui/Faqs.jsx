import React from 'react'

const Faqs = () => {
    const data = [
        {
            title: "How can I check online report?",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore repellendus dolor labore eius ipsam commodi veniam fugiat corporis consequatur quod."
        },
        {
            title: "How to Get Online Appointment in Fatimiyah Hospital?",
            desc: "Call at 021-32226631 and 021-32226652 to get Online Appointment in Fatimiyah Hospital"
        },
        {
            title: "What are the Services offered by Fatimiyah Hospital?",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore repellendus dolor labore eius ipsam commodi veniam fugiat corporis consequatur quod."
        },
        {
            title: "How to Get Online Appointment in Fatimiyah Hospital?",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore repellendus dolor labore eius ipsam commodi veniam fugiat corporis consequatur quod."
        },

    ]
    return (
        <section className='section'>
            <div className="container">
                <div className="row justify-content-lg-between justify-content-center">
                    <div className="col-lg-4 col-sm-8">
                        <img src="/assets/faq.png" alt="" className='w-100 h-auto' />
                    </div>
                    <div className="col-lg-7 mt-lg-0 mt-3">
                        <p className='secondary-para'>
                            Areas we deal with <img src="/assets/custom-icons/title.svg" alt="" />
                        </p>
                        <h2 className='heading'>
                            Frequently Asked Questions
                        </h2>
                        <div class="accordion accordion-flush mt-4" id="accordionFlushExample">
                            {data?.map((item, i) => (

                                <div class="accordion-item border-black" key={i}>
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed ps-0" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-${i}`} aria-expanded="false" aria-controls={`#flush-${i}`}>
                                           {item.title}
                                        </button>
                                    </h2>
                                    <div id={`flush-${i}`} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body ps-0">{item?.desc}</div>
                                    </div>
                                </div>
                            ))}
                         
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs