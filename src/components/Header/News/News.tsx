import React from 'react';
import thenks from '../../../assets/gif/thenksNews.gif';
import catNews from '../../../assets/img/catNews.jpg';
import point from '../../../assets/img/pointNews.png';
import styles from './news.module.scss';


const News: React.FC =()=> {
  const headerSubtitle = [
    'Переходы по страницам сайта без перезагрузки страниц',
    'Сохранение выбранных параметров после перезагрузки сайта',
    'Сортировки',
    'Манипуляция глобальным состоянием с помощью Redux Toolkit',
    'Просмотр детальной информации по интересующему Вас котику, по нажатию на его фотографию или имя',
    'Добавление и удаления из корзины',
    'Добавления и удаления из фаворитов',
  ];
  const config = [
    'TypeScript, JavaScript (ES6+)',
    'ReactJS, Redux Toolkit, Redux-Persist',
    'Formik, Yup, React Hook Form',
    'Hooks: {useState, useEffect, useReduser, useContext, useRef}',
    'react-router-dom: {BrowserRouter, Link, useNavigate, useParams}',
    'SCSS / SCSS Modules / HTML',
    'Twitter Bootstrap, Slick',
    ' Axios',
    'CLSX',
  ];

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.preview}>
            <p>Приветствую, благодарю Вас за то, что вы решили посетить сайт.</p>
          </h2>
          <div className={styles.header}>
            <div className="">
              <img src={catNews} alt="" className={styles.cat} />
            </div>
            <div className={styles.headerContent}>
              <h3 className={styles.headerPreview}>
                В данном разделе представлена информативная часть маркетплейса!
              </h3>
              <h4 className={styles.headerTitle}>
                Начнём с самого вкусного, а именно с функциональных особенностей
              </h4>
              <div className={styles.headerSubtitle}>
                {headerSubtitle.map((item, index) => {
                  return (
                    <ul key={index}>
                      <img src={point} alt="" className={styles.point} />
                      <li>{item}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
          <h3 className={styles.middlePreview}>
            В сборке были задействованны следующие компаненты
          </h3>
          <div className={styles.middle}>
            <div className="">
              <img src={thenks} alt="" className={styles.thenks} />
            </div>
            <div className="">
              <div className={styles.middleContent}>
                {config.map((item, index) => {
                  return (
                    <ul key={index}>
                      <img src={point} alt="" className={styles.point} />
                      <li>{item}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className=""></div>
          </div>

          <div className={styles.bottom}>
            <div className="">Благодарю Вас за предоставленное внимание!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;

// <p>- Переходы по страницам сайта без перезагрузки страниц</p>
//                 <p>- Сохранение выбранных параметров после перезагрузки сайта</p>
//                 <p>- Сортировки</p>
//                 <p>- Манипуляция глобальным состоянием с помощью Redux Toolkit </p>
//                 <p>- Просмотр детальной информации по интересующему Вас котику, по нажатию на его
//                   фотографию или имя
//                 </p>
//                 <p>- Добавление и удаления из корзины</p>
//                 <p>- Добавления и удаления из фаворитов</p>

// <p>- TypeScript, JavaScript (ES6+)</p>
// <p>- ReactJS, Redux Toolkit</p>
// <p>- Formik, Yup, React Hook Form</p>
// <p>- Hooks, useState, useEffect, useReduser, useContext, useRef</p>
// <p>- react-router-dom: BrowserRouter, Link, useNavigate, useParams</p>
// <p>- SCSS / SCSS Modules / HTML</p>
// <p>- Twitter Bootstrap, Slick</p>
// <p>- Axios</p>
// <p>- CLSX</p>
