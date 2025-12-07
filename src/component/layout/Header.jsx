import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
    const menu = [
        { label: "Home", route: "/" },
        { label: "Departments", route: "/department" },
        { label: "Services", route: "/services" },
        { label: "Doctors", route: "/doctors" },
        { label: "Blog", route: "/blogs" },
        { label: "Contact", route: "/contact" },
    ];

    return (
        <>
            <div className="container">
                <div className='py-2 text-end'>
                    <Link className='para text-black text-decoration-none me-3' to={"#"}>
                        <img src="/assets/custom-icons/Login 2.svg" alt="" className='me-2'/>
                        Login
                    </Link>
                    <Link className='para text-black text-decoration-none me-3' to={"#"}>
                        <img src="/assets/custom-icons/Login 2.svg" alt="" className='me-2' />
                        Sign up
                    </Link>
                    <Button size="sm" variant='success'>
                        Donate
                    </Button>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg pb-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="/assets/image 1 2.png" className='header-logo' alt="" />
                    </Link>
                    <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                {menu?.map((item, i) => (
                                    <li className="nav-item header-link position-relative " key={i}>
                                        <NavLink className="nav-link" to={item.route}>
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}

                            </ul>
                            <Button size='sm'>
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header