import React from 'react';
import { Link } from "react-router-dom";
import logoSvg from '../../assets/img/svg/logo.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
//import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './header.scss';

//import CatBlock from '../../context/CatBlock';



function Header() {

    // const catBlock = useContext(CatBlock); //вызов контекста для передачи знаечния
    // const catLength = catBlock.length;
    // //console.log(catLength);

    return (
        <header className="header">
            <div className="header__background">
                <div className="header__rgda">
                    <div className="header_max">
                        
                        <div className="header__container section-container">
                            <BurgerMenu />
                            <Link to="/" className="header__logo">
                                <img src={logoSvg} alt="" className="header__logo-1"></img>
                            </Link>
                            <nav className="js-header__nav header__nav">
                                <ul className="header__nav-list">
                                    <li className="header__nav-item">
                                        <a href="#main" className="header__nav-link">Main</a>
                                    </li>
                                    <li className="header__nav-item">
                                        <a href="#gallery" className="header__nav-link">Gallery</a>
                                    </li>
                                    <li className="header__nav-item">
                                        <a href="#news" className="header__nav-link">News</a>
                                    </li>
                                    <li className="header__nav-item">
                                        <a href="https://tempesto20.github.io/Summary.github.io-/" target="_blanc"
                                         className="header__nav-link"> Profile</a>
                                    </li>
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
                                    <p>Найдено 8 котов</p>
                                </div>
                            </div>
                            
                        </div>                  
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;