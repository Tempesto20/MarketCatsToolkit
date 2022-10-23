import React from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import arrowLeft from './arrowLeft.svg';
// import arrowRigth from './arrowRigth.svg';
import styles from './gallery.module.scss';
import GalleryItem from './GalleryItem/GalleryItem';

const Gallery = () => {
  var settings = {
    dots: true,
  };

  const [catImg, setCatImg] = React.useState([]);

  React.useEffect(() => {
    try {
      axios.get(`https://633db211f2b0e623dc79b585.mockapi.io/cats`).then((resp) => {
        const data = resp.data;
        console.log(data);
        setCatImg(data);
      });
    } catch (error) {
      console.log(error + 'Header');
    }
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.introduction}>Приветствую в разделе Gallery</h2>
          <h3 className={styles.clarification}>
            В данном разделе у Вас имеется возможность рассмотреть люимцев, которые представлены на
            сайте.
          </h3>
        </div>
        <div className={styles.container}>
          <Slider {...settings}>
            {catImg.map((items, index) => (
              <GalleryItem key={index} {...items} />
            ))}
          </Slider>
        </div>
        <div className={styles.bottom}>
          При нажатии на картинку, можно получить детальную информацию по котику.
        </div>
      </div>
    </div>
  );
};

export default Gallery;

{
  /* <div>
                <img src="https://lapkins.ru/upload/uf/5f5/5f5ac46a1738e48ca1c086e67fd52b3e.jpg" className={styles.imgCat} />
              </div>
              <div>
                <img src="https://pro-kotikov.ru/wp-content/uploads/2018/08/265-800x423.jpg" className={styles.imgCat} />
              </div>
              <div>
                <img src="https://pro-kotikov.ru/wp-content/uploads/2018/05/3dc624b41a44f75222d1190218605699.jpg" className={styles.imgCat} />
              </div>
              <div>
                <img src="https://pro-kotikov.ru/wp-content/uploads/2018/08/%D0%A4%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C-5.jpg" className={styles.imgCat} />
              </div>
              <div>
                <img src="https://pro-kotikov.ru/wp-content/uploads/2018/09/norwegian-forest-cat-10.jpg" className={styles.imgCat} />
              </div>
              <div>
                <img src="https://pro-kotikov.ru/wp-content/uploads/2019/01/american-shorthair-cat.jpeg" className={styles.imgCat} />
              </div>
              <div>
                <img src="https://pro-kotikov.ru/wp-content/uploads/2020/09/devon-2.jpg" className={styles.imgCat} />
              </div>
              <div>
                <img src="https://pro-kotikov.ru/wp-content/uploads/2019/04/british-cat-mauve-photo.jpg" className={styles.imgCat} />
              </div>
              <div>
                <img src="https://pro-kotikov.ru/wp-content/uploads/2018/09/nibelung-11.jpg" className={styles.imgCat} />
              </div>
              <div>
                <img src="https://pro-kotikov.ru/wp-content/uploads/2018/10/burman-cat-blue.jpg" className={styles.imgCat} />
              </div>
              <div>
                <img src="https://pro-kotikov.ru/wp-content/uploads/2020/09/devon-5.jpg" className={styles.imgCat} />
              </div>
              <div>
                <img src="https://pro-kotikov.ru/wp-content/uploads/2018/08/Sphynx-cat-1-e1511166214543-1024x591.jpg" className={styles.imgCat} />
              </div> */
}
