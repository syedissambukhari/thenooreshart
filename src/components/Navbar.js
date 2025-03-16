import { Fragment, useState } from 'react';
import { Link } from 'react-scroll';
import { Spin as Hamburger } from 'hamburger-react';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import styles from '../assets/styles/Navbar.module.css';
import Menu from './Menu';
import logoImage from '../assets/images/noorlogo.png';
import searchIcon from '../assets/images/searchbar.svg';
import servicesData from '../assets/data/services.json';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isPageWide = useMediaQuery('(min-width: 481px)');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
    // You can add navigation or filter logic here
  };

  let menu = null;
  if (open && !isPageWide) {
    menu = <Menu />;
  }

  return (
    <Fragment>
      <motion.nav
        className={styles.Navbar}
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src={logoImage} alt="Logo" className={styles.Logo} />
          {isPageWide && (
            <ul className={styles.Link}>
              <li>
                <Link activeClass={styles.active} to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
              </li>
              <li>
                <Link activeClass={styles.active} to="about" spy={true} smooth={true} offset={-70} duration={500}>About Us</Link>
              </li>

              {/* Dropdown for Services */}
              <li className={styles.Dropdown}>
                <span className={styles.DropdownToggle}>Services </span>
                <ul className={styles.DropdownMenu}>
                  {servicesData.map((service) => (
                    <li key={service.id} className={styles.SubDropdown}>
                      <span>{service.title}</span>
                      {service.subcategories && (
                        <ul className={styles.SubDropdownMenu}>
                          {service.subcategories.map((sub) => (
                            <li key={sub.id}>
                              <a href="home">{sub.title}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <Link activeClass={styles.active} to="blogs" spy={true} smooth={true} offset={-70} duration={500}>Blogs</Link>
              </li>
              <li>
                <Link activeClass={styles.active} to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
              </li>
            </ul>
          )}

          {/* 🔍 Search Bar */}
          {isPageWide && (
            <form onSubmit={handleSearchSubmit} className={styles.SearchForm}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.SearchInput}
              />
              <button type="submit" className={styles.SearchButton}>
                <img src={searchIcon} alt="Search" className={styles.SearchIcon} />
              </button>
            </form>
          )}

          {/* CTA Button */}
          {isPageWide && (
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.Button}
            >
              Get Your Gift Now!
            </Link>
          )}

          {/* Mobile Hamburger Menu */}
          {!isPageWide && (
            <Hamburger
              size={28}
              color="#231f20"
              label="Show menu"
              toggled={open}
              toggle={setOpen}
              rounded
            />
          )}
        </div>
      </motion.nav>
      {menu}
    </Fragment>
  );
};

export default Navbar;
