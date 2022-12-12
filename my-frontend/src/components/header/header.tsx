import { Link } from 'react-router-dom';
import logo from '../../images/matrix.png';
import basket from '../../images/basketicon.jpeg';
import search from '../../images/search.webp';
import './style.css';


export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="headerInner">
          <Link to='/' className="headerLogo">
            <img src={logo} />
          </Link>
          <div>
            <form action="" className="searchBar">
              <label htmlFor="inputSearch"></label>
              <input type="text" />
              <span>Cautare in magazin</span>
              <button className="searchButtonIcon" title="cautare" type="submit"><img src={search} alt="" /></button>
            </form>
          </div>
          <div className="headerInfo">
            <div className="headerBasket">
              <a href="#"><img src={basket} /></a>
            </div>
            <div>
              <h1 className="phoneNumber">079 401 944</h1>
              <h2 className="callMessage">Te sunam noi !</h2>
            </div>
          </div>

        </div>
      </div>
      <div>
        <nav className="nav">
          <Link className="navLink" to="../routing/Laptopuri">LAPTOPURI</Link>
          <Link className="navLink" to="#">CALCULATOARE</Link>
          <Link className="navLink" to="../routing/TV/index.tsx">TV</Link>
          <Link className="navLink" to="#">GADGET</Link>
          <Link className="navLink" to="#">PERIFERICE</Link>
          <Link className="navLink" to="#">FOTO,AUDIO</Link>
          <Link className="navLink" to="#">RETELISTICA</Link>
          <Link className="navLink" to="#">TABLETE</Link>
          <Link className="navLink" to="../routing/Telefoane">TELEFOANE</Link>
        </nav>
      </div>
    </header>
  )
};
