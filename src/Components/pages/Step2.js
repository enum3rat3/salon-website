import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Link } from "react-router-dom";

var barbers = [
  {
    id: 1,
    name: "SIMON WILSON",
    img: "images/barbers-1-370x310.jpg",
    activeDays: ["MN", "ST"],
  },
  {
    id: 2,
    name: "HARRY ANDERSON",
    img: "images/barbers-2-370x310.jpg",
    activeDays: ["TH", "SN"],
  },
  {
    id: 3,
    name: "MATTHEW PHILLIPS",
    img: "images/barbers-3-370x310.jpg",
    activeDays: ["TU", "WE", "FR"],
  },
];

export default function Step2() {
  return (
    <>
      <Header />
      <div id="wrapper">
        <section className="section-xs bg-periglacial-blue one-screen-page-content text-center">
          <div className="shell" style={{ marginTop: "30px" }}>
            <Link className="link link-primary link-return" to="/step-1.html">
              Back
            </Link>
          </div>
          <div className="shell">
            <h2>CHOOSE a BARBER</h2>
            <div className="p text-width-medium">
              <p className="big">
                Barbershop offers professional services of certified barbers
                with years of experience. On this page you can choose a
                preferred barber in a few clicks.
              </p>
            </div>
            <div className="range range-lg-center">
              <div className="cell-lg-10">
                <div className="range range-sm-center range-md-left range-30">
                  {barbers.map((barber) => (
                    <BarberDetail
                      key={barber.id}
                      img={barber.img}
                      name={barber.name}
                      activeDays={barber.activeDays}
                    />
                  ))}
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

function BarberDetail({ img, name, activeDays }) {
  return (
    <div className="cell-sm-8 cell-md-6">
      <div className="thumbnail-option">
        <div className="thumbnail-option-left">
          <img src={img} alt={name + " image"} width="170" height="180" />
        </div>
        <div className="thumbnail-option-body">
          <div className="thumbnail-option-title">{name}</div>
          <ul className="thumbnail-option-list">
            <ActiveDays day={activeDays} />
          </ul>
          <div className="thumbnail-option-panel">
            <Link
              className="btn btn-xs btn-primary btn-circle"
              to="/step-3.html"
            >
              Choose
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActiveDays({ day }) {
  return (
    <>
      <li className={day.indexOf("MN") !== -1 ? "active" : ""}>MN</li>
      <li className={day.indexOf("TU") !== -1 ? "active" : ""}>TU</li>
      <li className={day.indexOf("WE") !== -1 ? "active" : ""}>WE</li>
      <li className={day.indexOf("TH") !== -1 ? "active" : ""}>TH</li>
      <li className={day.indexOf("FR") !== -1 ? "active" : ""}>FR</li>
      <li className={day.indexOf("ST") !== -1 ? "active" : ""}>ST</li>
      <li className={day.indexOf("SN") !== -1 ? "active" : ""}>SN</li>
    </>
  );
}
