import Link from 'next/link';
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css";

export default function TermsConditions() {
  return (
    <div className="container">
    <header className="d-flex align-items-center justify-content-between py-4">
      <div className="logo">
      <Link href="/">
                <Image
                  src="/icon.png"
                  alt="Logo"
                  width={50}
                  height={50}
                />
            </Link>
      </div>
      <nav className="menu">
        <ul className="list-unstyled d-flex mb-0">
          <li className="me-3">
            {/* <button className="btn btn text-decoration-none" type="button">
              Home
            </button> */}
            <a
                    href="/"
                    className="text-decoration-none text-muted"
                  >Home</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
    <div className="iframe-container">
        <iframe
          className="container"
          style={{ width: '100%', height: '100%', border: 'none' }}
          src="https://www.freeprivacypolicy.com/live/0ccab47f-c4cc-493c-a448-39ce6c5c1d1a"
          title="Embedded Content"
          allowFullScreen
        ></iframe>
      </div>
    </main>
    </div>
  );
}