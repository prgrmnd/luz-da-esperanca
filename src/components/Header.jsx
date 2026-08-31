import { useState } from 'react';
import { menuGroups } from '../data/siteData';

export default function Header({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  const closeAllMenus = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  const navigate = (event) => {
    onNavigate(event);
    closeAllMenus();
  };

  return <>
    <header className="site-header" id="header"><div className="container nav-top">
      <a href="/" className="brand" onClick={navigate} aria-label="Luz da Esperanca — pagina inicial"><strong>Luz da<br />Esperanca</strong></a>
      <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}><span /><span /><span /></button>
      <nav className={`nav-list ${menuOpen ? 'open' : ''}`} aria-label="Navegacao principal" onMouseLeave={() => window.innerWidth > 900 && setOpenGroup(null)}>
        <a href="/" className="nav-link" onClick={navigate}>Inicio</a>
        {menuGroups.map((group, index) => <div
          className={`nav-item ${openGroup === index ? 'open' : ''}`}
          key={group.label}
          onMouseEnter={() => window.innerWidth > 900 && setOpenGroup(index)}
          onMouseLeave={() => window.innerWidth > 900 && setOpenGroup(null)}
        >
          <a
            href={group.target}
            className="nav-link"
            onClick={(event) => {
              if (window.innerWidth <= 900) {
                event.preventDefault();
                setOpenGroup(openGroup === index ? null : index);
                return;
              }

              closeAllMenus();
              navigate(event);
            }}
            aria-haspopup="true"
            aria-expanded={openGroup === index}
          >
            {group.label}
            <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
          </a>
          <div className="dropdown" role="menu" aria-label={`Submenu ${group.label}`}>
            {group.links.map(([label, target]) => <a href={target} role="menuitem" key={label} onClick={(event) => {
              closeAllMenus();
              navigate(event);
            }}>{label}</a>)}
          </div>
        </div>)}
        <a href="#noticias" className="nav-link" onClick={navigate}>Noticias</a>
        <a href="#contato" className="nav-link" onClick={navigate}>Contato</a>
      </nav>
    </div></header>
    {menuOpen && <div className="nav-overlay open" onClick={() => setMenuOpen(false)} />}
  </>;
}
