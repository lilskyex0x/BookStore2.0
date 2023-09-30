import { Outlet, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faUser);

const Links = () => (
  <>
    <nav className="navBar">
      <span className="Bookstore-CMS">Bookstore-CMS</span>
      <ul className="nav__links">
        <Link className="book__link" to="/">BOOKS</Link>
        <Link className="categories__link" to="categories">CATEGORIES</Link>
      </ul>
      <span className="ppIcon__wrapper">
        <FontAwesomeIcon icon={faUser} beatFade size="sm" style={{ color: '#0290ff' }} />
      </span>
    </nav>
    <Outlet />
  </>
);
export default Links;
