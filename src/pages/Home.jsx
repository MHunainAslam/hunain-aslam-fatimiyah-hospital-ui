import React from 'react'
import Banner from '../component/ui/Banner'
import AboutUs from '../component/ui/AboutUs'
import Department from '../component/ui/Department'
import News from '../component/ui/News'
import Faqs from '../component/ui/Faqs'
import Services from '../component/ui/Services'

const Home = () => {
    return (
        <>
            <Banner />
            <AboutUs />
            <Department />
            <Services />
            <News />
            <Faqs />
        </>
    )
}

export default Home