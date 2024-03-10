import Footer from "../Common/Footer";
import Header from "../Common/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <div id="wrapper">
        {/* <section className="box-wrap box-wrap-md"> */}
        <section
          className="box-wrap box-wrap-md jumbotron-custom jumbotron-custom-1 bg-image text-center"
          style={{ backgroundImage: "url(images/bg-image-4.jpg)" }}
        >
          <div className="box-wrap-content">
            <div className="shell">
              <div className="range">
                <div className="cell-xs-12">
                  <div className="box-contacts box-contacts-vertical box-wrap-content-interactive">
                    <div className="box-contacts-col">
                      <div className="box-contacts-block">
                        <h3>Address</h3>
                        <address>
                          123 Street W, Seattle WA 99999 United States
                        </address>
                      </div>
                      <div className="box-contacts-block">
                        <h3>Opening Hours</h3>
                        <div className="box-contacts-block-inner">
                          <dl className="box-contacts-terms-list">
                            <dt>Monday – Friday</dt>
                            <dd>9am - 6pm</dd>
                          </dl>
                          <dl className="box-contacts-terms-list">
                            <dt>Saturday</dt>
                            <dd>10am - 4pm</dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div className="box-contacts-col box-contacts-right">
                      <div className="box-contacts-block">
                        <h3>Get In Touch</h3>
                        <p style={{ maxWidth: "350px;" }}>
                          If you have a question, leave your name and phone
                          number, and we’ll contact you shortly.
                        </p>
                        <form className="rd-mailform">
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
                            <label
                              className="form-label-outside"
                              for="contact-phone"
                            >
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
                          <button className="btn btn-sm btn-primary btn-block btn-circle">
                            SEND REQUEST
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
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
