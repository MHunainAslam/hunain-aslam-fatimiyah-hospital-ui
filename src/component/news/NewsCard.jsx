import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({ type = "vertical", data, keys }) => {
    return (
        <>
            {type == "vertical" &&
                <div className="card news-card" key={`${type}-${keys}`}>
                    <img src={data?.media} alt="..." />
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="news-card-title">{data?.title}</h5>
                            <span className="para"><small className="text-body-secondary">{data?.read_time}</small></span>
                        </div>
                        <p className="para mb-0">{data?.short_desc}</p>
                        <Link to={"#"} className='secondary-para text-decoration-none'>Read more...</Link>
                    </div>
                </div>
            }
            {type == "horizontal" &&
                <div className="card news-card news-card-horizontal mb-3" key={`${type}-${keys}`}>
                    <div className="row g-0">
                        <div className="col-4">
                            <img src={data?.media} alt="..." />
                        </div>
                        <div className="col-8">
                            <div className="card-body pt-0">
                                <div className="d-flex justify-content-between">
                                    <h5 className="news-card-title">{data?.title}</h5>
                                    <span className="para"><small className="text-body-secondary">{data?.read_time}</small></span>
                                </div>
                                <p className="para mb-0">{data?.short_desc}</p>
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