import "../style/style.headerGeneral.css";

export default function HeaderGeneral({ handleNavigation }) {
  return (
    <div className="containerHeader">
      <nav className="nav-Header">
        <ul>
          <li>
            <a
              href="#"
              onClick={() => handleNavigation("semaforo")}
              id="links-Header"
            >
              SEMÁFORO
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleNavigation("to-do")}
              id="links-Header"
            >
              To-Do List
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleNavigation("contador")}
              id="links-Header"
            >
              CONTADOR
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleNavigation("landing")}
              id="links-Header"
            >
              LANDING PAGE
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
