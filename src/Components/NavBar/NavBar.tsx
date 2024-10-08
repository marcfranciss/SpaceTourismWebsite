import { Link, NavLink, Outlet } from "react-router-dom";
import "./navbar.scss";
import navLogo from "../../assets/shared/logo.svg";
import burgerIcon from "../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../assets/shared/icon-close.svg";
import { useState } from "react";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const BASE_URL = "/SpaceTourismWebsite";
  return (
    <>
      <header>
        <div className='nav-logo'>
          <Link to={`${BASE_URL}/`} className='logo-container'>
            <img src={navLogo} alt='Webpage Logo: Star' />
          </Link>
          <div className='line-design'></div>
        </div>
        <nav className='nav-links'>
          {/* NEW VERSION */}
          {/* <Link to={`${BASE_URL}/`} className={"link-active"}>
            <strong>00</strong>Home
          </Link>
          <Link to={`${BASE_URL}/destination`} className={"link-active"}>
            <strong>02</strong>Destination
          </Link>
          <Link to={`${BASE_URL}/crew`} className={"link-active"}>
            <strong>03</strong>Crew
          </Link>
          <Link to={`${BASE_URL}/technology`} className={"link-active"}>
            <strong>04</strong>Technology
          </Link> */}

          {/* OLD VERSION */}
          <NavLink
            // to='/'
            to={`${BASE_URL}/`}
            className={({ isActive }) => (isActive ? "link-active" : "")}>
            <strong>00</strong>Home
          </NavLink>
          <NavLink
            // to={"/destination"}
            to={`${BASE_URL}/destination`}
            className={({ isActive }) => (isActive ? "link-active" : "")}>
            <strong>01</strong> Destination
          </NavLink>
          <NavLink
            // to={"/crew"}
            to={`${BASE_URL}/crew`}
            className={({ isActive }) => (isActive ? "link-active" : "")}>
            <strong>02</strong> Crew
          </NavLink>
          <NavLink
            // to={"/technology"}
            to={`${BASE_URL}/technology`}
            className={({ isActive }) => (isActive ? "link-active" : "")}>
            <strong>03</strong> Technology
          </NavLink>
        </nav>
        <div className='burger'>
          <img src={burgerIcon} alt='burger icon' onClick={openModal} />
        </div>

        <dialog
          id='nav-modal'
          className={isModalOpen ? "open" : "close"}
          onClick={closeModal}>
          <nav className='mobile-nav-links'>
            <div className='close-icon' onClick={closeModal}>
              <img src={closeIcon} alt='' />
            </div>
            {/* NEW VERSION */}
            {/* <Link to={`${BASE_URL}/`} className={"link-active"}>
              <strong>00</strong>Home
            </Link>
            <Link to={`${BASE_URL}/destination`} className={"link-active"}>
              <strong>02</strong>Destination
            </Link>
            <Link to={`${BASE_URL}/crew`} className={"link-active"}>
              <strong>03</strong>Crew
            </Link>
            <Link to={`${BASE_URL}/technology`} className={"link-active"}>
              <strong>04</strong>Technology
            </Link> */}

            {/* OLD VERSION */}
            <NavLink
              // to=''
              to={`${BASE_URL}/`}
              className={({ isActive }) => (isActive ? "link-active" : "")}>
              <strong>00</strong>Home
            </NavLink>
            <NavLink
              // to={"destination"}
              to={`${BASE_URL}/destination`}
              className={({ isActive }) => (isActive ? "link-active" : "")}>
              <strong>01</strong> Destination
            </NavLink>
            <NavLink
              // to={"crew"}
              to={`${BASE_URL}/crew`}
              className={({ isActive }) => (isActive ? "link-active" : "")}>
              <strong>02</strong> Crew
            </NavLink>
            <NavLink
              // to={"technology"}
              to={`${BASE_URL}/technology`}
              className={({ isActive }) => (isActive ? "link-active" : "")}>
              <strong>03</strong> Technology
            </NavLink>
          </nav>
        </dialog>
        {/* NEW ADDITION */}
        {/* <Outlet /> */}
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
