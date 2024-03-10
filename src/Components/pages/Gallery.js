import Footer from "../Common/Footer";
import Header from "../Common/Header";

export default function Gallery() {
  return (
    <>
      <Header />
      <div className="page-title">
        <div className="page-title-content">
          <div className="shell">
            <p className="page-title-header">Gallery</p>
          </div>
        </div>
      </div>
      <section className="section-xl bg-white">
        <div className="shell-fluid shell-condensed">
          <div className="range range-condensed">
            <div className="cell-md-6 cell-md-6-mod-1 image-wrap-left bg-white bg-image">
              <div className="image-wrap-inner">
                <h2>haircut</h2>
                <p className="big">
                  Captured in black and white, the photograph portrays a dynamic
                  scene within a bustling barber shop. The focal point centers
                  on a row of men seated in vintage barber chairs, each one
                  undergoing a meticulous grooming session. The atmosphere
                  exudes nostalgia, with classic décor adorning the walls and
                  the buzz of electric clippers filling the air.
                </p>
              </div>
            </div>
            <div
              className="cell-md-6 cell-md-6-mod-2 image-wrap-right bg-gray-dark bg-image"
              style={{
                backgroundImage: "url(images/home-three-3-1011x800.jpg)",
              }}
            ></div>
          </div>
        </div>
        <div className="shell-fluid shell-condensed">
          <div className="range range-condensed">
            <div
              className="cell-md-6 cell-md-6-mod-2 image-wrap-right bg-gray-dark bg-image"
              style={{
                backgroundImage: "url(images/post-single-1-1170x600.jpg)",
              }}
            ></div>
            <div className="cell-md-6 cell-md-6-mod-1 image-wrap-left bg-white bg-image">
              <div className="image-wrap-inner">
                <h2>Shaving</h2>
                <p className="big">
                  In this captivating image, the artistry of the barber's trade
                  takes center stage as a skilled barber meticulously shaves a
                  customer's beard. The scene unfolds in a warmly lit corner of
                  a traditional barbershop, where the ambiance is steeped in
                  history and camaraderie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
