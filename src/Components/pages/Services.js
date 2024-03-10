import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Link } from "react-router-dom";

var services = [
  {
    id: 1,
    type: "TRADITIONAL HAIRCUTS",
    desc: "One of the most popular services our barbers provide",
    img: "images/services-1-500x490.png",
    classtype: "box-service box-service-dark box-service-reverse",
    price: 39,
  },
  {
    id: 2,
    type: "SHAVES",
    desc: "Our shaving services will make you look really handsome",
    img: "images/services-2-500x490.png",
    classtype: "box-service",
    price: 29,
  },
  {
    id: 3,
    type: "BEARD TRIM",
    desc: "Well-trimmed beard is a must-have element of every men’s image",
    img: "images/services-3-500x490.png",
    classtype: "box-service box-service-dark box-service-reverse",
    price: 32,
  },
  {
    id: 4,
    type: "MUSTACHE TRIM",
    desc: "Mustaches also need to be trimmed regularly",
    img: "images/services-4-500x490.png",
    classtype: "box-service",
    price: 35,
  },
];

export default function DetailedService() {
  return (
    <>
      <Header />
      <div className="page-title">
        <div className="page-title-content">
          <div className="shell">
            <p className="page-title-header">Services</p>
          </div>
        </div>
      </div>
      <section className="section-xl bg-periglacial-blue text-center">
        <div className="shell">
          <h2>Our Services</h2>
          <div className="p text-width-medium">
            <p className="big">
              Barbershop offers world-class men's haircuts, beard grooming, and
              hot razor shaves. Here are just some of the services we are known
              for.
            </p>
          </div>
          {services.map((service) => (
            <DisplayServices
              key={service.id}
              type={service.type}
              desc={service.desc}
              price={service.price}
              img={service.img}
              classtype={service.classtype}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

function DisplayServices({ type, desc, price, img, classtype }) {
  return (
    <article className={classtype}>
      <div className="box-service-left">
        <img
          className="box-service-image"
          src={img}
          alt={type + " image"}
          width="500"
          height="490"
        />
      </div>
      <div className="box-service-body">
        <div className="box-service-header">
          <p className="box-service-title">{type}</p>
          <p className="box-service-price">
            <small>$</small>
            {price}.<small>00</small>
          </p>
        </div>
        <div className="box-service-text">
          <p>{desc}</p>
        </div>
        <Link className="btn btn-sm box-service-control" to="/step-1.html">
          Book Now
        </Link>
      </div>
    </article>
  );
}
