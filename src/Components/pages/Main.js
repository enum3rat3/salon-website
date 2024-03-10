import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <main className="page-content" id="perspective">
        <div className="content-wrapper">
          <Header />
          <div id="wrapper">
            <Home />
            <Service />
            <About />
            <Barbers />
            <MoreService />
            <Testimonials />
            <Footer />
          </div>
          <div id="perspective-content-overlay"></div>
        </div>
      </main>
      <script src="js/core.min.js"></script>
      <script src="js/script.js"></script>
    </>
  );
}

// ******************************** HOME *************************
export function Home() {
  return (
    <section
      className="jumbotron-custom jumbotron-custom-1 bg-gray-base bg-image text-center"
      style={{ backgroundImage: "url(images/bg-image-2.jpg)" }}
    >
      <div className="jumbotron-custom-content">
        <div className="shell">
          <div className="range range-sm-center">
            <div className="cell-sm-10 cell-lg-9">
              <Link className="brand-big" to="/">
                <img
                  src="images/logo-big-light-160x160.png"
                  alt=""
                  width="160"
                  height="160"
                />
              </Link>
              <p className="caption">The Best</p>
              <h1>Masters of the Blade</h1>
              <p className="large">
                At Barbershop, you will find an atmosphere of old school
                sophistication with modern amenities.We cater to gentlemen on
                the go. So stop in on your lunch break to get an old-fashioned
                straight razor shave or a perfect haircut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ******************************** SERVICES *************************
var services = [
  {
    id: 1,
    type: "TRADITIONAL HAIRCUTS",
    desc: "One of the most popular services our barbers provide",
    imgLocation: "images/icon-service-1-70x62.png",
  },
  {
    id: 2,
    type: "SHAVES",
    desc: "Our shaving services will make you look really handsome",
    imgLocation: "images/icon-service-2-70x62.png",
  },
  {
    id: 3,
    type: "BEARD TRIM",
    desc: "Well-trimmed beard is a must-have element of every men’s image",
    imgLocation: "images/icon-service-3-70x62.png",
  },
  {
    id: 4,
    type: "MUSTACHE TRIM",
    desc: "Mustaches also need to be trimmed regularly",
    imgLocation: "images/icon-service-4-70x62.png",
  },
];

export function Service() {
  return (
    <>
      <section className="section-xl bg-periglacial-blue text-center">
        <div className="shell">
          <div className="range range-sm-center range-50">
            <div className="cell-xs-12">
              <h2>OUR SERVICES</h2>
              <div className="p text-width-medium">
                <p className="big">
                  Barbershop offers world-className men's haircuts, beard
                  grooming, and hot razor shaves. Here are just some of the
                  services we are known for.
                </p>
              </div>
            </div>
            <div className="cell-xs-12">
              <div className="range range-30">
                {/* Maps + props */}
                {services.map((sv) => (
                  <OurServices
                    key={sv.id}
                    type={sv.type}
                    desc={sv.desc}
                    imgLocation={sv.imgLocation}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function OurServices({ type, desc, imgLocation }) {
  return (
    <>
      <div className="cell-xs-6 cell-md-3">
        <article className="box-icon">
          <figure className="box-icon-image">
            <img src={imgLocation} alt={type + " img"} width="70" height="62" />
          </figure>
          <p className="box-icon-header">
            <Link className="link-underlined" to="/services.html">
              {type}
            </Link>
          </p>
          <p className="box-icon-text">{desc}</p>
        </article>
      </div>
    </>
  );
}

// ******************************** ABOUT *************************
export function About() {
  return (
    <section className="section-xl bg-periglacial-blue text-center">
      <div className="shell">
        <article className="box-promo">
          <div className="box-promo-left">
            <img
              className="box-promo-image"
              src="images/home-1-585x580.jpg"
              alt=""
              width="585"
              height="580"
            />
          </div>
          <div className="box-promo-body">
            <p className="box-promo-title">we help you look great</p>
            <div className="box-promo-text">
              <p>
                Barbershop is San Francisco's premier barber shop for stylish
                men looking for a place where they can feel comfortable, speak
                their minds, and leave satisfied.
              </p>
            </div>
            <div className="box-promo-control">
              <Link
                className="btn btn-sm btn-circle btn-primary"
                to="about.html"
              >
                learn more
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

// ******************************** BARBERS *************************
var barbers = [
  {
    id: 1,
    name: "SIMON WILSON",
    desc: "Mr. Wilson is the founder and owner of our barbershop.",
    img: "images/barbers-1-370x310.jpg",
  },
  {
    id: 2,
    name: "HARRY ANDERSON",
    desc: "Harry brings a detailed, meticulous approach to styling",
    img: "images/barbers-2-370x310.jpg",
  },
  {
    id: 3,
    name: "MATTHEW PHILLIPS",
    desc: "Matthew has several years of experience in the barber industry.",
    img: "images/barbers-3-370x310.jpg",
  },
];

export function Barbers() {
  return (
    <>
      <section className="section-xl bg-periglacial-blue text-center">
        <div className="shell">
          <div className="range range-75">
            <div className="cell-xs-12">
              <h2>OUR BARBERS</h2>
              <div className="p text-width-medium">
                <p className="big">
                  We employ only highly qualified barbers who are not just
                  professionals, but also enjoy maintaining the atmosphere of a
                  classic barbershop.
                </p>
              </div>
            </div>
            <div className="cell-xs-12">
              <div className="range range-30">
                {barbers.map((barber) => (
                  <Barber
                    key={barber.id}
                    name={barber.name}
                    desc={barber.desc}
                    img={barber.img}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Barber({ name, desc, img }) {
  return (
    <div className="cell-sm-6 cell-md-4 height-fill">
      <div className="thumbnail-card">
        <img
          className="thumbnail-card-image"
          src={img}
          alt={name + "image"}
          width="370"
          height="310"
        />
        <div className="thumbnail-card-body">
          <p
            className="thumbnail-card-header"
            data-toggle="modal"
            data-target="#modalWindow"
          >
            {name}
          </p>
          <div className="thumbnail-card-text">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ************************ More Service ********************************
export function MoreService() {
  return (
    <section
      className="section-xl bg-gray-dark bg-gray-dark-overlay bg-image"
      style={{ backgroundImage: "url(images/bg-image-3.jpg)" }}
    >
      <div className="shell">
        <div className="range">
          <div className="cell-sm-8 cell-md-7 cell-lg-6">
            <h2 style={{ maxWidth: "90%" }}>BARBERSHOP HAIRCUT SERVICES</h2>
            <p className="big">
              We take pride in each service we provide. Every effort is made to
              give you the best barber experience whatever your haircut or
              shaving style is. Feel free to browse our services list to learn
              more about the services we offer our clients and guests.
            </p>
            <Link
              className="btn btn-sm btn-circle btn-primary"
              to="/services.html"
            >
              view all services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ******************************** TESTIMONIALS *************************
var reviews = [
  {
    id: 1,
    name: "Matt Parker",
    desc: "I have taken my 3 yr old son for his first men’s haircut and now I’m glad he has such a fantastic look. I recommend any of the barbers at Barbershop for service and pride in their work. I believe my son would never be allowed to leave the chair without a really handsome cut.",
    img: "images/testimonials-1-100x100.jpg",
    stars: 3,
  },
  {
    id: 2,
    name: "John Miller",
    desc: "I wouldn't go anywhere else in San Francisco. I've been coming here for the last year and I've never felt better about paying good money for a haircut. The guys know what they are doing, give solid advice, and cut like pros. I wasn't used to this before but I’ll visit Barbershop again.",
    img: "images/testimonials-2-100x100.jpg",
    stars: 4,
  },
];

export function Testimonials() {
  return (
    <section className="section-xl bg-periglacial-blue text-center">
      <div className="shell">
        <div className="range range-sm-center range-75">
          <div className="cell-xs-12">
            <h2>TESTIMONIALS</h2>
            <div className="p text-width-medium">
              <p className="big">
                These reviews that our clients have recently submitted are the
                best way to learn more about our barbershop’s level of service
                and customer support.
              </p>
            </div>
          </div>
          <div className="cell-lg-10">
            {reviews.map((review) => (
              <Review
                key={review.id}
                name={review.name}
                desc={review.desc}
                img={review.img}
                stars={review.stars}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Review({ name, desc, img, stars }) {
  return (
    <blockquote className="quote-fullwidth">
      <div className="quote-fullwidth-left">
        <div className="quote-fullwidth-avatar">
          <img src={img} alt={name + " image"} width="100" height="100" />
        </div>
      </div>
      <div className="quote-fullwidth-body">
        <div className="quote-fullwidth-header">
          <cite>{name}</cite>
          <Stars stars={stars} />
        </div>
        <p className="quote-fullwidth-text">
          <q>{desc}</q>
        </p>
      </div>
    </blockquote>
  );
}

function Stars({ stars }) {
  var list = [];
  for (var i = 0; i < stars; i++) {
    list.push(<li key={i} className="icon icon-primary fa fa-star"></li>);
  }

  return <ul className="quote-fullwidth-rating">{list}</ul>;
}
