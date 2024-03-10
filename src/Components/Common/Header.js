import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css"

export default function Header(){
   // adding the states 
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  } 

  return (
    <header className="App-header">
      <nav className={`${styles.navbar} page-header-perspective-transparent`}>
        <Link className="brand" to="/">
          <div className="brand-logo-default">
            <img
              src="images/logo-default-dark-200x36.png"
              alt=""
              width="200"
              height="36"
            />
          </div>
        </Link>
        <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
          <li onClick={removeActive}>
            <Link to="/about.html" className={`${styles.navLink}`}>
              About
            </Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/services.html" className={`${styles.navLink}`}>
              Services
            </Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/gallery.html" className={`${styles.navLink}`}>
              Gallery
            </Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/contact.html" className={`${styles.navLink}`}>
              Contact
            </Link>
          </li>
          <li onClick={removeActive}>
            <div className="booking-control">
              <Link
                className="btn btn-xs btn-circle btn-primary"
                to="/step-1.html"
              >
                BOOK NOW
              </Link>
            </div>
          </li>
        </ul>
        <div
          className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
          onClick={toggleActiveClass}
        >
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
        </div>
      </nav>
    </header>
  );
}