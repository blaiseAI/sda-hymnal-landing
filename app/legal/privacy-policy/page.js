import Link from 'next/link';
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
export default function PrivacyPolicy() {
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
    <iframe src="https://www.freeprivacypolicy.com/live/8e74bee0-1e2c-4982-8e96-7bc44044f282"></iframe>
    </main>
    </div>


  );
}