
import { Link } from 'react-router-dom';
import '../style/header.css'
import type { FC } from 'react';

const Header:FC = () => {
  return (
    <header className="header">
      <h1>Gym</h1>
      <nav>
        <Link to="/">Новая тренировка</Link>
        <Link to="/history">История</Link>
        <Link to="/stats">Статистика</Link>
      </nav>
    </header>
  );
};

export default Header;