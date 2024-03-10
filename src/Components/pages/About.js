import Footer from "../Common/Footer";
import Header from "../Common/Header";

var images = [
  {
    img: "images/about-1-300x460.jpg",
  },
  {
    img: "images/about-2-300x460.jpg",
  },
  {
    img: "images/about-3-300x460.jpg",
  },
];

var faq = [
  {
    question: "Do I have to have an appointment?",
    answer:
      "No. Sign in on the list at the front desk and if there is a wait, you can take advantage of our free Wi-Fi to surf the web or catch up on your email. As soon as your name gets to the top of the list, we’ll get you on your way to that great haircut you’ve been looking forward to.",
  },
  {
    question:
      "What if I need a little more off the top (or bottom or otherwise)?",
    answer:
      "Please feel free to call our administrator and let either the stylist that did the initial service or the store manager know that you would like to come back in and they will make the necessary adjustment within 7 days.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "Yes, we accept walk-ins! We have at least one barber dedicated to serving walk-ins nearly every day! We keep track of who’s waiting for walk-in service with our online sign-in list. You can get on the list online or you can sign up at our computer.",
  },
];

export default function About() {
  return (
    <>
      <Header />
      <div className="page-title">
        <div className="page-title-content">
          <div className="shell">
            <p className="page-title-header">About</p>
          </div>
        </div>
      </div>
      <section className="section-xl bg-white text-center text-md-left">
        <div className="shell-fluid shell-condensed">
          <div className="range range-md-reverse range-xs-middle range-md-right range-50">
            <div className="cell-md-5 cell-lg-3 cell-lg-preffix-1">
              <div className="inset-horizontal-15">
                <h2>WHO WE ARE</h2>
                <div className="p text-width-smallest">
                  <p className="big">
                    Barbershop is a team of highly qualified barbers dedicated
                    to offering the best value. We do this by providing high
                    quality salon services for men and boys, in a warm, friendly
                    atmosphere.
                  </p>
                </div>
              </div>
            </div>
            <div className="cell-md-7 cell-lg-6">
              <div className="row row-gutter-custom range-15">
                {images.map((image) => (
                  <Image key={image.img} img={image.img} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </>
  );
}

function Image({ img }) {
  return (
    <div className="col-xs-4">
      <figure className="figure-fullwidth">
        <img src={img} alt="" width="300" height="460" />
      </figure>
    </div>
  );
}

function FAQ() {
  return (
    <section className="section-xl bg-periglacial-blue text-center">
      <div className="shell">
        <div className="range range-sm-center range-75">
          <div className="cell-xs-12">
            <h2>FAQ</h2>
            <div className="p text-width-medium">
              <p className="big">
                If you have any questions regarding the services our barbershop
                offers, feel free to browse this section of frequently asked
                questions.
              </p>
            </div>
          </div>
          <div className="cell-lg-10">
            <article className="box-spacer">
              <dl className="terms-list-bordered">
                {faq.map((query) => (
                  <Questions
                    key={query.question}
                    question={query.question}
                    answer={query.answer}
                  />
                ))}
              </dl>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function Questions({ question, answer }) {
  return (
    <>
      <dt>{question}</dt>
      <dd>{answer}</dd>
    </>
  );
}
