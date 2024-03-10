import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="page-footer page-footer-default">
        <div className="shell">
          <div className="range range-xs-center">
            <div className="cell-lg-10">
              <Link className="brand" to="/">
                <img
                  src="images/logo-default-dark-200x36.png"
                  alt=""
                  width="200"
                  height="36"
                />
              </Link>
              <div className="text-highlighted-wrap">
                <p className="text-highlighted">
                  Barbershop is a No.1 place to have a men’s haircut in San
                  Francisco. Here you can get luxury barber experience at a
                  reasonable price.
                </p>
              </div>
              <ul className="footer-navigation footer-navigation-horizontal" >
                <li>
                  <Link to="/" >Home </Link>
                </li>
                <li>
                  <Link to="/about.html">About </Link>
                </li>
                <li>
                  <Link to="/services.html">Services </Link>
                </li>
                <li>
                  <Link to="/gallery.html">Gallery </Link>
                </li>
                <li>
                  <Link to="/step-1.html">Book </Link>
                </li>
                <li>
                  <Link to="/contact.html">Contact </Link>
                </li>
              </ul>
              <div className="divider divider-small divider-light block-centered"></div>
              <ul className="inline-list inline-list-md">
                <li>
                  <Link
                    className="icon icon-xs link-gray-light fa-facebook"
                    to="/#"
                  ></Link>
                </li>
                <li>
                  <Link
                    className="icon icon-xs link-gray-light fa-twitter"
                    to="/#"
                  ></Link>
                </li>
                <li>
                  <Link
                    className="icon icon-xs link-gray-light fa-youtube"
                    to="/#"
                  ></Link>
                </li>
                <li>
                  <Link
                    className="icon icon-xs link-gray-light fa-linkedin"
                    to="/#"
                  ></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
