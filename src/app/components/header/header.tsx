import "./header.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header-main">
      <div className="header-container">
        <div className="header-title">
          <h1>Développeur front-end</h1>
          <h1>Farhi Karim</h1>
        </div>
        <div className="header-nav">
          <nav>
            <ul>
              <li>
                <Link href="/cv">CV</Link>
              </li>
              <li>
                <Link href="/portefolio">Portefolio</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
