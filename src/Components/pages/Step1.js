import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Link } from "react-router-dom";

var services = [
  {
    id: 1,
    type: "TRADITIONAL HAIRCUTS",
    desc: "One of the most popular services our barbers provide",
    img: "images/icon-service-1-70x62.png",
  },
  {
    id: 2,
    type: "SHAVES",
    desc: "Our shaving services will make you look really handsome",
    img: "images/icon-service-2-70x62.png",
  },
  {
    id: 3,
    type: "BEARD TRIM",
    desc: "Well-trimmed beard is a must-have element of every men’s image",
    img: "images/icon-service-3-70x62.png",
  },
  {
    id: 4,
    type: "MUSTACHE TRIM",
    desc: "Mustaches also need to be trimmed regularly",
    img: "images/icon-service-4-70x62.png",
  },
];

export default function Step1() {
  return (
    <>
      <Header />
      <div id="wrapper">
        <section className="section-xl bg-periglacial-blue one-screen-page-content text-center">
          <div className="shell">
            <h2>CHOOSE a SERVICE</h2>
            <div className="p text-width-medium">
              <p className="big">
                On this page you can select a service that you need. Here are
                presented only the most popular barbering services we provide.
                If you require a personalized barbering service, please contact
                us.
              </p>
            </div>
            <div className="range range-50">
              {services.map((service) => (
                <ChooseService
                  key={service.id}
                  type={service.type}
                  desc={service.desc}
                  img={service.img}
                />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

function ChooseService({ type, desc, img }) {
  return (
    <div className="cell-xs-6 cell-md-3">
      <article className="card-service-option">
        <img
          className="card-service-option-image"
          src={img}
          alt={type + " image"}
          width="70"
          height="62"
        />
        <p className="card-service-option-title">{type}</p>
        <div className="card-service-option-panel">
          <p className="card-service-option-text">{desc}</p>
          <Link
            className="btn btn-xs card-service-option-control"
            to="/step-2.html"
          >
            Choose
          </Link>
        </div>
      </article>
    </div>
  );
}
