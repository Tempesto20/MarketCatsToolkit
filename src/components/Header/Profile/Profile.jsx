import React from 'react';
import styles from './profile.module.scss';
import me from './me.jpg';
import arrow from './arrow.svg';
import github from './github.svg';
import hh from './hh.png';
import habr from './habr.jpg';
import point from './point.png';
import location from './location.png';
import mail from './mail.png';
import react from './react.png';
import star from './star.png';

function Profile() {
  const skillsFrontend = [
    'TypeScript, JavaScript (ES6+)',
    'ReactJS, Redux Toolkit',
    'Formik, Yup, React Hook Form',
    'Hooks: {useState, useEffect, useReduser, useContext, useRef}',
    'react-router-dom: {BrowserRouter, Link, useNavigate, useParams}',
    'SCSS / SCSS Modules / HTML',
    'Twitter Bootstrap, Slick',
    'Axios, Fetch, API',
    'Figma, Prettier',
  ];
  const skillsOther = ['Git / GitHub / GitLab / TortoiseGit', 'BEM (CSS)', 'CLSX'];

  const skillsExperience = [
    'Опыт коллективной разработки',
    'Улучшение готового продукта',
    'Выявление неисправностей в проде',
    'Обучение сотрудников',
    'Работа с чужим кодом',
    'Опыт коммерческой разработки',
  ];
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.body}>
          <div className={styles.img}>
            <img src={me} alt="" className={styles.avatar} />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <p>Aleksei Sutkovoi</p>
            </div>

            <div className={styles.subtitle}>
              <div className={styles.profession}>
                <img src={react} alt="" className={styles.reactImg} />
                <p>React developer</p>
              </div>
              <div className={styles.location}>
                <img src={location} alt="" className={styles.locationImg} />
                <p>23 years old, Magnitogorsk</p>
              </div>
              <div className={styles.mail}>
                <img src={mail} alt="" className={styles.mailImg} />
                <p> tempesto20@mail.ru</p>
              </div>
            </div>
            
            <div className={styles.skills}>
              <div className={styles.skillsFrontend}>
              <div className={styles.FrontendPrew}>Frontend:</div>
                {skillsFrontend.map((item, index) => {
                  return (
                    <ul key={index}>
                      <img src={point} alt="" className={styles.point} />
                      <li >{item}</li>
                    </ul>
                  );
                })}
              </div>
              
              <div className={styles.skillsOther}>
              <div className={styles.OtherPrew}>Другие скиллы:</div>
                {skillsOther.map((item, index) => {
                  return (
                    <ul key={index}>
                      <img src={point} alt="" className={styles.point} />
                      <li >{item}</li>
                    </ul>
                  );
                })}
              </div>
             
              <div className={styles.skillsExperience}>
              <div className={styles.ExperiencePrew}>Опыт:</div>
                {skillsExperience.map((item, index) => {
                  return (
                    <ul key={index}>
                      <img src={star} alt="" className={styles.star} />
                      <li >{item}</li>
                    </ul>
                  );
                })}
              </div>
            </div>

            <div className={styles.contacts}>Контакты:</div>
            <div className={styles.summer}>
              
              <div className={styles.summerBody}>
                
                <div className={styles.github}>
                  <a href="https://github.com/Tempesto20?tab=repositories" target="_blanc">
                    <img src={github} alt="" className={styles.githubImg} />
                  </a>
                </div>

                <div className={styles.hh}>
                  <a
                    href="https://ekaterinburg.hh.ru/resume/8904f75eff09a7e0400039ed1f743069326f33"
                    target="_blanc"
                    className="arrow">
                    <img src={hh} alt="" className={styles.hhImg} />
                  </a>
                </div>

                <div className={styles.habr}>
                  <a href="https://career.habr.com/tempesto" target="_blanc" className="arrow">
                    <img src={habr} alt="" className={styles.habrImg} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;

{
  /* <li>-TypeScript, JavaScript (ES6+)</li>
                <p>- ReactJS, Redux Toolkit</p>
                <p>- Formik, Yup, React Hook Form</p>
                <p>- Hooks, useState, useEffect, useReduser, useContext, useRef</p>
                <p>- react-router-dom: BrowserRouter, Link, useNavigate, useParams</p>
                <p>- SCSS / SCSS Modules / HTML</p>
                <p>- Twitter Bootstrap, Slick</p>
                <p>- Axios, Fetch, API </p>
                <p>- Figma, Prettier</p> */
}

{
  /* <p>- Git / GitHub / GitLab / TortoiseGit</p>
                <p>- BEM (CSS) </p>
                <p>- CLSX</p> */
}

// <p>- Опыт коллективной разработки</p>
// <p>- Улучшение готового продукта </p>
// <p>- Выявление неисправностей в проде</p>
// <p>- Обучение сотрудников</p>
// <p>- Работа с чужим кодом </p>
// <p>- Опыт коммерческой разработки</p>
