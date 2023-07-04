import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className="container">
        <header className="d-flex align-items-center justify-content-between py-4">
          <div className="logo">
            <Image
              src="/icon.png" // replace with your logo
              alt="Logo"
              width={50}
              height={50}
            />
          </div>
          <nav className="menu">
            <ul className="list-unstyled d-flex mb-0">
              <li className="me-3">
                <button className="btn btn text-decoration-none" type="button">
                  Email
                </button>
              </li>
              <li>
                <button className="btn btn text-decoration-none">Github</button>
              </li>
            </ul>
          </nav>
        </header>
        <main className="row">
          <div className="col-md-6 mb-4">
            <div className={styles.center}>
              <h1 className="display-2">SDA Kinyarwanda Hymnal</h1>
              <p className="lead mb-4">
                Experience SDA Hymns in Kinyarwanda - Anywhere, Anytime
              </p>
              <div className="d-flex mb-4">
                <button className="btn btn-dark me-2">App Store</button>
                <button className="btn btn-dark">Google Play</button>
              </div>
              <div className="d-flex align-items-center">
                <h3 className="me-2">1.2K</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-download me-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
                <span>Downloads</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="position-relative">
              <div className="background-image"></div>
              <div className="screenshot">
                <Image
                  src="/landing.png" // replace with your screenshot
                  alt="Screenshot"
                  className="img-fluid"
                  width={350}
                  height={700}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className={styles.center}>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex align-items-center mb-3 ">
                <img
                  src="/icon.png"
                  alt="Logo"
                  className="me-2"
                  width={50}
                  height={50}
                />
                <h5>SDA Kinyarwanda Hymnal App</h5>
              </div>
              <p>
                Designed and built with all the love in the world by Blaise
                Sebagabo.
              </p>
              <p className="small text-muted">
                Code licensed MIT, docs CC BY 3.0. <br />
                Currently v1.3.3.
              </p>
              <p className="small mb-0 text-muted">
                © {new Date().getFullYear()} Blaise Sebagabo. All Rights
                Reserved.
              </p>
            </div>
            <div className="col-md-6">
              <h5>Legal</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="legal/privacy-policy"
                    className="text-decoration-none text-muted"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="legal/terms-conditions"
                    className="text-decoration-none text-muted"
                  >
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
