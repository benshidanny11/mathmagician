import { React } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { id: 1, path: '/', text: 'Home' },
    { id: 2, path: '/calculator', text: 'Calculator' },
    { id: 3, path: '/quotes', text: 'Quotes' },
  ];
  return (
    <nav className="header">
      <h1>Math Magicians</h1>
      <div className="navbar-links-cont">
        <ul className="navlist">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                className="link"
                to={link.path}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
