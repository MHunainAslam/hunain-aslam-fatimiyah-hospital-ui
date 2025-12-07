import React from 'react'
import { Link } from 'react-router-dom'

const Department = () => {
    const data = [
        { label: "Dermatologist", media: "/assets/department-icon/Frame 59.png" },
        { label: "ENT Specialist", media: "/assets/department-icon/Frame 60.png" },
        { label: "Gynecologist", media: "/assets/department-icon/Frame 61.png" },
        { label: "Urologist", media: "/assets/department-icon/Frame 62.png" },
        { label: "Neurologist", media: "/assets/department-icon/Frame 63.png" },
        { label: "Orthopedic Surgeon", media: "/assets/department-icon/Frame 64.png" },
        { label: "Gastroenterologist", media: "/assets/department-icon/Frame 65.png" },
        { label: "Dentist", media: "/assets/department-icon/Frame 67.png" },
        { label: "Obesity Specialist", media: "/assets/department-icon/Frame 69.png" },
        { label: "Eye Specialist", media: "/assets/department-icon/Frame 68.png" },
        { label: "Child Specialist", media: "/assets/department-icon/Frame 66.png" },
        { label: "General Physician", media: "/assets/department-icon/Frame 70.png" }
    ]
    return (
        <section className='section'>
            <div className="container">
                <div className="department py-lg-5 py-3 px-4">
                    <p className='secondary-para'>
                        Areas we deal with <img src="/assets/custom-icons/title.svg" alt="" />
                    </p>
                    <div className="d-flex justify-content-between">
                        <h2 className="heading">
                            Medical Department
                        </h2>
                        <Link className="para text-black" to="#">View All</Link>
                    </div>
                    <div className="department-cards py-4">
                        {data?.map((item, i) => (
                            <div className="department-card text-center" key={i}>
                                <img src={item.media}  alt="" />
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Department