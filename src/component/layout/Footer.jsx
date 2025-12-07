import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="col-md-11">
                            <div className="row justify-content-between">
                                <div className="col-lg-3">
                                    <img src="/assets/image 1 2.png" className='footer-logo' alt="" />
                                    <p className='para my-4'>Serving 24/7 Emergency Service and other Health Care Facilities.</p>
                                    <img src="/assets/footericons/InstagramLogo.svg" alt="" className='me-2' />
                                    <img src="/assets/footericons/LinkedinLogo.svg" alt="" className='me-2' />
                                    <img src="/assets/footericons/FacebookLogo.svg" alt="" className='me-2' />
                                    <img src="/assets/footericons/YoutubeLogo.svg" alt="" className='me-2' />
                                </div>
                                <div className="col-lg-9 col-xxl-8 mt-lg-0 mt-4">
                                    <div className="row justify-content-end quick-links">
                                        <div className="col-lg-3 col-sm-6">
                                            <p>
                                                Quick Links
                                            </p>
                                            <ul>
                                                <li>Home</li>
                                                <li>Consultant Schedule</li>
                                                <li>Online Lab Reports</li>
                                                <li>Contact Us</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <p>
                                                Areas we work in
                                            </p>
                                            <ul>
                                                <li>Dermatologist</li>
                                                <li>ENT Specialist</li>
                                                <li>Gynecologist</li>
                                                <li>Urologist</li>
                                                <li>Neurologist</li>
                                                <li>Child Specialist</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <p>
                                                Address
                                            </p>
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.5357290066113!2d67.03158767482714!3d24.878026344555476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e4340000001%3A0xe1b798a8bc2cf067!2sFatimiyah%20Hospital!5e1!3m2!1sen!2s!4v1765135065037!5m2!1sen!2s"
                                                height="155"
                                                style={{ border: 0, width: "100%" }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                title="Fatimiyah Hospital Map"
                                            />

                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <ul>
                                                <li><img src="/assets/custom-icons/EnvelopeSimple.svg" className='me-2' alt="" />contact@fh.org.pk</li>
                                                <li><img src="/assets/custom-icons/Phone.svg" className='me-2' alt="" /> 021 111 012 014</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mini-footer py-2 text-center">
                <p className="para text-white mb-0">© 2023 LifeCare. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer