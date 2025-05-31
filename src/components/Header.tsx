import { Link } from 'react-router-dom';
import '../style/header.css'
import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="header">
      <h1 className="header__title">Gym Tracker</h1>
      <nav className="header__nav">
        <Link className="nav-link" to="/">Новая тренировка</Link>
        <Link className="nav-link" to="/history">История</Link>
        <Link className="nav-link" to="/stats">Статистика</Link>
      </nav>
    </header>
  );
};

export default Header;