import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from '../pages/About';
import Tours from '../pages/Tours';
import Contacts from '../pages/Contacts';
import styles from './Nav.module.css'; // Импортируем CSS модули 
import Home from '../pages/Home'
import logo from '../img/vecteezy_mountain_1206236.png'
import menu from '../img/menu_icon.png'



const Navigation = () => {
  return (
    <Router>
      <header>
        {/* Навигационное меню */}
        <nav className={`navbar ${styles.navbar}`}>
          <input type="checkbox" name='toggle' id='menu' className='toggleMenu' />
          <label for="menu"><img src={menu} alt="menu" /></label>
          <Link to="/" className={styles.navLink}><img className={styles.nav_logo} src={logo} alt='home' ></img><figcaption className={styles.title_mini}>Туроператор по Уралу</figcaption></Link>
          <Link to="/" className={styles.navLink}><h1 className={styles.title}>ПУТНИК</h1></Link>
          <ul>
            <li><Link to="/Tours" className={styles.navLink}>Туры</Link></li>
            <li><Link to="/About" className={styles.navLink}>О нас</Link></li>
            <li><Link to="/contacts" className={styles.navLink}>Контакты</Link></li>
            <li><p>Телефон <br /><a href="tel:+79222222222">+7-922-222-22-22</a></p></li>
          </ul>
        </nav>

        {/* Контент страниц */}
        <div className={styles.pageContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </header>
    </Router>
  );
};

export default Navigation;