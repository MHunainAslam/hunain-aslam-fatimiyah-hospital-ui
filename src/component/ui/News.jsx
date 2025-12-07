import React from 'react'
import NewsCard from '../news/NewsCard'

const News = () => {
    const data = [
        {
            title: "lorem Ipsum",
            short_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quisquam a modi ipsam omnis sunt aspernatur fugiat quis dolorum ipsum hic labore distinctio facere, molestiae deleniti sapiente iusto, eaque soluta?",
            read_time: "2 min read",
            media: "/assets/news/news1.png"
        },
        {
            title: "lorem Ipsum",
            short_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quisquam a modi ipsam omnis sunt",
            read_time: "2 min read",
            media: "/assets/news/news2.png"
        },
        {
            title: "lorem Ipsum",
            short_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quisquam a modi ipsam omnis sunt aspernatur fugiat quis dolorum ipsum hic labore distinctio facere",
            read_time: "2 min read",
            media: "/assets/news/news3.png"
        },
        {
            title: "lorem Ipsum",
            short_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            read_time: "2 min read",
            media: "/assets/news/news4.png"
        },
    ]
    return (
        <section className='section'>
            <div className="container">
                <div className="news-room py-lg-5 py-3 px-4">
                    <p className='secondary-para'>
                        Updates <img src="/assets/custom-icons/title.svg" alt="" />
                    </p>
                    <h2 className="heading">
                        Our News Room
                    </h2>
                    <div className="row mt-4">
                        <div className="col-lg-5">
                            <NewsCard
                                data={data[0]}
                            />
                        </div>
                        <div className="col-lg-7">
                            {data?.slice(1).map((item, i) => (
                                <NewsCard
                                    data={item}
                                    type='horizontal'
                                    keys={i}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News