import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

export default function Step3() {
  return (
    <>
      <Header />
      <div id="wrapper">
        <section className="section-xs bg-periglacial-blue one-screen-page-content text-center">
          <div className="shell" style={{ marginTop: "30px" }}>
            <Link className="link link-primary link-return" to="/step-2.html">
              Back
            </Link>
          </div>
          <div className="shell">
            <h2>ONE MORE STEP!</h2>
            <div className="p text-width-medium">
              <p className="big">
                To complete your appointment, please review all details
                described below. Don’t forget to provide your name and phone and
                telephone so that we could contact you.
              </p>
            </div>
            <div className="box-contacts box-contacts-vertical box-contacts-vertical-small box-wrap-content-interactive block-centered">
              <div className="box-contacts-col">
                <div className="box-contacts-block">
                  <h3>Service:</h3>
                  <p>Traditional Haircut</p>
                </div>
                <div className="box-contacts-block">
                  <h3>Barber:</h3>
                  <p>Matthew Phillips</p>
                </div>
                <div className="box-contacts-block">
                  <h3>Date:</h3>
                  <p>
                    <input type="date" required />
                  </p>
                </div>
              </div>
              <div className="box-contacts-col box-contacts-right">
                <div className="box-contacts-block">
                  <form action="finish.html">
                    <div className="form-group">
                      <label
                        className="form-label-outside"
                        for="contact-full-name"
                      >
                        Full Name
                      </label>
                      <input
                        className="form-control"
                        id="contact-full-name"
                        type="text"
                        name="name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label-outside" for="contact-phone">
                        Telephone
                      </label>
                      <input
                        className="form-control"
                        id="contact-phone"
                        type="text"
                        name="phone"
                        required
                      />
                    </div>
                    <button
                      className="btn btn-sm btn-primary btn-block btn-circle"
                      type="submit"
                    >
                      Book now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
