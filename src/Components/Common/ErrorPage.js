import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function ErrorPage() {
  return (
    <>
      <Header />
      <div id="wrapper">
        <section
          className="section-sm bg-periglacial-blue one-screen-page-content text-center"
          style={{ margin: "250px" }}
        >
          <div className="shell">
            <h2>404</h2>
            <div className="p text-width-small">
              <p className="big">
                The requested page couldn't be found - this could be due to a
                spelling error in the URL or a removed page.
              </p>
            </div>
            <Link className="btn btn-sm btn-style-1 btn-primary" to="/">
              Back to homepage
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
