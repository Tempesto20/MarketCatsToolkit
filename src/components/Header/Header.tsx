import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { axiosCats } from '../../redux/slices/asyncThunkSlice';
import logoSvg from '../../assets/svg/logo.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './header.scss';

const headerList = ['Main', 'Gallery', 'News', 'Profile'];
const listLinks = ['/', '/gallery', '/news', '/profile'];

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const cats = useSelector((state: RootState) => state.asyncThunkSlice.items);
  // console.log(cats);
  const catLength = cats.length;
  // console.log(catLength);

  const getCats = async () => {
    dispatch(axiosCats());
  };

  React.useEffect(() => {
    getCats();
  }, []);

  return (
    <header className="header">
      <BurgerMenu />
      <div className="header__background">
        <div className="header__rgda">
          <div className="header_max">
            <div className="header__container">
              <Link to="/" className="header__logo">
                <img src={logoSvg} alt="" className="header__logo-1"></img>
              </Link>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  {headerList.map((items, index) => {
                    return (
                      <li className="header__nav-item" key={index}>
                        <Link to={listLinks[index]} className="header__nav-link">
                          {items}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="header__data">
                <div className="header__number-container">
                  <p className="header__number">+544 3490 00000</p>
                  <p className="header__text">Звони скорее!</p>
                </div>
              </div>
            </div>

            <div className="header__block">
              <div className="header__search">
                <div className="header__found">
                  <p>Найдено {catLength} котов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

//import axios from 'axios';

// const [catLength, setCatLength] = React.useState([]);

// React.useEffect(() => {
//   try {
//     axios.get(`https://633db211f2b0e623dc79b585.mockapi.io/cats`).then((resp) => {
//       const data = resp.data.length;
//       setCatLength(data);
//     });
//   } catch (error) {
//     console.log(error + 'Header');
//   }
// }, []);

// Не могу брать длину массива, тк установил лимит на макс.4 на странице, те динамически бует отображаться не корректно
// const itemsCat = useSelector((state)=>state.catsSlice.items )
// const itemsCatLength = itemsCat.length;
// console.log(itemsCatLength)

//https://tempesto20.github.io/Summary.github.io-/

{
  /* <li className="header__nav-item">
<a href="#main" className="header__nav-link">
  Main
</a>
</li>
<li className="header__nav-item">
<a href="#gallery" className="header__nav-link">
  Gallery
</a>
</li>
<li className="header__nav-item">
<a href="#news" className="header__nav-link">
  News
</a>
</li>
<li className="header__nav-item">
<a
  href="https://tempesto20.github.io/Summary.github.io-/"
  target="_blanc"
  className="header__nav-link">
  {' '}
  Profile
</a>
</li> */
}
