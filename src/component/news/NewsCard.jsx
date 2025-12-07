import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({ type = "vertical", data }) => {
    return (
        <>
            {type == "vertical" &&
                <div class="card news-card">
                    <img src={data?.media}  alt="..." />
                    <div class="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 class="news-card-title">{data?.title}</h5>
                            <span class="para"><small class="text-body-secondary">{data?.read_time}</small></span>
                        </div>
                        <p class="para mb-0">{data?.short_desc}</p>
                        <Link to={"#"} className='secondary-para text-decoration-none'>Read more...</Link>
                    </div>
                </div>
            }
            {type == "horizontal" &&
                <div class="card news-card news-card-horizontal mb-3">
                    <div class="row g-0">
                        <div class="col-4">
                            <img src={data?.media} alt="..." />
                        </div>
                        <div class="col-8">
                            <div class="card-body pt-0">
                                <div className="d-flex justify-content-between">
                                    <h5 class="news-card-title">{data?.title}</h5>
                                    <span class="para"><small class="text-body-secondary">{data?.read_time}</small></span>
                                </div>
                                <p class="para mb-0">{data?.short_desc}</p>
                                <Link to={"#"} className='secondary-para text-decoration-none'>Read more...</Link>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default NewsCard